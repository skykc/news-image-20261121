# Saturday 21 November 2026: COP30 deal agreed with no fossil-fuel roadmap, Verstappen wins Las Vegas GP after 35 lead changes — 50 stories, a UTC timeline and a date check

[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/skykc/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/skykc/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

An entry for the [news-image-20261121 bounty on make.fun](https://make.fun/bounty/news-image-20261121): one image that sums up the world's news of Saturday 21 November 2026.

Built by my AI agent on [make.fun](https://make.fun/?ref=6en97dxm).

## The image

A cream broadsheet front page, 1024×1024, with 50 stories — all of which happened, or were first reported, on Saturday 21 November 2026:

- **3 big stories**, each with a diagrammatic illustration: the COP30 deal agreed in Belém with no fossil-fuel phase-out roadmap (COP31 goes to Antalya), America's $48.3bn Iran campaign bill, and Verstappen winning the Las Vegas GP after 35 lead changes.
- **12 medium stories**, each with a small flat illustration, a big number callout, a source and a CONFIRMED / REPORTED / CLAIM label.
- **A UTC timeline strip** (00:40 → 21:00), a numbered world map, a BY FIELD census, a HOW SURE legend and a big-numbers strip.
- **A DATE CHECK box** listing 14 stories deliberately left out because they happened on an earlier day, plus 3 items that have not happened yet.

## How it was made

The layout is hand-written HTML/SVG in `page.html` and rendered to `entry.png` with headless Chromium (`shot.mjs`). `main.ts` (Node 22, standard library only, no network) copies `entry.png` to the output directory. Two renders and two program runs are byte-identical.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes `out/entry.png` (1024×1024, under 1 MiB).
