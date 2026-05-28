# -*- coding: utf-8 -*-
"""
S.A Museum 이미지 수집기.
Wikimedia Commons의 Special:FilePath 로 퍼블릭도메인 명화 고해상도 이미지를 받아
assets/museum/ 에 저장하고, 매직바이트/용량으로 무결성을 검증한다.
성공한 slug 목록을 scripts/museum_valid.json 에 기록한다.
"""
import json
import os
import sys
import urllib.parse
import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(REPO, "assets", "museum")
os.makedirs(OUT, exist_ok=True)

# slug -> Wikimedia Commons File: 이름 (확장자 포함)
NEW = {
    "vangogh-starry-night": "Van Gogh - Starry Night - Google Art Project.jpg",
    "vermeer-pearl-earring": "1665 Girl with a Pearl Earring.jpg",
    "hokusai-great-wave": "Tsunami by hokusai 19th century.jpg",
    "klimt-the-kiss": "The Kiss - Gustav Klimt - Google Cultural Institute.jpg",
    "botticelli-birth-of-venus": "Sandro Botticelli - La nascita di Venere - Google Art Project - edited.jpg",
    "leonardo-mona-lisa": "Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg",
    "vermeer-milkmaid": "Johannes Vermeer - Het melkmeisje - Google Art Project.jpg",
    "munch-the-scream": "Edvard Munch, 1893, The Scream, oil, tempera and pastel on cardboard, 91 x 73 cm, National Gallery of Norway.jpg",
    "monet-impression-sunrise": "Claude Monet, Impression, soleil levant.jpg",
    "michelangelo-creation-of-adam": "Michelangelo - Creation of Adam (cropped).jpg",
    "rembrandt-night-watch": "The Night Watch - HD.jpg",
    "vangogh-sunflowers": "Vincent Willem van Gogh 127.jpg",
    "vangogh-bedroom": "Vincent van Gogh - De slaapkamer - Google Art Project.jpg",
    "monet-woman-with-parasol": "Claude Monet - Woman with a Parasol - Madame Monet and Her Son - Google Art Project.jpg",
    "renoir-boating-party": "Pierre-Auguste Renoir - Luncheon of the Boating Party - Google Art Project.jpg",
    "seurat-grande-jatte": "A Sunday on La Grande Jatte, Georges Seurat, 1884.jpg",
    "cezanne-card-players": "Paul Cézanne, Les joueurs de carte (1892-95).jpg",
    "caravaggio-st-matthew": "The Calling of Saint Matthew-Caravaggio (1599-1600).jpg",
    "vermeer-view-of-delft": "Johannes Vermeer - View of Delft - Google Art Project.jpg",
    "turner-fighting-temeraire": "Turner, J. M. W. - The Fighting Téméraire tugged to her last Berth to be broken up.jpg",
    "constable-hay-wain": "John Constable The Hay Wain.jpg",
    "goya-third-of-may": "El Tres de Mayo, by Francisco de Goya, from Prado thin black margin.jpg",
    "velazquez-las-meninas": "Las Meninas, by Diego Velázquez, from Prado in Google Earth.jpg",
    "vaneyck-arnolfini": "Van Eyck - Arnolfini Portrait.jpg",
    "bruegel-hunters-in-snow": "Pieter Bruegel the Elder - Hunters in the Snow (Winter) - Google Art Project.jpg",
    "hokusai-red-fuji": "Red Fuji southern wind clear morning.jpg",
    "hiroshige-sudden-shower": "Hiroshige Atake sudden shower.jpg",
    "whistler-mother": "Whistlers Mother high res.jpg",
    "klimt-adele": "Gustav Klimt 046.jpg",
    "friedrich-wanderer": "Caspar David Friedrich - Wanderer above the sea of fog.jpg",
    "manet-dejeuner": "Edouard Manet - Le Déjeuner sur l'herbe.jpg",
    "manet-folies-bergere": "Edouard Manet, A Bar at the Folies-Bergère - Google Art Project.jpg",
    "gauguin-where-do-we-come-from": "Paul Gauguin - D'ou venons-nous - Que sommes-nous - Ou allons-nous.jpg",
    "lautrec-moulin-rouge": "Henri de Toulouse-Lautrec - At the Moulin Rouge - Google Art Project.jpg",
    "raphael-school-of-athens": "\"The School of Athens\" by Raffaello Sanzio da Urbino.jpg",
    "cassatt-childs-bath": "Mary Cassatt - The Child's Bath - Google Art Project.jpg",
    "manet-olympia": "Edouard Manet - Olympia - Google Art Project 3.jpg",
    "jeongseon-inwang": "Inwangjesaekdo.jpg",
    "caillebotte-rainy-day": "Gustave Caillebotte - Paris Street; Rainy Day - Google Art Project.jpg",
    "vangogh-irises": "Irises-Vincent van Gogh.jpg",
    # --- buffer (여분: 일부 실패 대비) ---
    "renoir-moulin-galette": "Pierre-Auguste Renoir, Le Moulin de la Galette.jpg",
    "cezanne-mont-sainte-victoire": "Paul Cézanne 110.jpg",
    "degas-absinthe": "Edgar Degas - In a Café - Google Art Project.jpg",
    "vermeer-woman-balance": "Vermeer - Woman holding a balance.jpg",
    "monet-haystack": "Claude Monet - Grainstack (Sunset) - Google Art Project.jpg",
    "rembrandt-self-portrait": "Rembrandt van Rijn - Self-Portrait - Google Art Project.jpg",
}

UA = "PointAndLine-SAMuseum/1.0 (https://pointnline.github.io/SOGANG-AIMBA7th/; educational PD art archive)"


def url_for(filename: str, width: int = 1600) -> str:
    enc = urllib.parse.quote(filename.replace(" ", "_"))
    return f"https://commons.wikimedia.org/wiki/Special:FilePath/{enc}?width={width}"


def is_image(data: bytes) -> str:
    if data[:3] == b"\xff\xd8\xff":
        return "jpg"
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return "png"
    return ""


def fetch(slug: str, filename: str):
    url = url_for(filename)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=60) as r:
            data = r.read()
    except Exception as e:  # noqa
        return slug, False, f"ERR {type(e).__name__}: {str(e)[:80]}"
    kind = is_image(data)
    if not kind:
        return slug, False, f"NOT-IMAGE ({len(data)}B, head={data[:16]!r})"
    if len(data) < 30000:
        return slug, False, f"TOO-SMALL ({len(data)}B)"
    path = os.path.join(OUT, f"{slug}.jpg")
    with open(path, "wb") as f:
        f.write(data)
    return slug, True, f"OK {kind} {len(data)//1024}KB"


def main():
    valid = []
    results = []
    with ThreadPoolExecutor(max_workers=6) as ex:
        futs = {ex.submit(fetch, s, fn): s for s, fn in NEW.items()}
        for fut in as_completed(futs):
            slug, ok, msg = fut.result()
            results.append((slug, ok, msg))
            if ok:
                valid.append(slug)
            print(("  OK  " if ok else "FAIL  ") + f"{slug:32s} {msg}", flush=True)
    with open(os.path.join(HERE, "museum_valid.json"), "w", encoding="utf-8") as f:
        json.dump(sorted(valid), f, ensure_ascii=False, indent=2)
    ok_n = sum(1 for _, ok, _ in results if ok)
    print(f"\n=== {ok_n}/{len(NEW)} OK; valid written to scripts/museum_valid.json ===")
    fails = [s for s, ok, _ in results if not ok]
    if fails:
        print("FAILED:", ", ".join(fails))


if __name__ == "__main__":
    main()
