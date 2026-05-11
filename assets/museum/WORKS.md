# S.A Museum Works

이 폴더는 `next-app/lib/data.ts`의 `MUSEUM_WORKS`와 1:1로 연결되는 실제 작품 이미지 저장소입니다.

| No. | File | Work | Artist | Year | Source |
| --- | --- | --- | --- | --- | --- |
| 01 | `monet-water-lily-pond.jpg` | Bridge over a Pond of Water Lilies | Claude Monet | 1899 | Wikimedia Commons / Met object 437127 |
| 02 | `vangogh-wheat-field-cypresses.jpg` | Wheat Field with Cypresses | Vincent van Gogh | 1889 | The Metropolitan Museum of Art, object 436535 |
| 03 | `renoir-two-sisters.jpg` | Two Sisters (On the Terrace) | Pierre-Auguste Renoir | 1881 | Wikimedia Commons / Art Institute of Chicago object 14655 |
| 04 | `sargent-madame-x.jpg` | Madame X | John Singer Sargent | 1883-84 | The Metropolitan Museum of Art, object 12127 |
| 05 | `degas-dance-class.jpg` | The Dance Class | Edgar Degas | 1874 | The Metropolitan Museum of Art, object 438817 |
| 06 | `homer-breezing-up.jpg` | Breezing Up | Winslow Homer | 1876 | Wikimedia Commons / National Gallery of Art |
| 07 | `morisot-young-woman-knitting.jpg` | Young Woman Knitting | Berthe Morisot | ca. 1883 | The Metropolitan Museum of Art, object 437159 |
| 08 | `pissarro-harvest-pontoise.jpg` | The Harvest, Pontoise | Camille Pissarro | 1881 | The Metropolitan Museum of Art, object 459108 |
| 09 | `hassam-celia-thaxter-garden.jpg` | Celia Thaxter's Garden, Isles of Shoals, Maine | Childe Hassam | 1890 | Wikimedia Commons / Met object 14930 |
| 10 | `church-heart-of-the-andes.jpg` | Heart of the Andes | Frederic Edwin Church | 1859 | The Metropolitan Museum of Art, object 10481 |

## Update Rule

1. 이미지는 이 폴더에 저장합니다.
2. `next-app/lib/data.ts`의 `MUSEUM_WORKS[].image`를 `/assets/museum/{file}` 형식으로 연결합니다.
3. `sourceUrl`, `collection`, `license`, `year`, `medium`, `note`를 함께 갱신합니다.
4. `cd next-app && npm run build:pages`로 `museum/index.html`과 `issues/museum.html`을 재생성합니다.
