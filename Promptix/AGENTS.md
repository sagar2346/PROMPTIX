# AGENTS.md

PROMPTIX — static marketing site (AI automation consulting). Pure HTML/CSS/vanilla JS, no framework.

## Running / verification
- There is **no build, lint, or test setup** and no `package.json`. Do not run `npm install`, `npm run dev/build`, or assume a bundler.
- Preview by serving the folder statically, e.g. `python -m http.server 8000`, then open `index.html`. Opening the file directly also works (links are relative).
- `node_modules/` contains vite/gsap/aos artifacts but **nothing imports them** — they are unused leftovers. The HTML relies on plain CSS animations + inline `<script>`. Do not add a build step or import these libs unless explicitly asked.

## Structure (easy to get wrong)
- 5 pages in root, each fully self-contained: `index.html`, `benefits.html`, `how-it-works.html`, `plans.html`, `faq.html`.
- **The navbar and footer markup are hand-duplicated in every page.** A change to nav links, the CTA, or footer must be copied into all 5 files or the pages will diverge.
- `style.css` is the single shared stylesheet (~2250 lines). All design tokens live as CSS custom properties in `:root`: fonts (`Outfit` headings, `DM Sans` body — loaded from Google Fonts CDN, needs internet), purple palette (`--purple-light/-mid/-dark`), and a fixed type scale (`--text-xs` … `--text-8xl`). Reuse these variables; do not hardcode colors/sizes.
- Page-specific JS (mobile nav toggle, page-transition, pricing flip, typing hero, FAQ accordion) is inline at the bottom of each HTML file. There is no shared `.js` file.

## Behavior gotchas
- Link clicks to other `.html` pages are intercepted by inline JS and delayed ~300ms (`page-exit` -> navigate) for a fade transition. Don't "fix" the navigation by removing the handler or same-page anchors will break.
- Hero title is a typewriter effect rendering `PTIX` after the static `PROM` span — keep that split (`<span class="static-text">PROM</span><span class="dynamic-text">PTIX</span>`).
- Pricing cards flip on click (`.pricing-card` -> `.flipped`). The "popular" card uses `transform: scale(1.05)`.
- All prices are in NPR/Rs. (`eSewa`, `Khalti`, bank transfer). Many footer/legal links (`#`) and "Blog (Coming Soon)" are placeholder — leave them as placeholders unless asked to build them. The contact form has no backend (submit does nothing).

## Content source
- `detail.txt` is the full copy spec (sections, services, pricing, FAQ). When editing text, keep it consistent with that source.
