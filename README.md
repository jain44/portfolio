# Jainam Jain — Portfolio

Personal portfolio showcasing projects in AI/ML, full-stack web development, and cybersecurity.

🔗 **Live:** [jainamjain.dev](https://jainamjain.dev) ← *update once deployed*

---

## About

Hi, I'm Jainam Jain — a third-year B.Tech IT student at TCET, Mumbai (9.92 CGPA).  
I build intelligent systems, full-stack web applications, and secure digital products.  
Design Director at TCET ACM Student Chapter.

**Focus areas:** AI / ML · Full-Stack Web · Cybersecurity  
**Available for:** Internships · Research collaborations · Interesting problems

---

## Tech Stack

This portfolio is built with:

- **HTML5** — semantic, accessible markup
- **CSS3** — vanilla CSS with custom properties, animations, glassmorphism
- **Vanilla JavaScript** — no framework, no build step

Deliberately framework-free to keep it fast, portable, and zero-dependency.

---

## Featured Projects

| Project | Category | Stack |
|---------|----------|-------|
| AI Fracture Detection | Computer Vision | Python, Deep Learning |
| JusticeAI | Legal Tech | LLM APIs, Python, NLP |
| SafeRoute — OneJourney | Women's Safety | Node.js, Maps API |
| Padmavati | Enterprise Frontend | Next.js, TypeScript |
| RupeeReality | Fintech | JavaScript, Data Viz |
| Agentic Business Strategy Simulator | AI/Productivity | LLM APIs, Python |

[→ See all 14 projects in the portfolio](https://jainamjain.dev)

---

## Run Locally

No build step required. Just serve the files:

```bash
# Option 1 — npx live-server (recommended for auto-reload)
npx live-server --port=3000 --no-browser

# Option 2 — Python
python -m http.server 3000

# Option 3 — Just open index.html in a browser
```

---

## Setup: Contact Form

The contact form uses [Formspree](https://formspree.io) (free tier available).

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and copy your endpoint ID
3. In `index.html`, replace `REPLACE_WITH_FORMSPREE_ID` with your actual ID:
   ```html
   action="https://formspree.io/f/YOUR_ACTUAL_ID"
   ```

Without this step, the form falls back to opening the user's email client.

---

## Setup: Resume

Add your resume PDF as `resume.pdf` in the project root.  
The "Resume ↓" button in the navbar links to `./resume.pdf`.

---

## Deploy

Easiest free options:

```bash
# Vercel
npx vercel --prod

# Netlify
# Drag-and-drop the project folder at app.netlify.com

# GitHub Pages
# Push to main, enable Pages in repo Settings → Pages
```

After deploying, update these in `index.html`:
- `<link rel="canonical" href="https://YOUR-DOMAIN/">`
- All `og:url` and `og:image` meta tags
- `sitemap.xml` — update `<loc>` to your live URL

---

## Project Structure

```
static-site/
├── index.html          # Main HTML — all sections, meta, structured data
├── styles.css          # All styles — design system, layout, animations
├── script.js           # All JS — data, rendering, interactions
├── profile.jpg         # Profile photo
├── resume.pdf          # Your resume (add this file)
├── favicon.svg         # SVG favicon
├── og-image.png        # Open Graph preview image (add this file — 1200×630px)
├── sitemap.xml         # SEO sitemap
└── robots.txt          # Search engine instructions
```

---

## Contact

- **Email:** [jainamjain1116@gmail.com](mailto:jainamjain1116@gmail.com)
- **LinkedIn:** [linkedin.com/in/jainam-jain-746188263](https://linkedin.com/in/jainam-jain-746188263)
- **GitHub:** [github.com/jain44](https://github.com/jain44)

---

## License

[MIT](./LICENSE) — use this as inspiration, but make it your own.
