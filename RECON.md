# RECON · Dragon Flame Smoke Shop

Build: `builds/dragon-flame-smoke-shop/index.html` (single self-contained file + `images/`)
Stage: REVIEW (not deployed). Semaj approves LIVE.
Built: 06-20-2026 · warm lead, East Orange NJ. Modeled on the Royal Fried Chicken bar.

---

## 1 · Verified Facts (used as-is, nothing invented)

| Field | Value |
|---|---|
| Name | Dragon Flame Smoke Shop |
| Category | Smoke shop / glass / hookah / vape |
| Address | 7 N Harrison St, East Orange, NJ 07017 |
| Phone | NONE on file (Google lists no phone) |
| Rating | 4.4 stars |
| Reviews | 9 Google reviews |
| Hours | Every day 9:00 AM to 11:00 PM (all 7 days identical) |
| Map | exact address string, keyless Google embed (Ramos pattern) |

WEBSITE_STATUS: none (BWYW pre-built sales site).

### Real review quotes (verified, from the lead record, used verbatim)
- "Best customer service, cool deals, always recommend this spot."
- "Wish they stayed open a lil bit longer."

### Social handles
None shown / none verifiable. Per the verified-socials rule, all socials are omitted.

---

## 2 · Placeholders / to CONFIRM with the owner

- **Phone number.** Google has none on file, so NO phone or `tel:` link appears
  anywhere on the site (only-verified-content rule). Every CTA routes to Get
  Directions / Open in Maps instead. If the owner gives a number, drop it into
  the nav CTA, the hero, the hours card, and the sticky mobile bar.
- **Product photos.** The six category photos are curated CC0 stock that read
  unmistakably as the right category (glass, hand pipes, hookah, vapes, rolling,
  torches). Swap for the owner's real shelf photos before any public launch.
- The category list ("everything you can imagine") is sampled. Confirm the real
  departments and any house specialties / deals with the owner.

---

## 3 · Art Direction (mine alone, distinct from siblings)

- **World sentence:** Void-black storefront at night, ember heat rising through
  drifting smoke, one cool jade dragon-scale glow as the counterpoint.
- **Palette:** void black (#08080A) + a flame gradient (ember #FF6A1A to crimson
  #E11D2A) + jade dragon green (#1FBF7A / #2DE08F). The jade is pulled straight
  from the green hookah hose in the hero photo. Deliberately NOT the crimson and
  gold of Royal Fried Chicken; warm fire against cool dragon scale.
- **Type:** Cabinet Grotesk (display, 800/900), Supreme (uppercase labels),
  General Sans (body). No family shared with any sibling build (RFC used
  Clash Display / Khand / Satoshi).
- **Imagery (every photo distinct, none reused on the page):** local curated
  stock, flagged-for-swap.
  - Hero: chrome hookah with green hose and smoke `images/hero.jpg`
  - After Dark backdrop: red flame `images/afterdark.jpg`
  - Aisle 01 Glass: amber glass water pipe `images/glass.jpg`
  - Aisle 02 Hand Pipes `images/pipes.jpg`
  - Aisle 03 Hookah `images/hookah.jpg`
  - Aisle 04 Vapes `images/vape.jpg`
  - Aisle 05 Rolling `images/rolling.jpg`
  - Aisle 06 Torches/Lighters `images/accessories.jpg`
  8 images total, zero reuse on the page.

---

## 4 · Signature Interaction (assigned: IGNITE THE CASE)

- **Craft verb:** LIGHT / IGNITE (a smoke shop runs on the flame). State change:
  unlit, smoky, dim shelf to a lit, sharp, glowing display case.
- **Device:** as each category tile scrolls into view its photo resolves from a
  smoky blur (blur + low brightness) to sharp, and an ember glow ignites along
  the tile edge, staggered left to right (IntersectionObserver, per-tile delay).
  Mechanically distinct from RFC's translateY/opacity reveal: this is a
  de-blur + edge-ignite, not a rise.
- **Plus a bold swing (Arsenal):** a live `<canvas>` ember field drifts up
  through the hero, mostly ember sparks with a few jade ones. Verified rendering
  on a real GPU (sparks visible in screenshots, desktop and mobile). Pauses when
  the hero scrolls out of view and on tab hide.
- **Sticky "Get Directions" bar** on mobile appears after the hero and retracts
  near the footer; carries the live open/closed status.
- **Reduced motion:** `prefers-reduced-motion` shows everything immediately, no
  reveals, no ticker, no canvas.

---

## 5 · Rule Compliance (BUILD_RULES / Constitution)

- [x] Real top nav bar: flame mark + section links + persistent Get Directions
      CTA; on mobile the CTA collapses to a 46px ember icon circle (address kept
      in `aria-label`). No 375px overflow.
- [x] Footer carries name, real address, hours, a 21+ compliance block, and a
      brand-styled "Built by bysemaj.com" credit linking https://bysemaj.com.
- [x] 12-hour AM/PM everywhere. Live Open/Closed pill computed in
      America/New_York (every day 9:00 AM to 11:00 PM). Verified: reads
      "Open now · till 11:00 PM" and highlights the Saturday row on 06-20-2026.
- [x] No em dashes AND no en dashes anywhere (time ranges use "to"). Verified by
      DOM innerText scan and full-HTML scan (both false).
- [x] No photo reused on the page; every image reads as the smoke-shop category
      (eyeballed before use).
- [x] Keyless Google Maps embed (Ramos pattern) centered on the real address,
      `q=7+N+Harrison+St,+East+Orange,+NJ+07017&z=16&output=embed`. Iframe
      DOM-verified present with the correct src (embed renders blank in the
      preview sandbox, an unreliable artifact per ARSENAL; DOM-verified instead).
- [x] Mobile-first; no horizontal page scroll (`body.scrollWidth == innerWidth`
      at 375 and 1280). Ticker is the only wider element, inside an
      `overflow:hidden` track (no page scroll).
- [x] Only verified content; no fake quotes, no invented phone. Social proof uses
      ONLY the real 4.4 / 9-review figures and the two real Google quotes.
- [x] 21+ category compliance: a tasteful session-remembered age gate on entry,
      plus a 21+ / Valid ID footer block. Age gate fails open if storage is
      blocked (never traps the visitor).
- [x] Accessibility: semantic landmarks (header/main/section/footer), real alt
      text on every photo, visible focus states, AA contrast, aria-labels on the
      icon-only directions controls, `role="dialog"` + focus on the age gate.

---

## 6 · Inspiration / Reference (external, category-grounded)

Premium smoke-shop and vape brands lean on near-black backgrounds, neon / ember
accents, glossy product photography on dark, and a curated "case" feel rather
than a cluttered head-shop look. Grounded the direction in that real-world
category language (dark + ember + curated counter) and tied it to the brand name
with a literal flame motif and a dragon-scale jade accent.

---

## 7 · Verification log (real browser, localhost:4599)

- Hero, nav, age gate, ember canvas, reveals all render correctly. Ember sparks
  visible on a real GPU, desktop and mobile.
- Signature: all 6 case tiles reach the `.lit` state (de-blur + edge ignite);
  generic `.rise` reveals fire on scroll.
- Status engine: hero pill, hours pill, sticky-bar live text and today-row
  highlight all agree (Open now, Saturday highlighted on the build date).
- All 8 images load (naturalWidth 1600); none broken.
- No horizontal overflow at 375 and 1280. Em/en dash scan: clean.
- Map iframe present with the correct address src.
- Age gate: shows on first entry, remembers via sessionStorage, fails open.

### Notes / open items before public launch
- Confirm a phone number with the owner and wire it into all CTAs.
- Swap the six category photos for the owner's real shelf photos.
- Deploy caution (per the deploy-clobber rule): this build folder still contains
  the older Next.js project and a linked `.vercel`. This new build is a single
  static `index.html` + `images/`. Before any `vercel --prod`, confirm the
  `.vercel` projectName matches this business so it does not clobber another
  live site.
