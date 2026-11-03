# Shehzad Ali — Portfolio (React + Vite)

    npm install
    npm run dev      # local
    npm run build    # production build

Edit content in `src/data.js` (profile, about, facts, services, experience, skills, projects, education). Layout lives in `src/App.jsx`, styling in `src/styles.css`. Project images: put any number of images (jpg/png/webp) in `src/assets/projects/<slug>/`, named 1.jpg, 2.jpg, 3.jpg, 4.jpg ... 
The card shows the first 3; clicking opens a gallery with all of them (arrows, thumbnails, swipe).
(slugs: gh-sons-erp, barriocheck, centrixhub, kaduuka, the-mirror, adams-pills, eros-him)
Add `live:` / `github:` URLs in `data.js` to show link buttons.

## Contact form
The form posts to Web3Forms and the message lands in your inbox (your email is never shown on the site).
1. Go to https://web3forms.com, enter your email and copy the access key.
2. Local: copy `.env.example` to `.env` and paste the key after `VITE_WEB3FORMS_KEY=`.
3. Cloudflare Pages: Settings > Variables and Secrets > add `VITE_WEB3FORMS_KEY` (then redeploy).
