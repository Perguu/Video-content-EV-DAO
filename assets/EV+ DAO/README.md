# EV+ DAO

EV+ (positive Expected Value) is a community of onchain traders, builders and KOLs. On X (@EVplus_DAO) it runs as a media page: market and narrative research, cycle charts, farming breakdowns and podcasts with traders and builders. The brand has two faces that share one system: **Paper**, an editorial research look for charts and reports, and **Terminal**, the black-and-phosphor look of the logo for avatars, stickers, covers and anything that should feel like a trading screen.

## Content fundamentals

- **Lead with the claim.** The headline is the takeaway, written as a plain sentence: "Memecoins took over, topped, and are fading." Not a topic label.
- **Numbers carry the story.** Every chart has one hero number (a stat, a peak, a dollar outcome). Give exact figures with units: `$11.6B`, `28 months`, `$0.96 a point`.
- **Short sentences, no hype words.** No "huge", "insane", "100x", no rocket emoji. CT slang is fine in captions and the cycle-diagram labels ("we're sooo back"), never in headlines of research pieces.
- **Show the odds.** EV+ means expected value: present bear / base / bull cases side by side, and say what is assumed.
- **Always cite.** Every infographic ends with a mono footer: `Source` (where the data came from, with dates) and `Note` (assumptions, what is not a forecast, risk).
- **Not financial advice tone.** State what the data shows and what is unconfirmed; don't tell readers to buy.

## Visual foundations

**Grounds.** Paper theme: `paper` page with `panel` plates (1px `line` border, `radius-lg`). No shadows, no gradients. Terminal theme: `paper` resolves to near-black and `panel` to a raised charcoal; the same layouts work unchanged.

**One signal per view.** `signal` green marks the single thing the reader should look at: the base-case bar, the key stat, the hero figure. Everything else is `ink`, `ink-muted` or `signal-tint`. If two things are green, one of them is wrong.

**Comparing two series.** Use `signal` vs `loss`. The pair differs in lightness as well as hue, and every series also gets a direct label, so the chart never relies on red/green alone.

**Cycle and phase diagrams.** Phases are soft zones behind a black price line: `loss-tint` for the drawdown, `caution-tint` for the flat accumulation zone, `signal-tint` for the recovery. Annotate the sweet spot with a `signal` bracket and a mono label.

**Unconfirmed or future.** Shade with `caution-tint`, label in `caution` mono: "Not yet", "6 to go", "No token confirmed".

**The phosphor rule.** `phosphor` (#3BFF4A, the logo green) only ever sits on `terminal` black, optionally with `glow-phosphor`. On paper, green is always `signal`.

## Layout of an infographic

1. Header: kicker in `kicker` mono, uppercase, `ink-muted` ("EV+ RESEARCH · MARKET CYCLES"), then `headline` in `ink`, then a `subhead-mono` line in `ink-muted`. Logo top-right.
2. Panels stacked with `space-6` gaps, each with `space-8` padding, a `title` and a `caption` subtitle.
3. Inside panels: numbered step cards (`radius-md`, `signal` number dot with `on-signal` text), bar charts with value labels above bars, stat rows (`stat` number + `body` label + `caption` qualifier).
4. Footer: `line` divider, `footnote` mono `Source` and `Note` lines, `@EVplus_DAO` and the logo bottom-right.

Canvas: 1920 px wide for X posts, `space-16` outer margin.

## Typography

One family, three voices: **Geist Pixel** for anything that should feel like a screen, **Geist Mono** for data, **Geist** for reading. All three come from the same Vercel family, so they share proportions, and the pixel face is built on the same square grid as the EV+ logo.

- **Geist Pixel** (`pixel`, Square shape): headlines, hero stats, bar values, step numbers, the brand name, stickers. Regular weight only; size in steps of 4 px so pixels stay crisp (40, 48, 64, 96). Keep pixel headlines to two lines.
- **Geist Pixel Grid** (`pixel-grid`): decorative only, for oversized background numerals, thumbnails and Terminal-face graphics. Never for text people must read.
- **Geist Mono** (`mono`): kickers (uppercase, wide tracking), subheads, axis and data labels, annotations, tags and source footers.
- **Geist** (`sans`): panel titles, step titles, body copy, captions. Anything longer than one line is set in Geist, never pixel.

The rule of thumb: **numbers and claims in pixel, labels in mono, explanations in sans.**

Geist and Geist Mono load from Google Fonts; the two Geist Pixel faces ship as files in `fonts/` (SIL Open Font License, see `fonts/OFL-Geist.txt`).

## Iconography and marks

- The logo is the pixel "EV+" wordmark in `phosphor` on a `terminal` black disc with CRT scanlines (Logos group). Use it as-is; do not redraw, recolor or put it on paper without its black disc.
- Minimum size 48 px. Clear space: the height of the "+" on all sides.
- Icons, when needed, are drawn on a pixel grid: square ends, no rounded caps, single color, sized in `space-4` / `space-6` steps.

## Using this system

Colors are semantic tokens with a Paper (light, default) and Terminal (dark) theme. Each token's note says where it is legible. Text on a `signal` fill uses `on-signal`. Tint tokens are decorative and always need a label beside them.

## Components

The components are React 18 components in `components/bundle.js`, exposed as `window.EVPlus`. They follow the infographic layout above:

- **Structure:** `ResearchHeader`, `Panel`, `SourceFooter`
- **Content:** `StepCard`, `Tag`
- **Data:** `BarChart` (bear / base / bull bars), `Stat`
- **Terminal:** `Sticker` (pixel stamp on black)

Each one has a README with its rules. For long time-series charts (monthly volume, cycle phases), draw them by hand with the same tokens: `signal` vs `loss` series, `caution-tint` for "not yet" zones, mono annotations in `ink-muted`.
