# Hex-Compass Brand Kit (`images/brand/`)

All assets in this folder share the **Hex-Compass** geometry (pointy-top benzene/R-hex frame, three alternating aromatic bond bars in pine/lake/ochre, and a faceted copper North compass needle) in both **Daylight Survey (Light)** and **Star Chart Night (Dark)** palettes.

## Files

| Asset | Role | Formats |
| --- | --- | --- |
| `hex-compass-small-{light,dark}` | Tier 1 (`_brand.yml` `logo.small`): navbar & compact icons | `.svg`, `.png` |
| `hex-compass-medium-{light,dark}` | Tier 2 (`_brand.yml` `logo.medium`): RevealJS slides, Typst PDFs, print seals | `.svg`, `.png` |
| `hex-compass-crest-{light,dark}` | Tier 3 (`_brand.yml` `logo.large`): About crest, GitHub profile, hex stickers | `.svg`, `.png` |
| `hex-compass-lockup-{light,dark}` | Horizontal wordmark lockup (`James H. Wade · CHEMISTRY · CODE · AI TOOLS`) | `.svg` |
| `og-card-source.svg` | Source artwork for `images/og-card.png` (`1200×630` Open Graph / Bluesky share card) | `.svg` → `../og-card.png` |
| `../favicon.svg`, `../favicon.ico`, `../apple-touch-icon.png` | Adaptive dark/light browser favicon + iOS touch icon | `.svg`, `.ico`, `.png` |

## Re-rasterizing after SVG edits

```bash
rsvg-convert -w 1200 -h 630 images/brand/og-card-source.svg -o images/og-card.png
rsvg-convert -w 600 images/brand/hex-compass-crest-light.svg -o images/brand/hex-compass-crest-light.png
```
