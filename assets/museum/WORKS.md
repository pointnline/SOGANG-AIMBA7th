# S.A Museum Works

This folder stores the local image pool used by `next-app/lib/data.ts`.

The current active pool is based on the public TESSA Artist Line-Up page:
`https://www.tessa.art/작가-라인업`

## Active TESSA Pool

| No. | File | Artist | Data Label |
| --- | --- | --- | --- |
| 01 | `tessa-david-hockney.jpg` | David Hockney | TESSA Line-Up · Poolside Light |
| 02 | `tessa-andy-warhol.jpg` | Andy Warhol | TESSA Line-Up · Serial Icon |
| 03 | `tessa-damien-hirst.jpg` | Damien Hirst | TESSA Line-Up · Spot Logic |
| 04 | `tessa-alex-katz.jpg` | Alex Katz | TESSA Line-Up · Flat Portrait |
| 05 | `tessa-kaws.jpg` | KAWS | TESSA Line-Up · Companion Signal |
| 06 | `tessa-lee-ufan.jpg` | Lee Ufan | TESSA Line-Up · Relational Silence |
| 07 | `tessa-marc-chagall.jpg` | Marc Chagall | TESSA Line-Up · Floating Memory |
| 08 | `tessa-takashi-murakami.jpg` | Takashi Murakami | TESSA Line-Up · Superflat Bloom |
| 09 | `tessa-keith-haring.jpg` | Keith Haring | TESSA Line-Up · Public Line |
| 10 | `tessa-hilary-pecis.jpg` | Hilary Pecis | TESSA Line-Up · Interior Garden |
| 11 | `tessa-ha-chong-hyun.jpg` | Ha Chong-Hyun | TESSA Line-Up · Dansaekhwa Surface |
| 12 | `tessa-nicolas-party.jpg` | Nicolas Party | TESSA Line-Up · Pastel Figure |
| 13 | `tessa-jeff-koons.jpg` | Jeff Koons | TESSA Line-Up · Reflective Object |
| 14 | `tessa-lee-bae.jpg` | Lee Bae | TESSA Line-Up · Charcoal Rhythm |
| 15 | `tessa-banksy.jpg` | Banksy | TESSA Line-Up · Street Intervention |
| 16 | `tessa-jonas-wood.jpg` | Jonas Wood | TESSA Line-Up · Patterned Room |
| 17 | `tessa-lee-kun-yong.jpg` | Lee Kun-Yong | TESSA Line-Up · Body Drawing |
| 18 | `tessa-fernando-botero.jpg` | Fernando Botero | TESSA Line-Up · Volume Study |
| 19 | `tessa-edgar-plans.jpg` | Edgar Plans | TESSA Line-Up · Hero Character |
| 20 | `tessa-scott-kahn.jpg` | Scott Kahn | TESSA Line-Up · Night Landscape |
| 21 | `tessa-george-condo.jpg` | George Condo | TESSA Line-Up · Constructed Face |
| 22 | `tessa-javier-calleja.jpg` | Javier Calleja | TESSA Line-Up · Wide-Eyed Figure |
| 23 | `tessa-tomokazu-matsuyama.jpg` | Tomokazu Matsuyama | TESSA Line-Up · Hybrid Ornament |
| 24 | `tessa-lucio-fontana.jpg` | Lucio Fontana | TESSA Line-Up · Spatial Cut |
| 25 | `tessa-edgar-degas.jpg` | Edgar Degas | TESSA Line-Up · Figure in Motion |
| 26 | `tessa-mayuka-yamamoto.jpg` | Mayuka Yamamoto | TESSA Line-Up · Animal Child |

## Update Rule

1. Save any new image in this folder.
2. Link it from `MUSEUM_WORKS[].image` as `/assets/museum/{file}`.
3. Keep `sourceUrl`, `collection`, `license`, `year`, `medium`, and `note` aligned with the source.
4. Run `cd next-app && npm run build:pages` to regenerate GitHub Pages files.
