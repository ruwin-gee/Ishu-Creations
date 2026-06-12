# Ishu Creation — Pure HTML / CSS / JavaScript Version

A learning-friendly version of the Ishu Creation website built with **only HTML, CSS and vanilla JavaScript** — no frameworks, no build step. Just open `index.html` in a browser.

## 📁 Folder structure

```
ishu-creation-html/
├── index.html          ← Home page
├── products.html       ← All products with WhatsApp ordering
├── gallery.html        ← Filterable gallery (Cakes / Hampers / Custom)
├── about.html          ← Our story
├── reviews.html        ← Customer reviews + feedback form (saves to localStorage)
├── contact.html        ← Inquiry form → sends to WhatsApp
├── designer.html       ← Describe your dream cake → WhatsApp
├── css/
│   └── styles.css      ← All styling (design tokens, layout, components)
├── js/
│   └── main.js         ← All interactivity (nav, scroll reveal, products, forms)
└── images/             ← All images (cakes, gifts, hero)
```

## 🎨 How the code is organized (for learning)

### CSS (`css/styles.css`)
The file is split into clearly-commented sections you can copy individually:
1. **Design tokens** — CSS variables for colors, fonts, shadows
2. **Reset** — clean defaults
3. **Typography**
4. **Layout helpers** — `.container`, `.grid`, `.section`
5. **Buttons** — `.btn`, `.btn-primary`, `.btn-outline`
6. **Header** — sticky header with scrolled state
7. **Hero** — full-screen hero with gradient blobs
8. **Cards / Product cards / Forms / Reviews / CTA banner / Footer**
9. **Scroll reveal animation**
10. **WhatsApp floating button**

### JavaScript (`js/main.js`)
Each feature is a small, commented block:
- Sticky header on scroll
- Mobile menu toggle
- Scroll reveal using `IntersectionObserver`
- Product data array + render function
- Gallery category filter
- Contact form → WhatsApp
- Reviews stored in `localStorage`
- Designs prompt → WhatsApp

### HTML pages
Every page follows the same structure:
```html
<header class="header">…</header>
<section class="hero">…</section>      <!-- or other sections -->
<section class="section">…</section>
<footer class="footer">…</footer>
<script src="js/main.js"></script>
```

Sections are separated by big comment blocks like `<!-- ============== HERO ============== -->` so you can copy any single section into your own project.

## 📱 WhatsApp ordering

All "Order" buttons open WhatsApp with a pre-filled message to **+94 75 701 1651**. Configured in one place at the top of `js/main.js`:
```js
const WHATSAPP_NUMBER = "94757011651";
```

## ▶️ How to run

Just double-click `index.html` — it works in any modern browser. No server needed.

For local development with auto-reload, use any simple server, e.g.:
```bash
npx serve .
# or
python3 -m http.server
```

## 🆚 Differences from the React version

- **AI cake image generation** is not included (it needs a backend API key). The Designer page sends your text prompt to WhatsApp instead.
- **Reviews** are stored only in your own browser (`localStorage`).
- All other features — gallery filter, scroll animations, WhatsApp ordering, mobile menu — work identically.
