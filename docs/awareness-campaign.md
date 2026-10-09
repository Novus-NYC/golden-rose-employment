# October 2026 awareness campaign

The site uses a purple palette, purple logo, and awareness banner from October 1 through October 31, 2026 in `America/New_York`. `src/app/awareness-theme.ts` checks the visitor's clock in that timezone before paint and after hydration, and rechecks once a minute and when the tab's visibility changes. This works with the statically generated Next.js pages. The original palette and logo return on November 1. Original brand assets are retained.

The bilingual `/domestic-violence-resources` page, navigation and footer links, and homepage/community callouts remain available after the campaign. English and Spanish share the site's existing language state.

## Resource sources

Phone numbers and links were checked October 9, 2026 against:

- [Safe Horizon](https://www.safehorizon.org/get-help-now/) and [Spanish contact information](https://www.safehorizon.org/es/solicita-ayuda/contactenos/)
- [Safe Horizon chat](https://www.safehorizon.org/safechat/)
- [NYS Office for the Prevention of Domestic Violence](https://opdv.ny.gov/)
- [NYC Family Justice Centers](https://access.nyc.gov/programs/family-justice-centers/) and [Spanish resources](https://access.nyc.gov/es/programs/family-justice-centers/)
- [NYC 311 domestic violence resources](https://portal.311.nyc.gov/article/?kanumber=KA-01217)
- [NYC Text-to-911 guidance](https://www.nyc.gov/site/text911/index.page)

## Transparent logo

`public/brand/mark-purple.png` was edited from the client's attached `image1.jpeg` using the built-in imagegen tool. It has an RGBA alpha channel; the white background, inner white gaps, and screenshot controls are transparent. The source attachment and original brand assets were preserved.

Final imagegen prompt:

> Use case: background-extraction. Asset type: transparent PNG logo for Golden Rose Employment Agency website. Input image 1 is the edit target. Remove all white and off-white background including white negative space between the geometric rose petals and leaves and inside the central diamond; make these areas fully transparent with clean edges. Remove the unrelated black share icon, white circular button at lower right, rounded screenshot background, any bottom clipped screenshot artifacts. Keep only the original geometric purple rose with its lighter lavender center and olive green leaves. Preserve the exact rose and leaf shapes, proportions, colors and layout; no redesign, no new elements, no text. Center and tightly frame the complete logo with a small even transparent margin. Output true RGBA transparency, no white matte or checkerboard.
