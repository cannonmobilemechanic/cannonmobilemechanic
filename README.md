# Cannon Mobile Mechanic LLC — Website

Static site, ready for GitHub Pages. No build step required.

## Files
- `index.html` — Home
- `about.html` — About
- `services.html` — Services (detailed)
- `blog.html` — Blog (placeholder posts — swap in real content anytime)
- `contact.html` — Contact + booking
- `terms.html` — Terms of Service
- `privacy.html` — Privacy Policy
- `404.html` — Not-found page (GitHub Pages picks this up automatically)
- `css/style.css` — all styling
- `js/main.js` — mobile menu + footer year
- `images/logo.png` — your logo (transparent, already included)
- `images/logan-cannon.jpg` — owner photo, used on About page
- `images/favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `android-chrome-192x192.png`, `android-chrome-512x512.png`, `favicon.ico`, `site.webmanifest` — full favicon set generated from your logo
- `robots.txt`, `sitemap.xml` — search engine crawling files

## To-do before launch

1. **Calendly link** — open `contact.html`, search for `YOUR-CALENDLY-LINK-HERE`, and replace with your real Calendly URL (e.g. `https://calendly.com/cannonmobilemechanic/service-call`).
2. **Domain** — every page has `https://www.cannonmobilemechanic.com/` as a placeholder in canonical/OG tags, `sitemap.xml`, and `robots.txt`. Search-and-replace with your real domain once it's live.
3. **Google Analytics (optional)** — each page has a commented GA4 snippet right before `</head>`. Get a Measurement ID from analytics.google.com, replace `G-XXXXXXXXXX` in both spots, and uncomment.
4. **Facebook feed embed** — the homepage embeds your Facebook Page feed directly (no API key needed, since your Page is public). It'll auto-pull whatever you post to Facebook.
5. Double check phone/email/address are correct (pulled from what you gave me).

## Google Business reviews
The homepage links straight to your Google Business profile and Facebook Page for reviews. Once you have real reviews you're comfortable publishing, ask me to add an `AggregateRating` schema block with your actual rating/review count — don't fabricate this, Google penalizes fake review markup.

## Publish on GitHub Pages
1. Create a repo, push these files to the root (or a `docs/` folder).
2. Repo Settings → Pages → set source to your branch/folder.
3. Site goes live at `https://<username>.github.io/<repo>/`.

## Mobile
Fully responsive — hamburger menu under 760px, fluid type/grids down to small phones. No separate mobile site needed.
