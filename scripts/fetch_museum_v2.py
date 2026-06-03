# -*- coding: utf-8 -*-
"""
S.A Museum 확장 수집기 (v2) — 신규 명화 56점 후보.
검증엔진은 fetch_museum.py와 동일(Special:FilePath + 매직바이트 + 용량>=30KB).
다운로드 성공작만 full MuseumWork 메타를 museum_new.json 으로 방출한다(데이터팀 단일소스).
이미지는 next-app/public/assets/museum/ 에 저장.
"""
import json
import os
import time
import urllib.parse
import urllib.request

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
OUT = os.path.join(REPO, "next-app", "public", "assets", "museum")
os.makedirs(OUT, exist_ok=True)

UA = "PointAndLine-SAMuseum/1.0 (https://pointnline.github.io/SOGANG-AIMBA7th/; educational PD art archive)"

# 404로 실패한 slug의 교정 파일명(Wikimedia Commons 실제 파일명에 가깝게 재지정).
CORRECTIONS = {
    "gentileschi-judith": "Artemisia Gentileschi - Giuditta decapita Oloferne - Google Art Project.jpg",
    "vermeer-astronomer": "Johannes Vermeer - The Astronomer - 1668.jpg",
    "courbet-artists-studio": "Courbet LAtelier du peintre.jpg",
    "monet-rouen-cathedral": "Claude Monet - Rouen Cathedral, West Façade, Sunlight - Google Art Project.jpg",
    "degas-dance-class": "Edgar Degas - The Ballet Class - Google Art Project.jpg",
    "renoir-girl-watering-can": "Auguste Renoir - A Girl with a Watering Can - Google Art Project.jpg",
    "seurat-bathers-asnieres": "Baigneurs a Asnieres.jpg",
    "cezanne-large-bathers": "Paul Cézanne, French - The Large Bathers - Google Art Project.jpg",
    "rousseau-sleeping-gypsy": "La Bohémienne endormie.jpg",
    "eakins-gross-clinic": "Thomas Eakins, American - Portrait of Dr. Samuel D. Gross (The Gross Clinic) - Google Art Project.jpg",
    "sargent-madame-x": "Madame X (Madame Pierre Gautreau), John Singer Sargent, 1884 (unfree frame crop).jpg",
    "hiroshige-plum-park": "De pruimenboomgaard te Kameido-Rijksmuseum RP-P-1956-743.jpeg",
    "vermeer-girl-red-hat": "Vermeer - Girl with a Red Hat.JPG",
}

# 신규 후보(기존 50점과 중복 없음). file = Wikimedia Commons File: 이름(확장자 포함).
WORKS = [
    {"slug": "bosch-garden-earthly-delights", "file": "The Garden of Earthly Delights by Bosch High Resolution.jpg",
     "artist": "Hieronymus Bosch", "work": "The Garden of Earthly Delights", "year": "c. 1490-1510",
     "medium": "Oil on oak panels", "collection": "Museo del Prado", "mood": "teeming fantasy",
     "note": "천국·현세·지옥을 세 폭에 펼친 환상의 백과사전입니다. 들여다볼수록 새로운 형상이 끝없이 튀어나옵니다.", "tone": ["#5a6b4a", "#d8c08a"]},
    {"slug": "leonardo-last-supper", "file": "Leonardo da Vinci (1452-1519) - The Last Supper (1495-1498).jpg",
     "artist": "Leonardo da Vinci", "work": "The Last Supper", "year": "1495-1498",
     "medium": "Tempera on plaster", "collection": "Santa Maria delle Grazie, Milan", "mood": "frozen drama",
     "note": "\"너희 중 하나가 나를 팔리라\"는 말이 떨어진 순간의 동요를 열두 제자의 몸짓으로 잡아냈습니다.", "tone": ["#6b5a3e", "#bfae84"]},
    {"slug": "leonardo-lady-ermine", "file": "Lady with an Ermine - Leonardo da Vinci - Google Art Project.jpg",
     "artist": "Leonardo da Vinci", "work": "Lady with an Ermine", "year": "c. 1489-1491",
     "medium": "Oil on walnut panel", "collection": "Czartoryski Museum, Kraków", "mood": "poised turn",
     "note": "고개를 돌린 찰나의 우아함과 흰 담비의 긴장이 한 화면에 담겼습니다. 초상화에 움직임을 불어넣었습니다.", "tone": ["#3a3026", "#c9a96a"]},
    {"slug": "botticelli-primavera", "file": "Botticelli-primavera.jpg",
     "artist": "Sandro Botticelli", "work": "Primavera", "year": "c. 1480",
     "medium": "Tempera on panel", "collection": "Uffizi Gallery", "mood": "blooming allegory",
     "note": "봄의 신들이 춤추듯 늘어선 르네상스 신화화입니다. 발끝에 핀 수백 송이 꽃이 계절을 증언합니다.", "tone": ["#3e5a3a", "#e0cf90"]},
    {"slug": "durer-self-portrait-1500", "file": "Albrecht Dürer - 1500 self-portrait (High resolution and detail).jpg",
     "artist": "Albrecht Dürer", "work": "Self-Portrait at Twenty-Eight", "year": "1500",
     "medium": "Oil on panel", "collection": "Alte Pinakothek, Munich", "mood": "frontal gravity",
     "note": "화가가 자신을 그리스도처럼 정면으로 그린 도발적 자화상입니다. 예술가의 자의식이 시대를 앞섰습니다.", "tone": ["#2e2620", "#a07a4a"]},
    {"slug": "titian-bacchus-ariadne", "file": "Titian Bacchus and Ariadne.jpg",
     "artist": "Titian", "work": "Bacchus and Ariadne", "year": "1522-1523",
     "medium": "Oil on canvas", "collection": "The National Gallery, London", "mood": "leaping color",
     "note": "전차에서 뛰어내리는 바쿠스의 순간을 강렬한 군청과 주홍으로 포착했습니다. 베네치아 색채의 정점입니다.", "tone": ["#274a7a", "#d99a4a"]},
    {"slug": "holbein-ambassadors", "file": "Hans Holbein the Younger - The Ambassadors - Google Art Project.jpg",
     "artist": "Hans Holbein the Younger", "work": "The Ambassadors", "year": "1533",
     "medium": "Oil on oak", "collection": "The National Gallery, London", "mood": "hidden skull",
     "note": "부와 학식의 상징 사이, 비스듬히 봐야 보이는 해골이 누워 있습니다. 모든 영광의 끝을 숨겨둔 그림입니다.", "tone": ["#2f3a34", "#b6975a"]},
    {"slug": "elgreco-view-of-toledo", "file": "El Greco View of Toledo.jpg",
     "artist": "El Greco", "work": "View of Toledo", "year": "c. 1599-1600",
     "medium": "Oil on canvas", "collection": "The Metropolitan Museum of Art", "mood": "stormy green",
     "note": "폭풍 직전의 톨레도를 초현실적 녹청으로 그린 풍경화입니다. 도시가 살아 떨고 있는 듯합니다.", "tone": ["#23341f", "#9fb87a"]},
    {"slug": "caravaggio-medusa", "file": "Medusa by Caravaggio.jpg",
     "artist": "Caravaggio", "work": "Medusa", "year": "1597",
     "medium": "Oil on canvas on poplar shield", "collection": "Uffizi Gallery", "mood": "frozen scream",
     "note": "목이 잘리는 순간의 비명을 둥근 방패 위에 새겼습니다. 공포의 정점을 연극처럼 멈춰 세웠습니다.", "tone": ["#1f2420", "#9c6a3a"]},
    {"slug": "rubens-three-graces", "file": "Peter Paul Rubens - The Three Graces, 1635.jpg",
     "artist": "Peter Paul Rubens", "work": "The Three Graces", "year": "c. 1635",
     "medium": "Oil on oak panel", "collection": "Museo del Prado", "mood": "warm flesh",
     "note": "세 여신의 살결을 따뜻한 빛으로 빚어낸 바로크의 관능입니다. 루벤스 특유의 풍요가 흐릅니다.", "tone": ["#6b5240", "#e3c4a0"]},
    {"slug": "gentileschi-judith", "file": "Artemisia Gentileschi - Judith Beheading Holofernes - Google Art Project.jpg",
     "artist": "Artemisia Gentileschi", "work": "Judith Slaying Holofernes", "year": "c. 1612-1613",
     "medium": "Oil on canvas", "collection": "Museo di Capodimonte, Naples", "mood": "fierce resolve",
     "note": "여성 화가가 그린 가장 단호한 복수의 장면입니다. 칼을 쥔 두 팔에 망설임이 없습니다.", "tone": ["#2a1f1a", "#b8902f"]},
    {"slug": "vandyck-charles-i", "file": "Anthonis van Dyck 037.jpg",
     "artist": "Anthony van Dyck", "work": "Charles I at the Hunt", "year": "c. 1635",
     "medium": "Oil on canvas", "collection": "Musée du Louvre", "mood": "effortless rule",
     "note": "왕을 사냥터에 무심히 세워 권위를 더 높인 초상입니다. 우아함이 곧 통치의 언어였습니다.", "tone": ["#3a4038", "#c2a36a"]},
    {"slug": "rembrandt-anatomy-lesson", "file": "Rembrandt - The Anatomy Lesson of Dr Nicolaes Tulp.jpg",
     "artist": "Rembrandt van Rijn", "work": "The Anatomy Lesson of Dr. Nicolaes Tulp", "year": "1632",
     "medium": "Oil on canvas", "collection": "Mauritshuis", "mood": "rapt attention",
     "note": "해부 강의에 빨려든 시선들을 빛으로 묶어낸 집단 초상입니다. 과학과 죽음이 한 빛 아래 모였습니다.", "tone": ["#241c16", "#a8895a"]},
    {"slug": "rembrandt-prodigal-son", "file": "Rembrandt - The Return of the Prodigal Son.jpg",
     "artist": "Rembrandt van Rijn", "work": "The Return of the Prodigal Son", "year": "c. 1668",
     "medium": "Oil on canvas", "collection": "Hermitage Museum", "mood": "tender mercy",
     "note": "돌아온 아들을 감싸 안는 아버지의 두 손에 용서가 응축돼 있습니다. 렘브란트 말년의 깊이입니다.", "tone": ["#2a1c14", "#c08a3a"]},
    {"slug": "vermeer-astronomer", "file": "Johannes Vermeer - The Astronomer.jpg",
     "artist": "Johannes Vermeer", "work": "The Astronomer", "year": "c. 1668",
     "medium": "Oil on canvas", "collection": "Musée du Louvre", "mood": "quiet inquiry",
     "note": "천구의에 손을 뻗은 학자의 고요한 탐구를 창빛으로 비췄습니다. 지식을 향한 손짓이 차분합니다.", "tone": ["#3a3220", "#c9b070"]},
    {"slug": "fragonard-the-swing", "file": "Fragonard, The Swing.jpg",
     "artist": "Jean-Honoré Fragonard", "work": "The Swing", "year": "1767",
     "medium": "Oil on canvas", "collection": "Wallace Collection, London", "mood": "frivolous bloom",
     "note": "그네 위로 벗겨진 신발 한 짝이 로코코의 장난기를 압축합니다. 정원 가득 분홍빛 향락이 번집니다.", "tone": ["#3e5236", "#e7b9c8"]},
    {"slug": "david-death-of-marat", "file": "Death of Marat by David.jpg",
     "artist": "Jacques-Louis David", "work": "The Death of Marat", "year": "1793",
     "medium": "Oil on canvas", "collection": "Royal Museums of Fine Arts of Belgium", "mood": "stark martyr",
     "note": "혁명가의 죽음을 성화처럼 단순하게 그린 정치적 추모화입니다. 빈 배경이 비극을 더 키웁니다.", "tone": ["#23282a", "#b39a6a"]},
    {"slug": "david-napoleon-alps", "file": "David - Napoleon crossing the Alps - Malmaison1.jpg",
     "artist": "Jacques-Louis David", "work": "Napoleon Crossing the Alps", "year": "1801",
     "medium": "Oil on canvas", "collection": "Château de Malmaison", "mood": "heroic gust",
     "note": "실제와 무관하게 영웅으로 연출된 권력의 이미지입니다. 휘날리는 망토가 곧 선전이었습니다.", "tone": ["#3a3026", "#c64a3a"]},
    {"slug": "ingres-grande-odalisque", "file": "Jean Auguste Dominique Ingres, La Grande Odalisque, 1814.jpg",
     "artist": "Jean-Auguste-Dominique Ingres", "work": "La Grande Odalisque", "year": "1814",
     "medium": "Oil on canvas", "collection": "Musée du Louvre", "mood": "elongated line",
     "note": "해부학을 일부러 늘여 그린 우아한 곡선의 누드입니다. 아름다움을 위해 사실을 휘었습니다.", "tone": ["#3a2e28", "#cda37a"]},
    {"slug": "gericault-raft-medusa", "file": "JEAN LOUIS THÉODORE GÉRICAULT - La Balsa de la Medusa (Museo del Louvre, 1818-19).jpg",
     "artist": "Théodore Géricault", "work": "The Raft of the Medusa", "year": "1818-1819",
     "medium": "Oil on canvas", "collection": "Musée du Louvre", "mood": "desperate hope",
     "note": "난파선 생존자들의 절망과 한 줄기 희망을 피라미드 구도로 쌓았습니다. 실화가 낳은 거대한 비명입니다.", "tone": ["#23201c", "#a8794a"]},
    {"slug": "delacroix-liberty", "file": "Eugène Delacroix - Le 28 Juillet. La Liberté guidant le peuple.jpg",
     "artist": "Eugène Delacroix", "work": "Liberty Leading the People", "year": "1830",
     "medium": "Oil on canvas", "collection": "Musée du Louvre", "mood": "surging banner",
     "note": "삼색기를 든 자유의 여신이 시민을 이끄는 혁명의 상징입니다. 연기 속에서 깃발만 선명합니다.", "tone": ["#2e2a26", "#c5453a"]},
    {"slug": "friedrich-sea-of-ice", "file": "Caspar David Friedrich - Das Eismeer - Hamburger Kunsthalle - 02.jpg",
     "artist": "Caspar David Friedrich", "work": "The Sea of Ice", "year": "1823-1824",
     "medium": "Oil on canvas", "collection": "Hamburger Kunsthalle", "mood": "crushing silence",
     "note": "얼음에 짓눌려 부서진 배를 통해 자연 앞 인간의 무력함을 그렸습니다. 낭만주의의 숭고가 차갑습니다.", "tone": ["#3a4650", "#c4d2da"]},
    {"slug": "turner-rain-steam-speed", "file": "Rain Steam and Speed the Great Western Railway.jpg",
     "artist": "J. M. W. Turner", "work": "Rain, Steam and Speed", "year": "1844",
     "medium": "Oil on canvas", "collection": "The National Gallery, London", "mood": "dissolving motion",
     "note": "비와 증기 속을 달리는 기차를 형체가 녹듯이 그렸습니다. 산업의 속도를 빛으로 번지게 했습니다.", "tone": ["#5a4e34", "#e0cf98"]},
    {"slug": "millet-gleaners", "file": "Jean-François Millet - Gleaners - Google Art Project.jpg",
     "artist": "Jean-François Millet", "work": "The Gleaners", "year": "1857",
     "medium": "Oil on canvas", "collection": "Musée d'Orsay", "mood": "stooped labor",
     "note": "추수 끝 이삭을 줍는 세 여인을 기념비처럼 그렸습니다. 가장 낮은 노동에 존엄을 입혔습니다.", "tone": ["#6b5a3a", "#d8c590"]},
    {"slug": "millet-angelus", "file": "Jean-François Millet (II) 001.jpg",
     "artist": "Jean-François Millet", "work": "The Angelus", "year": "1857-1859",
     "medium": "Oil on canvas", "collection": "Musée d'Orsay", "mood": "dusk prayer",
     "note": "들녘에서 종소리에 맞춰 고개 숙인 부부의 기도를 그렸습니다. 노동과 신앙이 황혼에 겹칩니다.", "tone": ["#4a4230", "#cdb27a"]},
    {"slug": "courbet-artists-studio", "file": "Gustave Courbet - The Artist's Studio - Google Art Project.jpg",
     "artist": "Gustave Courbet", "work": "The Artist's Studio", "year": "1855",
     "medium": "Oil on canvas", "collection": "Musée d'Orsay", "mood": "allegory of self",
     "note": "화가의 작업실에 사회 전체를 불러 모은 사실주의 선언입니다. 중앙에 화가 자신이 앉아 세상을 그립니다.", "tone": ["#2e2a22", "#a8895a"]},
    {"slug": "whistler-nocturne", "file": "Whistler-Nocturne in black and gold.jpg",
     "artist": "James McNeill Whistler", "work": "Nocturne in Black and Gold", "year": "1875",
     "medium": "Oil on panel", "collection": "Detroit Institute of Arts", "mood": "falling sparks",
     "note": "불꽃이 흩어지는 밤을 거의 추상에 가깝게 그렸습니다. 형태보다 분위기를 그린 선구적 작품입니다.", "tone": ["#1c1f24", "#bfa14a"]},
    {"slug": "monet-rouen-cathedral", "file": "Claude Monet - Rouen Cathedral, Facade (Sunset) - Google Art Project.jpg",
     "artist": "Claude Monet", "work": "Rouen Cathedral, Façade (Sunset)", "year": "1892-1894",
     "medium": "Oil on canvas", "collection": "Musée Marmottan Monet", "mood": "dissolving stone",
     "note": "같은 성당을 빛에 따라 수십 번 다시 그린 연작의 한 장면입니다. 돌이 노을에 녹아내립니다.", "tone": ["#6b4e3a", "#e6b878"]},
    {"slug": "manet-the-railway", "file": "Edouard Manet - The Railway - Google Art Project.jpg",
     "artist": "Édouard Manet", "work": "The Railway", "year": "1873",
     "medium": "Oil on canvas", "collection": "National Gallery of Art", "mood": "veiled steam",
     "note": "철창 너머 증기를 바라보는 등 돌린 소녀가 근대 도시의 단절을 암시합니다. 시선이 엇갈립니다.", "tone": ["#3a4038", "#bcae8a"]},
    {"slug": "degas-dance-class", "file": "Edgar Degas - The Dance Class - Google Art Project.jpg",
     "artist": "Edgar Degas", "work": "The Dance Class", "year": "1873-1876",
     "medium": "Oil on canvas", "collection": "Musée d'Orsay", "mood": "rehearsal hush",
     "note": "무대가 아닌 연습실의 지친 발레리나들을 비스듬히 잡았습니다. 화려함 뒤의 노동을 봤습니다.", "tone": ["#5a5240", "#d8cba0"]},
    {"slug": "morisot-the-cradle", "file": "Berthe Morisot - The Cradle - Google Art Project.jpg",
     "artist": "Berthe Morisot", "work": "The Cradle", "year": "1872",
     "medium": "Oil on canvas", "collection": "Musée d'Orsay", "mood": "tender watch",
     "note": "잠든 아기를 바라보는 어머니의 시선을 얇은 베일 너머로 그렸습니다. 인상주의 여성 화가의 대표작입니다.", "tone": ["#4a4e54", "#dcd2c4"]},
    {"slug": "caillebotte-floor-scrapers", "file": "Gustave Caillebotte - The Floor Planers - Google Art Project.jpg",
     "artist": "Gustave Caillebotte", "work": "The Floor Scrapers", "year": "1875",
     "medium": "Oil on canvas", "collection": "Musée d'Orsay", "mood": "bent backs",
     "note": "마룻바닥을 긁는 노동자의 등을 도시적 시선으로 그린 보기 드문 주제입니다. 빛이 마루를 미끄러집니다.", "tone": ["#5a4632", "#cͅa885"]},
    {"slug": "renoir-girl-watering-can", "file": "Pierre-Auguste Renoir - A Girl with a Watering Can - Google Art Project.jpg",
     "artist": "Pierre-Auguste Renoir", "work": "A Girl with a Watering Can", "year": "1876",
     "medium": "Oil on canvas", "collection": "National Gallery of Art", "mood": "garden sweetness",
     "note": "물뿌리개를 든 소녀를 정원의 빛 속에 부드럽게 녹였습니다. 르누아르 특유의 따뜻함이 가득합니다.", "tone": ["#3e5236", "#e3c4a8"]},
    {"slug": "cassatt-boating-party", "file": "Mary Cassatt - The Boating Party - Google Art Project.jpg",
     "artist": "Mary Cassatt", "work": "The Boating Party", "year": "1893-1894",
     "medium": "Oil on canvas", "collection": "National Gallery of Art", "mood": "bold diagonal",
     "note": "보트 위 모자(母子)와 뱃사공을 과감한 구도로 잡았습니다. 일본 판화의 영향이 또렷합니다.", "tone": ["#2e4a5a", "#e0d2a8"]},
    {"slug": "seurat-bathers-asnieres", "file": "Georges Seurat - Une Baignade, Asnières - Google Art Project.jpg",
     "artist": "Georges Seurat", "work": "Bathers at Asnières", "year": "1884",
     "medium": "Oil on canvas", "collection": "The National Gallery, London", "mood": "still afternoon",
     "note": "강가에서 쉬는 노동자들을 점묘 직전의 차분한 빛으로 그렸습니다. 여가의 한낮이 멈춰 있습니다.", "tone": ["#4a6a4a", "#dccf90"]},
    {"slug": "vangogh-cafe-terrace", "file": "Vincent Willem van Gogh - Cafe Terrace at Night (Yorck).jpg",
     "artist": "Vincent van Gogh", "work": "Café Terrace at Night", "year": "1888",
     "medium": "Oil on canvas", "collection": "Kröller-Müller Museum", "mood": "gaslit warmth",
     "note": "별이 박힌 밤하늘 아래 노란 카페 불빛이 거리를 데웁니다. 검정 없이 그린 밤입니다.", "tone": ["#1f3a5a", "#e8c04a"]},
    {"slug": "vangogh-self-portrait-1889", "file": "Vincent van Gogh - Self-Portrait - Google Art Project (454045).jpg",
     "artist": "Vincent van Gogh", "work": "Self-Portrait", "year": "1889",
     "medium": "Oil on canvas", "collection": "Musée d'Orsay", "mood": "swirling blue",
     "note": "소용돌이치는 청록 배경 속 화가의 응시가 형형합니다. 불안마저 붓질의 리듬이 됐습니다.", "tone": ["#2a4a4a", "#a8b89a"]},
    {"slug": "vangogh-wheatfield-crows", "file": "Vincent van Gogh - Wheatfield with crows - Google Art Project.jpg",
     "artist": "Vincent van Gogh", "work": "Wheatfield with Crows", "year": "1890",
     "medium": "Oil on canvas", "collection": "Van Gogh Museum", "mood": "ominous gold",
     "note": "갈라지는 길과 까마귀 떼가 불길하게 흩어집니다. 화가 말년의 격정이 하늘을 짓누릅니다.", "tone": ["#3a4a6a", "#e3c24a"]},
    {"slug": "vangogh-almond-blossoms", "file": "Vincent van Gogh - Almond blossom - Google Art Project.jpg",
     "artist": "Vincent van Gogh", "work": "Almond Blossoms", "year": "1890",
     "medium": "Oil on canvas", "collection": "Van Gogh Museum", "mood": "new life",
     "note": "조카의 탄생을 축하하며 그린 맑은 하늘빛 꽃가지입니다. 고흐가 그린 가장 평온한 봄입니다.", "tone": ["#5a8aa0", "#eef0e2"]},
    {"slug": "cezanne-large-bathers", "file": "Paul Cézanne - The Large Bathers - Google Art Project.jpg",
     "artist": "Paul Cézanne", "work": "The Large Bathers", "year": "1898-1905",
     "medium": "Oil on canvas", "collection": "Philadelphia Museum of Art", "mood": "structured nude",
     "note": "인물과 나무를 삼각 구도로 묶어 자연과 신체를 건축처럼 쌓았습니다. 입체파의 문을 연 그림입니다.", "tone": ["#4a6a6a", "#d2c498"]},
    {"slug": "gauguin-vision-sermon", "file": "Paul Gauguin 137.jpg",
     "artist": "Paul Gauguin", "work": "Vision after the Sermon", "year": "1888",
     "medium": "Oil on canvas", "collection": "Scottish National Gallery", "mood": "red ground",
     "note": "환상과 현실을 붉은 들판으로 갈라놓은 상징주의 전환점입니다. 색이 곧 감정이 됐습니다.", "tone": ["#8a2a2a", "#d8b86a"]},
    {"slug": "rousseau-sleeping-gypsy", "file": "Henri Rousseau - The Sleeping Gypsy - Google Art Project.jpg",
     "artist": "Henri Rousseau", "work": "The Sleeping Gypsy", "year": "1897",
     "medium": "Oil on canvas", "collection": "Museum of Modern Art (MoMA)", "mood": "dreaming desert",
     "note": "사막에 잠든 여인과 사자를 동화처럼 그린 소박파의 명작입니다. 달빛 아래 정적이 흐릅니다.", "tone": ["#1f2a3a", "#c9a86a"]},
    {"slug": "klimt-judith", "file": "Gustav Klimt 039.jpg",
     "artist": "Gustav Klimt", "work": "Judith I", "year": "1901",
     "medium": "Oil on canvas", "collection": "Belvedere, Vienna", "mood": "gilded rapture",
     "note": "황금 배경 위 유디트의 황홀한 표정이 위험과 관능을 동시에 풍깁니다. 클림트 금빛 시대의 시작입니다.", "tone": ["#3a2e1a", "#d4af37"]},
    {"slug": "munch-madonna", "file": "Edvard Munch - Madonna - Google Art Project.jpg",
     "artist": "Edvard Munch", "work": "Madonna", "year": "1894-1895",
     "medium": "Oil on canvas", "collection": "Munch Museum, Oslo", "mood": "ecstatic dread",
     "note": "성스러움과 죽음, 관능을 한 인물에 겹친 상징주의 초상입니다. 붉은 후광이 불안하게 휘감습니다.", "tone": ["#2a1f28", "#b04a5a"]},
    {"slug": "sargent-carnation-lily", "file": "John Singer Sargent - Carnation, Lily, Lily, Rose - Google Art Project.jpg",
     "artist": "John Singer Sargent", "work": "Carnation, Lily, Lily, Rose", "year": "1885-1886",
     "medium": "Oil on canvas", "collection": "Tate Britain", "mood": "twilight lanterns",
     "note": "해 질 녘 등불을 켜는 두 소녀를 정원 가득한 꽃 사이에 그렸습니다. 빛의 마지막 순간을 붙잡았습니다.", "tone": ["#3a4a3a", "#e8d49a"]},
    {"slug": "sargent-madame-x", "file": "John Singer Sargent - Madame X (Madame Pierre Gautreau) - Google Art Project.jpg",
     "artist": "John Singer Sargent", "work": "Madame X", "year": "1883-1884",
     "medium": "Oil on canvas", "collection": "The Metropolitan Museum of Art", "mood": "scandalous poise",
     "note": "창백한 살결과 검은 드레스의 대비가 당대를 발칵 뒤집은 초상입니다. 우아함이 곧 도발이었습니다.", "tone": ["#1f1c1a", "#c2a17a"]},
    {"slug": "homer-gulf-stream", "file": "Winslow Homer - The Gulf Stream - Metropolitan Museum of Art.jpg",
     "artist": "Winslow Homer", "work": "The Gulf Stream", "year": "1899",
     "medium": "Oil on canvas", "collection": "The Metropolitan Museum of Art", "mood": "lone peril",
     "note": "부서진 배 위 홀로 남은 선원을 상어와 폭풍이 둘러쌉니다. 자연 앞 인간의 고립을 그렸습니다.", "tone": ["#1f4a5a", "#cbb070"]},
    {"slug": "eakins-gross-clinic", "file": "The Gross Clinic by Thomas Eakins 1875.jpg",
     "artist": "Thomas Eakins", "work": "The Gross Clinic", "year": "1875",
     "medium": "Oil on canvas", "collection": "Philadelphia Museum of Art", "mood": "clinical light",
     "note": "수술 강의장의 피와 집중을 사실 그대로 그려 충격을 준 작품입니다. 의학의 권위를 빛으로 세웠습니다.", "tone": ["#241c18", "#a8865a"]},
    {"slug": "rousseau-the-dream", "file": "Henri Rousseau 005.jpg",
     "artist": "Henri Rousseau", "work": "The Dream", "year": "1910",
     "medium": "Oil on canvas", "collection": "Museum of Modern Art (MoMA)", "mood": "lush reverie",
     "note": "정글 속 소파에 누운 여인을 통해 꿈의 논리를 그렸습니다. 수백 겹의 초록이 환상을 만듭니다.", "tone": ["#1f3a24", "#cfc06a"]},
    {"slug": "gerome-pollice-verso", "file": "Jean-Leon Gerome Pollice Verso.jpg",
     "artist": "Jean-Léon Gérôme", "work": "Pollice Verso", "year": "1872",
     "medium": "Oil on canvas", "collection": "Phoenix Art Museum", "mood": "roaring arena",
     "note": "검투사의 생사를 가르는 군중의 엄지를 정밀하게 재현했습니다. 고대 로마를 사진처럼 부활시켰습니다.", "tone": ["#5a4632", "#d8b878"]},
    {"slug": "bouguereau-birth-of-venus", "file": "William-Adolphe Bouguereau (1825-1905) - The Birth of Venus (1879).jpg",
     "artist": "William-Adolphe Bouguereau", "work": "The Birth of Venus", "year": "1879",
     "medium": "Oil on canvas", "collection": "Musée d'Orsay", "mood": "polished grace",
     "note": "매끄러운 살결과 완벽한 균형으로 학원파의 이상미를 구현했습니다. 고전의 기술이 정점에 닿았습니다.", "tone": ["#3a5a6a", "#e3cdb0"]},
    {"slug": "grant-wood-american-gothic", "file": "Grant Wood - American Gothic - Google Art Project.jpg",
     "artist": "Grant Wood", "work": "American Gothic", "year": "1930",
     "medium": "Oil on beaverboard", "collection": "Art Institute of Chicago", "mood": "stoic plains",
     "note": "쇠스랑을 든 농부 부녀를 통해 미국 중서부의 완고함을 그렸습니다. 가장 많이 패러디된 초상입니다.", "tone": ["#3a3e30", "#cab98a"]},
    {"slug": "pissarro-boulevard-montmartre", "file": "Camille Pissarro, Boulevard Montmartre, spring.jpg",
     "artist": "Camille Pissarro", "work": "Boulevard Montmartre, Spring", "year": "1897",
     "medium": "Oil on canvas", "collection": "Private / Various collections", "mood": "bustling haze",
     "note": "창에서 내려다본 대로의 분주함을 봄빛 속에 풀었습니다. 도시의 움직임 자체가 주인공입니다.", "tone": ["#5a5240", "#d2c2a0"]},
    {"slug": "hiroshige-plum-park", "file": "Hiroshige Plum Park in Kameido.jpg",
     "artist": "Utagawa Hiroshige", "work": "Plum Park in Kameido", "year": "1857",
     "medium": "Woodblock print", "collection": "Various collections", "mood": "blossom frame",
     "note": "화면을 가로지른 매화 가지가 과감한 구도를 만듭니다. 고흐가 모사할 만큼 서구를 매혹했습니다.", "tone": ["#3a5a3a", "#d88a8a"]},
    {"slug": "vermeer-girl-red-hat", "file": "Vermeer - Girl with the Red Hat.jpg",
     "artist": "Johannes Vermeer", "work": "Girl with a Red Hat", "year": "c. 1665-1666",
     "medium": "Oil on panel", "collection": "National Gallery of Art", "mood": "fleeting glance",
     "note": "붉은 모자 아래 돌아보는 찰나의 시선을 작은 패널에 담았습니다. 빛의 점들이 살아 반짝입니다.", "tone": ["#3a2620", "#cf6a4a"]},
]


def url_for(filename, width=1600):
    enc = urllib.parse.quote(filename.replace(" ", "_"))
    return f"https://commons.wikimedia.org/wiki/Special:FilePath/{enc}?width={width}"


def source_url(filename):
    enc = urllib.parse.quote(filename.replace(" ", "_"))
    return f"https://commons.wikimedia.org/wiki/File:{enc}"


def is_image(data):
    if data[:3] == b"\xff\xd8\xff":
        return "jpg"
    if data[:8] == b"\x89PNG\r\n\x1a\n":
        return "png"
    return ""


def build_entry(item, fname):
    return {
        "artist": item["artist"], "work": item["work"], "year": item["year"],
        "medium": item["medium"], "collection": item["collection"], "mood": item["mood"],
        "note": item["note"], "image": f"/assets/museum/{item['slug']}.jpg",
        "sourceUrl": source_url(fname), "license": "Public Domain / Wikimedia Commons",
        "tone": item["tone"], "slug": item["slug"],
    }


def fetch(item):
    slug = item["slug"]
    fname = CORRECTIONS.get(slug, item["file"])
    path = os.path.join(OUT, f"{slug}.jpg")
    # 이미 받아둔 유효 파일이면 재요청 없이 통과(429 회피)
    if os.path.exists(path) and os.path.getsize(path) >= 30000:
        return slug, True, "SKIP (already)", build_entry(item, fname)
    url = url_for(fname)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=90) as r:
            data = r.read()
    except Exception as e:  # noqa
        return slug, False, f"ERR {type(e).__name__}: {str(e)[:90]}", None
    kind = is_image(data)
    if not kind:
        return slug, False, f"NOT-IMAGE ({len(data)}B, head={data[:16]!r})", None
    if len(data) < 30000:
        return slug, False, f"TOO-SMALL ({len(data)}B)", None
    with open(path, "wb") as f:
        f.write(data)
    return slug, True, f"OK {kind} {len(data)//1024}KB", build_entry(item, fname)


def main():
    results, entries = [], {}
    # 직렬 + 딜레이로 429(rate limit) 회피. 이미 받은 건 즉시 스킵.
    for it in WORKS:
        slug, ok, msg, entry = fetch(it)
        results.append((slug, ok, msg))
        if ok:
            entries[slug] = entry
        print(("  OK  " if ok else "FAIL  ") + f"{slug:34s} {msg}", flush=True)
        if "SKIP" not in msg:
            time.sleep(1.3)
    # WORKS 순서 유지하며 성공분만 방출
    ordered = [entries[it["slug"]] for it in WORKS if it["slug"] in entries]
    with open(os.path.join(HERE, "museum_new.json"), "w", encoding="utf-8") as f:
        json.dump(ordered, f, ensure_ascii=False, indent=2)
    ok_n = sum(1 for _, ok, _ in results if ok)
    print(f"\n=== {ok_n}/{len(WORKS)} OK; {len(ordered)} entries -> scripts/museum_new.json ===")
    fails = [s for s, ok, _ in results if not ok]
    if fails:
        print("FAILED:", ", ".join(fails))


if __name__ == "__main__":
    main()
