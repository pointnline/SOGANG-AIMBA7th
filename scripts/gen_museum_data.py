# -*- coding: utf-8 -*-
"""
S.A Museum 대공사: data.ts 의 MUSEUM_WORKS 를 퍼블릭도메인 명화 50점으로 교체한다.
- LEGACY_MUSEUM_WORKS / TESSA_LINEUP_SOURCE / 기존 MUSEUM_WORKS 블록을 모두 제거하고
  새 export const MUSEUM_WORKS 1개 블록으로 대체한다.
- 각 작품: index/artist/work/year/medium/collection/mood/note(한글 간단설명)/image/sourceUrl/license/tone
"""
import io
import os
import urllib.parse

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.dirname(HERE)
DATA = os.path.join(REPO, "next-app", "lib", "data.ts")

C = "https://commons.wikimedia.org/wiki/File:"
S = "https://commons.wikimedia.org/w/index.php?search="


def f(name):
    return C + urllib.parse.quote(name.replace(" ", "_"))


def s(q):
    return S + urllib.parse.quote(q)


# (slug, artist, work, year, medium, collection, mood, tone1, tone2, sourceUrl, note)
WORKS = [
    ("vangogh-starry-night", "Vincent van Gogh", "The Starry Night", "1889",
     "Oil on canvas", "Museum of Modern Art (MoMA)", "swirling night", "#1c2a4a", "#e0b94e",
     f("Van Gogh - Starry Night - Google Art Project.jpg"),
     "밤하늘이 소용돌이치듯 살아 움직이는, 반 고흐 생레미 요양원 시절의 대표작입니다. 불안과 생명력이 한 화면에 공존합니다."),
    ("vaneyck-arnolfini", "Jan van Eyck", "The Arnolfini Portrait", "1434",
     "Oil on oak panel", "The National Gallery, London", "meticulous detail", "#5a3a2e", "#c8a96a",
     f("Van Eyck - Arnolfini Portrait.jpg"),
     "거울과 촛불까지 정밀하게 그려낸 초기 유화의 정점입니다. 한 방 안에 결혼의 서약을 응축했습니다."),
    ("botticelli-birth-of-venus", "Sandro Botticelli", "The Birth of Venus", "c. 1485",
     "Tempera on canvas", "Uffizi Gallery", "mythic grace", "#3f6f78", "#e3c98f",
     f("Sandro Botticelli - La nascita di Venere - Google Art Project - edited.jpg"),
     "조개를 타고 바다에서 태어난 비너스를 그린 르네상스의 상징입니다. 선의 우아함이 화면 전체를 흐릅니다."),
    ("leonardo-mona-lisa", "Leonardo da Vinci", "Mona Lisa", "c. 1503-1519",
     "Oil on poplar panel", "Musée du Louvre", "enigmatic calm", "#5b4a2e", "#9c8253",
     f("Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg"),
     "세계에서 가장 유명한 초상화입니다. 스푸마토 기법으로 윤곽을 흐려 미소의 정체를 끝내 알 수 없게 만들었습니다."),
    ("michelangelo-creation-of-adam", "Michelangelo", "The Creation of Adam", "c. 1512",
     "Fresco", "Sistine Chapel, Vatican", "divine spark", "#8a6a3a", "#d8c79a",
     f("Michelangelo - Creation of Adam (cropped).jpg"),
     "신과 인간의 손가락이 맞닿기 직전을 그린 시스티나 천장화의 한 장면입니다. 닿지 않은 간극이 오히려 긴장을 만듭니다."),
    ("raphael-school-of-athens", "Raphael", "The School of Athens", "1509-1511",
     "Fresco", "Apostolic Palace, Vatican", "classical reason", "#7a5a3a", "#b9a06a",
     f('"The School of Athens" by Raffaello Sanzio da Urbino.jpg'),
     "플라톤과 아리스토텔레스를 중심으로 고대 철학자들을 한자리에 모은 르네상스 인문주의의 결정체입니다."),
    ("bruegel-hunters-in-snow", "Pieter Bruegel the Elder", "The Hunters in the Snow", "1565",
     "Oil on panel", "Kunsthistorisches Museum", "winter stillness", "#5c6b78", "#cfd6dc",
     f("Pieter Bruegel the Elder - Hunters in the Snow (Winter) - Google Art Project.jpg"),
     "눈 덮인 마을로 사냥꾼들이 돌아오는 겨울 풍경입니다. 높은 시점에서 계절과 노동을 한눈에 담았습니다."),
    ("caravaggio-st-matthew", "Caravaggio", "The Calling of Saint Matthew", "1599-1600",
     "Oil on canvas", "San Luigi dei Francesi, Rome", "dramatic light", "#1a140e", "#c89a4a",
     f("The Calling of Saint Matthew by Carvaggio.jpg"),
     "어둠을 가르는 한 줄기 빛으로 부름의 순간을 연출한 바로크의 대표작입니다. 빛이 곧 서사입니다."),
    ("rembrandt-night-watch", "Rembrandt van Rijn", "The Night Watch", "1642",
     "Oil on canvas", "Rijksmuseum", "civic drama", "#2a2018", "#caa24a",
     f("The Night Watch - HD.jpg"),
     "정적인 단체 초상화를 움직이는 한 장면으로 바꾼 렘브란트의 야심작입니다. 빛과 그림자로 인물에 위계를 부여했습니다."),
    ("velazquez-las-meninas", "Diego Velázquez", "Las Meninas", "1656",
     "Oil on canvas", "Museo del Prado", "layered gaze", "#4a3a2e", "#b59a6a",
     f("Las Meninas, by Diego Velázquez, from Prado in Google Earth.jpg"),
     "화가 자신, 공주, 거울 속 왕과 왕비까지 시선이 겹겹이 얽힌 회화의 수수께끼입니다. 보는 사람마저 그림 안으로 끌어들입니다."),
    ("vermeer-milkmaid", "Johannes Vermeer", "The Milkmaid", "c. 1658",
     "Oil on canvas", "Rijksmuseum", "quiet labor", "#3a5a6a", "#d8c07a",
     f("Johannes Vermeer - Het melkmeisje - Google Art Project.jpg"),
     "우유를 따르는 평범한 순간을 성스러운 정적으로 끌어올린 그림입니다. 창으로 들어오는 빛이 주인공입니다."),
    ("rembrandt-self-portrait", "Rembrandt van Rijn", "Self-Portrait", "1659",
     "Oil on canvas", "National Gallery of Art", "honest aging", "#3a2c20", "#b89060",
     f("Rembrandt van Rijn - Self-Portrait - Google Art Project.jpg"),
     "노년의 자신을 가감 없이 응시한 자화상입니다. 화려함 대신 세월과 내면을 그렸습니다."),
    ("vermeer-view-of-delft", "Johannes Vermeer", "View of Delft", "c. 1660-1661",
     "Oil on canvas", "Mauritshuis", "luminous city", "#5a6a78", "#cdbf8a",
     f("View of Delft, by Johannes Vermeer.jpg"),
     "비 갠 뒤의 델프트를 빛으로 포착한 풍경화입니다. 도시 전체가 한순간의 공기를 머금고 있습니다."),
    ("vermeer-woman-balance", "Johannes Vermeer", "Woman Holding a Balance", "c. 1664",
     "Oil on canvas", "National Gallery of Art", "poised stillness", "#3a3040", "#c9b27a",
     f("Johannes Vermeer - Woman Holding a Balance - Google Art Project.jpg"),
     "저울이 균형을 찾는 찰나를 그린 정밀한 실내화입니다. 평정과 절제의 미덕을 조용히 말합니다."),
    ("vermeer-pearl-earring", "Johannes Vermeer", "Girl with a Pearl Earring", "c. 1665",
     "Oil on canvas", "Mauritshuis", "turning glance", "#1c2630", "#d9c27e",
     f("1665 Girl with a Pearl Earring.jpg"),
     "어둠 속에서 돌아보는 소녀와 빛나는 진주 귀고리. '북구의 모나리자'로 불리는 신비로운 초상입니다."),
    ("jeongseon-inwang", "Jeong Seon (정선)", "Inwangjesaekdo (인왕제색도)", "1751",
     "Ink on paper", "Leeum Museum / National Treasure", "misty mountain", "#3a3a3a", "#9aa0a6",
     f("Inwangjesaekdo.jpg"),
     "비 갠 뒤의 인왕산을 진경산수로 담은 겸재 정선의 대표작이자 국보입니다. 실제 풍경을 조선의 붓으로 재해석했습니다."),
    ("hokusai-great-wave", "Katsushika Hokusai", "The Great Wave off Kanagawa", "c. 1831",
     "Woodblock print", "Various collections", "surging wave", "#1d4e6b", "#e7e2cf",
     f("Tsunami by hokusai 19th century.jpg"),
     "거대한 파도 너머로 후지산이 보이는, 세계에서 가장 유명한 목판화입니다. 자연의 힘과 인간의 작음을 한 화면에 담았습니다."),
    ("hokusai-red-fuji", "Katsushika Hokusai", "Fine Wind, Clear Morning (Red Fuji)", "c. 1831",
     "Woodblock print", "Various collections", "clear dawn", "#7a3a2a", "#3a6a8a",
     f("Red Fuji southern wind clear morning.jpg"),
     "맑은 새벽 붉게 물든 후지산을 단순한 색면으로 표현했습니다. 절제된 구성의 힘이 돋보입니다."),
    ("hiroshige-sudden-shower", "Utagawa Hiroshige", "Sudden Shower over Shin-Ohashi Bridge", "1857",
     "Woodblock print", "Various collections", "falling rain", "#3a4a5a", "#c9b88a",
     s("Hiroshige Atake sudden shower Shin-Ohashi"),
     "다리 위로 갑자기 쏟아지는 소나기를 가는 선으로 그렸습니다. 훗날 반 고흐가 모사했을 만큼 서구에 영향을 주었습니다."),
    ("goya-third-of-may", "Francisco Goya", "The Third of May 1808", "1814",
     "Oil on canvas", "Museo del Prado", "stark martyrdom", "#2a2018", "#c2a24a",
     f("El Tres de Mayo, by Francisco de Goya, from Prado thin black margin.jpg"),
     "처형 직전 두 팔을 든 남자를 빛으로 부각한 전쟁 고발화입니다. 근대 회화의 양심을 연 작품으로 꼽힙니다."),
    ("friedrich-wanderer", "Caspar David Friedrich", "Wanderer above the Sea of Fog", "c. 1818",
     "Oil on canvas", "Kunsthalle Hamburg", "sublime solitude", "#5a6470", "#d2c5a8",
     f("Caspar David Friedrich - Wanderer above the sea of fog.jpg"),
     "안개의 바다를 내려다보는 한 사람의 뒷모습. 자연 앞에 선 인간의 고독을 그린 낭만주의의 상징입니다."),
    ("constable-hay-wain", "John Constable", "The Hay Wain", "1821",
     "Oil on canvas", "The National Gallery, London", "pastoral calm", "#5a6a3a", "#cdbf8a",
     f("John Constable The Hay Wain.jpg"),
     "강을 건너는 건초 수레와 영국 시골의 한낮을 담은 풍경화입니다. 평범한 일상을 서정으로 끌어올렸습니다."),
    ("turner-fighting-temeraire", "J. M. W. Turner", "The Fighting Temeraire", "1838",
     "Oil on canvas", "The National Gallery, London", "golden farewell", "#6a4a2a", "#e0b25a",
     f("The Fighting Temeraire, JMW Turner, National Gallery.jpg"),
     "퇴역하는 범선이 증기선에 끌려가는 황혼의 장면입니다. 한 시대가 저무는 순간을 빛으로 애도합니다."),
    ("manet-dejeuner", "Édouard Manet", "Le Déjeuner sur l'herbe", "1863",
     "Oil on canvas", "Musée d'Orsay", "bold provocation", "#3a4a2e", "#c2a86a",
     f("Edouard Manet - Luncheon on the Grass - Google Art Project.jpg"),
     "정장 차림의 남자들 사이 나체의 여인을 배치해 당시 살롱에 충격을 준 그림입니다. 근대 회화의 시작을 알렸습니다."),
    ("manet-olympia", "Édouard Manet", "Olympia", "1863",
     "Oil on canvas", "Musée d'Orsay", "direct gaze", "#2a2420", "#cbb07a",
     f("Edouard Manet - Olympia - Google Art Project 3.jpg"),
     "관객을 똑바로 응시하는 여인으로 전통적 누드의 관습을 깨뜨린 도발적 작품입니다."),
    ("monet-woman-with-parasol", "Claude Monet", "Woman with a Parasol", "1875",
     "Oil on canvas", "National Gallery of Art", "breezy light", "#6a8ab0", "#e0d090",
     f("Claude Monet - Woman with a Parasol - Madame Monet and Her Son - Google Art Project.jpg"),
     "바람에 날리는 베일과 풀밭을 빠른 붓질로 담았습니다. 한순간의 빛과 움직임을 포착한 인상주의의 전형입니다."),
    ("monet-impression-sunrise", "Claude Monet", "Impression, Sunrise", "1872",
     "Oil on canvas", "Musée Marmottan Monet", "hazy harbor", "#3a5a6a", "#e08a4a",
     f("Claude Monet, Impression, soleil levant.jpg"),
     "'인상주의'라는 이름이 바로 이 그림에서 나왔습니다. 항구의 아침 안개를 빠른 붓질로 포착했습니다."),
    ("degas-absinthe", "Edgar Degas", "L'Absinthe", "1876",
     "Oil on canvas", "Musée d'Orsay", "urban melancholy", "#6a5a3a", "#bca87a",
     s("Degas In a Cafe L'Absinthe"),
     "카페에 멍하니 앉은 두 사람으로 도시의 고독을 그린 작품입니다. 일상의 권태를 정직하게 담았습니다."),
    ("renoir-moulin-galette", "Pierre-Auguste Renoir", "Bal du moulin de la Galette", "1876",
     "Oil on canvas", "Musée d'Orsay", "dappled joy", "#7a5a6a", "#e0c07a",
     f("Pierre-Auguste Renoir, Le Moulin de la Galette.jpg"),
     "야외 무도회의 햇빛과 흥겨움을 반짝이는 색점으로 담았습니다. 인상주의의 행복한 순간입니다."),
    ("caillebotte-rainy-day", "Gustave Caillebotte", "Paris Street; Rainy Day", "1877",
     "Oil on canvas", "Art Institute of Chicago", "rainy boulevard", "#5a6470", "#c9bda0",
     f("Gustave Caillebotte - Paris Street; Rainy Day - Google Art Project.jpg"),
     "비 오는 파리 거리를 사진처럼 정밀하게 그린 작품입니다. 근대 도시의 새로운 풍경을 포착했습니다."),
    ("renoir-boating-party", "Pierre-Auguste Renoir", "Luncheon of the Boating Party", "1880-1881",
     "Oil on canvas", "The Phillips Collection", "summer leisure", "#5a7a5a", "#e0c488",
     f("Pierre-Auguste Renoir - Luncheon of the Boating Party - Google Art Project.jpg"),
     "강가 테라스에서의 여유로운 오찬을 그린 작품입니다. 빛과 대화, 여름 공기가 함께 살아 있습니다."),
    ("manet-folies-bergere", "Édouard Manet", "A Bar at the Folies-Bergère", "1882",
     "Oil on canvas", "Courtauld Gallery", "mirrored solitude", "#3a3026", "#c2a45a",
     s("Manet A Bar at the Folies-Bergere"),
     "화려한 술집 한가운데 선 여종업원의 공허한 표정을 거울로 비춘 마네의 마지막 대작입니다."),
    ("seurat-grande-jatte", "Georges Seurat", "A Sunday on La Grande Jatte", "1884-1886",
     "Oil on canvas", "Art Institute of Chicago", "pointillist calm", "#3a5a3a", "#d8c87a",
     f("A Sunday on La Grande Jatte, Georges Seurat, 1884.jpg"),
     "무수한 점으로만 화면을 채운 점묘법의 기념비입니다. 공원의 일요일을 과학적 색채로 재구성했습니다."),
    ("vangogh-sunflowers", "Vincent van Gogh", "Sunflowers", "1888",
     "Oil on canvas", "The National Gallery, London", "radiant yellow", "#7a5a1a", "#e7c23a",
     f("Vincent Willem van Gogh 127.jpg"),
     "노랑만으로 생명력을 폭발시킨 반 고흐의 연작입니다. 시들어가는 꽃에서도 강렬한 에너지를 끌어냈습니다."),
    ("vangogh-bedroom", "Vincent van Gogh", "The Bedroom", "1889",
     "Oil on canvas", "Art Institute of Chicago", "restful color", "#5a6a4a", "#d8b25a",
     f("Vincent van Gogh - De slaapkamer - Google Art Project.jpg"),
     "아를의 자기 방을 평면적 색면으로 그렸습니다. 휴식을 표현하려 일부러 단순한 구도를 택했습니다."),
    ("vangogh-irises", "Vincent van Gogh", "Irises", "1889",
     "Oil on canvas", "J. Paul Getty Museum", "restless blue", "#2a4a3a", "#5a7ab0",
     f("Vincent van Gogh - Irises (1889).jpg"),
     "요양원 정원의 붓꽃을 생명력 넘치는 선으로 그렸습니다. 한 송이 흰 꽃이 무리 속에서 홀로 빛납니다."),
    ("cezanne-card-players", "Paul Cézanne", "The Card Players", "1890-1895",
     "Oil on canvas", "Musée d'Orsay", "grounded focus", "#5a4a3a", "#a89a6a",
     f("Paul Cézanne, Les joueurs de carte (1892-95).jpg"),
     "카드놀이에 몰입한 두 사람을 견고한 구조로 그렸습니다. 형태의 본질을 탐구한 세잔의 대표 연작입니다."),
    ("monet-haystack", "Claude Monet", "Grainstack (Sunset)", "1890-1891",
     "Oil on canvas", "Museum of Fine Arts, Boston", "light study", "#7a4a2a", "#e0b45a",
     s("Monet Grainstack Sunset Haystack"),
     "같은 건초더미를 시간과 빛에 따라 반복해 그린 연작입니다. 대상보다 '빛 그 자체'가 주제입니다."),
    ("cassatt-childs-bath", "Mary Cassatt", "The Child's Bath", "1893",
     "Oil on canvas", "Art Institute of Chicago", "tender care", "#6a7a8a", "#d8c0a0",
     f("Mary Cassatt - The Child's Bath - Google Art Project.jpg"),
     "아이를 씻기는 일상의 친밀함을 위에서 내려다본 구도로 담았습니다. 모성의 순간을 섬세하게 포착했습니다."),
    ("lautrec-moulin-rouge", "Henri de Toulouse-Lautrec", "At the Moulin Rouge", "1892-1895",
     "Oil on canvas", "Art Institute of Chicago", "nightlife glow", "#3a2a3a", "#c2a050",
     f("Henri de Toulouse-Lautrec - At the Moulin Rouge - Google Art Project.jpg"),
     "파리 밤 문화의 화려함과 권태를 동시에 담은 작품입니다. 인공조명 아래 인물들의 표정이 강렬합니다."),
    ("cezanne-mont-sainte-victoire", "Paul Cézanne", "Mont Sainte-Victoire", "c. 1902-1904",
     "Oil on canvas", "Various collections", "structured nature", "#4a6a6a", "#cdb884",
     s("Cezanne Mont Sainte-Victoire 1904"),
     "같은 산을 반복해 그리며 형태를 면으로 분해한 연작입니다. 입체파로 가는 길을 연 그림입니다."),
    ("gauguin-where-do-we-come-from", "Paul Gauguin", "Where Do We Come From? What Are We? Where Are We Going?", "1897-1898",
     "Oil on canvas", "Museum of Fine Arts, Boston", "philosophical reverie", "#3a5a4a", "#c2a05a",
     f("Paul Gauguin - D'ou venons-nous.jpg"),
     "탄생부터 죽음까지 인간의 일생을 한 화면에 펼친 고갱의 철학적 대작입니다. 제목 자체가 질문입니다."),
    ("whistler-mother", "James McNeill Whistler", "Whistler's Mother (Arrangement in Grey and Black No.1)", "1871",
     "Oil on canvas", "Musée d'Orsay", "austere harmony", "#2a2a2a", "#b0a890",
     f("Whistlers Mother high res.jpg"),
     "옆모습으로 앉은 어머니를 회색과 검정의 조화로 그렸습니다. 인물화를 색과 형태의 '배열'로 본 작품입니다."),
    ("munch-the-scream", "Edvard Munch", "The Scream", "1893",
     "Tempera and pastel on cardboard", "National Gallery of Norway", "raw anxiety", "#7a3a1a", "#e0a83a",
     f("Edvard Munch, 1893, The Scream, oil, tempera and pastel on cardboard, 91 x 73 cm, National Gallery of Norway.jpg"),
     "붉게 타오르는 하늘 아래 비명을 지르는 형상입니다. 현대인의 불안을 가장 직접적으로 표현한 그림입니다."),
    ("klimt-the-kiss", "Gustav Klimt", "The Kiss", "1907-1908",
     "Oil and gold leaf on canvas", "Belvedere, Vienna", "golden embrace", "#7a5a1a", "#e7c84a",
     f("The Kiss - Gustav Klimt - Google Cultural Institute.jpg"),
     "금박으로 뒤덮인 두 연인의 포옹입니다. 장식과 관능이 결합한 빈 분리파의 절정입니다."),
    ("klimt-adele", "Gustav Klimt", "Portrait of Adele Bloch-Bauer I", "1907",
     "Oil, silver and gold on canvas", "Neue Galerie New York", "gilded portrait", "#6a5520", "#e3c64a",
     f("Gustav Klimt 046.jpg"),
     "금빛 패턴 속에 인물을 녹여낸 클림트의 대표 초상입니다. '오스트리아의 모나리자'로 불립니다."),
    ("cezanne-mont-extra-placeholder", "", "", "", "", "", "", "", "", "", ""),  # removed below
    ("monet-water-lily-pond", "Claude Monet", "Bridge over a Pond of Water Lilies", "1899",
     "Oil on canvas", "The Metropolitan Museum of Art", "soft reflection", "#8aa08d", "#d6cfa9",
     "https://commons.wikimedia.org/wiki/File:Bridge_over_a_Pond_of_Water_Lilies_by_Claude_Monet_(1899).jpg",
     "지베르니 정원의 일본식 다리와 수련을 그렸습니다. 말년 모네가 빛과 물에 몰두한 세계의 입구입니다."),
    ("hassam-celia-thaxter-garden", "Childe Hassam", "Celia Thaxter's Garden", "1890",
     "Oil on canvas", "The Metropolitan Museum of Art", "garden glow", "#d0a36f", "#4b744a",
     "https://commons.wikimedia.org/wiki/File:Celia_Thaxter%27s_Garden,_Isles_of_Shoals,_Maine_MET_DP139631.jpg",
     "빛이 흩어지는 섬의 정원을 미국 인상주의의 색채로 담았습니다. 눈이 먼저 편안해지는 그림입니다."),
    ("homer-breezing-up", "Winslow Homer", "Breezing Up (A Fair Wind)", "1876",
     "Oil on canvas", "National Gallery of Art", "open air", "#88a8c2", "#d7b36a",
     "https://commons.wikimedia.org/wiki/File:Winslow_Homer_-_Breezing_Up_(A_Fair_Wind).jpg",
     "바람을 안고 달리는 작은 배를 그린 미국 해양화의 명작입니다. 시원한 바깥 공기가 화면을 채웁니다."),
    ("renoir-two-sisters", "Pierre-Auguste Renoir", "Two Sisters (On the Terrace)", "1881",
     "Oil on canvas", "Art Institute of Chicago", "warm color", "#c08c7a", "#456b6f",
     "https://commons.wikimedia.org/wiki/File:Renoir_-_The_Two_Sisters,_On_the_Terrace.jpg",
     "테라스에 앉은 두 자매를 따뜻한 색으로 담았습니다. 밝고 다정한 기분을 남기는 르네상스풍 인상주의입니다."),
]

# placeholder 제거
WORKS = [w for w in WORKS if w[0] != "cezanne-mont-extra-placeholder"]

assert len(WORKS) == 50, f"expected 50, got {len(WORKS)}"


def esc(t):
    return t.replace("\\", "\\\\").replace('"', '\\"')


def gen():
    out = io.StringIO()
    out.write("export const MUSEUM_WORKS: MuseumWork[] = [\n")
    for i, w in enumerate(WORKS, start=1):
        slug, artist, work, year, medium, collection, mood, t1, t2, src, note = w
        idx = f"{i:02d}"
        out.write("  {\n")
        out.write(f'    index: "{idx}",\n')
        out.write(f'    artist: "{esc(artist)}",\n')
        out.write(f'    work: "{esc(work)}",\n')
        out.write(f'    year: "{esc(year)}",\n')
        out.write(f'    medium: "{esc(medium)}",\n')
        out.write(f'    collection: "{esc(collection)}",\n')
        out.write(f'    mood: "{esc(mood)}",\n')
        out.write(f'    note: "{esc(note)}",\n')
        out.write(f'    image: "/assets/museum/{slug}.jpg",\n')
        out.write(f'    sourceUrl: "{esc(src)}",\n')
        out.write('    license: "Public Domain / Wikimedia Commons",\n')
        if i == 1:
            out.write("    onView: true,\n")
        out.write(f'    tone: ["{t1}", "{t2}"],\n')
        out.write("  },\n")
    out.write("];\n")
    return out.getvalue()


def main():
    block = gen()
    with open(DATA, "r", encoding="utf-8") as fh:
        src = fh.read()
    start = src.index("const LEGACY_MUSEUM_WORKS: MuseumWork[] = [")
    end_marker = "export interface Interviewee {"
    end = src.index(end_marker)
    new_src = src[:start] + block + "\n" + src[end:]
    with open(DATA, "w", encoding="utf-8") as fh:
        fh.write(new_src)
    print(f"data.ts updated: MUSEUM_WORKS = {len(WORKS)} works")
    # 슬러그 목록 출력 (이미지 존재 검증용)
    for w in WORKS:
        print(" -", w[0])


if __name__ == "__main__":
    main()
