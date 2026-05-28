# -*- coding: utf-8 -*-
"""
fetch_museum.py 에서 404/429로 실패한 작품을 Wikimedia Commons 검색 API로
정확히 해석(resolve)해서 1600px 썸네일을 내려받는다. 순차 + 지연으로 rate limit 회피.
"""
import json
import os
import time
import urllib.parse
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(REPO, "assets", "museum")

UA = "PointAndLine-SAMuseum/1.0 (https://pointnline.github.io/SOGANG-AIMBA7th/; educational PD art archive)"
API = "https://commons.wikimedia.org/w/api.php"

# slug -> 검색어 (해당 명화를 유일하게 특정)
FIX = {
    "caravaggio-st-matthew": "The Calling of Saint Matthew Caravaggio painting",
    "turner-fighting-temeraire": "The Fighting Temeraire Turner",
    "vermeer-view-of-delft": "View of Delft Vermeer",
    "hiroshige-sudden-shower": "Sudden shower Shin-Ohashi Atake Hiroshige",
    "manet-dejeuner": "Le Dejeuner sur l'herbe Manet",
    "manet-folies-bergere": "A Bar at the Folies-Bergere Manet",
    "gauguin-where-do-we-come-from": "Where Do We Come From What Are We Gauguin",
    "jeongseon-inwang": "Inwangjesaekdo Jeong Seon",
    "vangogh-irises": "Irises Vincent van Gogh 1889 Getty",
    "cezanne-mont-sainte-victoire": "Mont Sainte-Victoire Cezanne 1904",
    "degas-absinthe": "L'Absinthe Degas",
    "vermeer-woman-balance": "Woman Holding a Balance Vermeer",
    "monet-haystack": "Haystacks Monet Grainstack sunset",
    "rembrandt-self-portrait": "Rembrandt self-portrait 1659 National Gallery",
}


def is_image(data: bytes) -> str:
    if data[:3] == b"\xff\xd8\xff":
        return "jpg"
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return "png"
    return ""


def get(url: str, tries: int = 4) -> bytes:
    last = None
    for i in range(tries):
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=60) as r:
                return r.read()
        except urllib.error.HTTPError as e:
            last = e
            if e.code == 429:
                time.sleep(3 * (i + 1))
                continue
            raise
    raise last


def resolve_thumb(query: str, width: int = 1600):
    params = {
        "action": "query",
        "generator": "search",
        "gsrsearch": query,
        "gsrnamespace": "6",
        "gsrlimit": "6",
        "prop": "imageinfo",
        "iiprop": "url|size|mime",
        "iiurlwidth": str(width),
        "format": "json",
    }
    url = API + "?" + urllib.parse.urlencode(params)
    data = json.loads(get(url).decode("utf-8"))
    pages = data.get("query", {}).get("pages", {})
    # search 순서 유지
    ordered = sorted(pages.values(), key=lambda p: p.get("index", 999))
    for p in ordered:
        ii = (p.get("imageinfo") or [{}])[0]
        mime = ii.get("mime", "")
        if not mime.startswith("image/"):
            continue
        if mime in ("image/svg+xml",):
            continue
        thumb = ii.get("thumburl")
        if thumb:
            return p.get("title", "?"), thumb
    return None, None


def main():
    vpath = os.path.join(HERE, "museum_valid.json")
    valid = set(json.load(open(vpath, encoding="utf-8"))) if os.path.exists(vpath) else set()
    for slug, query in FIX.items():
        if slug in valid:
            print(f"skip (already valid): {slug}")
            continue
        try:
            title, thumb = resolve_thumb(query)
            if not thumb:
                print(f"FAIL  {slug:30s} no image result")
                time.sleep(1.3)
                continue
            raw = get(thumb)
            kind = is_image(raw)
            if not kind or len(raw) < 30000:
                print(f"FAIL  {slug:30s} bad image ({len(raw)}B) <- {title}")
                time.sleep(1.3)
                continue
            with open(os.path.join(OUT, f"{slug}.jpg"), "wb") as f:
                f.write(raw)
            valid.add(slug)
            print(f"  OK  {slug:30s} {len(raw)//1024}KB  <- {title}")
        except Exception as e:  # noqa
            print(f"FAIL  {slug:30s} {type(e).__name__}: {str(e)[:70]}")
        time.sleep(1.4)
    json.dump(sorted(valid), open(vpath, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print(f"\n=== total valid now: {len(valid)} ===")


if __name__ == "__main__":
    main()
