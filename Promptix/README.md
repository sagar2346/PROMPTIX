# 🚀 PROMPTIX — Custom AI Automation Consulting

PROMPTIX is a premium, high-performance static marketing website for custom AI automation consulting services. The site is designed for small and medium enterprises seeking to automate repetitive workflows, deploy WhatsApp AI support agents, and streamline operations.

Built with **pure HTML5, vanilla CSS3, and modern ES6 JavaScript**, PROMPTIX delivers a sleek, responsive, and glassmorphic user experience without the complexity or weight of a modern JavaScript framework.

---

## ✨ Key Features

*   **📱 WhatsApp AI Agents**: Intelligent custom support agents and reservation bots for restaurants, hotels, travel agencies, and educational institutions.
*   **🔄 Workflow Automation**: Integration of business tools (Google Sheets, Airtable, CRMs, email, payment methods) to automate manual data entry processes.
*   **📋 Form & Data Automation**: Smart registration and lead-capture systems that trigger instant business events.
*   **📣 Social Media Automation**: Automated publishing pipelines to Facebook, Instagram, Twitter, and LinkedIn.
*   **💰 Dynamic 3D Pricing Cards**: Click-to-flip cards showcasing Starter, Growth, and Enterprise setup rates, monthly fees, and deliverables.
*   **⚡ Hybrid SPA Router**: Smooth slide-in page transition animations utilizing inline page panel states, rather than full browser reloads.

---

## 🛠️ Technology Stack & Styling

*   **HTML5**: Structural semantic markup optimized for accessibility and SEO indexability.
*   **CSS3**: Full fluid styling with custom properties (CSS variables), typography curves, and grid systems.
*   **Vanilla JS (ES6)**: Clean, library-free programming managing SPA page navigation, typewriter logo effects, pricing card flips, and mobile menus.
*   **Visual Assets**: High-fidelity UI mockups and branding materials matching the modern violet color scheme.

---

## 🎨 Color Palette & Typography

All global tokens are managed inside `style.css` in the `:root` scope:

*   **Palette**:
    *   `--purple-mid`: `#9b6dff` (Primary Brand Color)
    *   `--purple-dark`: `#7c4dff` (Accent Purple)
    *   `--purple-light`: `#c4a0f5` (Highlights)
    *   `--black`: `#0a0a0a` (Dark Contrast Background)
*   **Typography**:
    *   *Headings*: **Outfit** (loaded via Google Fonts CDN)
    *   *Body text*: **DM Sans** (loaded via Google Fonts CDN)

---

## 📂 Codebase Structure

```
├── README.md                      # Professional Project Guide
├── AGENTS.md                      # Developer Quick-Start & Architectural Notes
├── index.html                     # SPA Root, Hero section, and Get Started form
├── benefits.html                  # Standalone Benefits Page
├── how-it-works.html              # Standalone 5-Step Process Page
├── plans.html                     # Standalone Pricing Grid & Plans Page
├── faq.html                       # Standalone FAQ accordion
├── style.css                      # Master CSS Stylesheet
├── detail.txt                     # Source Copy Spec & Content Details
└── logo.png & assets/             # Branding and Graphic Assets
```

---

## 🚀 Local Setup & Development

Because the site uses pure static code, there are no bundlers (Webpack/Vite) or package managers (`npm install`) to run.

To preview the website locally with web fonts and correct security headers, serve the folder statically:

### Using Python (All Platforms)
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000/index.html` in your browser.

### Using Node.js (serve)
```bash
npx serve .
```

---

## ⚠️ Architectural Notes & Code Maintenance

*   **Hand-Duplicated Layouts**: The navbar and footer markup are hand-duplicated across all standalone pages. To update a link or icon, make sure to propagate the change across `index.html`, `benefits.html`, `how-it-works.html`, `plans.html`, and `faq.html`.
*   **SPA Links**: Elements on `index.html` containing `data-page` will automatically navigate via the inline SPA router. Ensure matching page elements are present in the pages container when adding new sections.
*   **Form Endpoint**: The contact form is a front-end UI prototype. Connect a service like Formspree, Web3Forms, or your own server endpoint to active the `submit` handler.
