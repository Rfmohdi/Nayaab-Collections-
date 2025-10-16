# nayaab-collection

This repository is a single-page, GitHub Pages-ready static site for **Nayaab Collection** — a boutique e-commerce front-end (UI-only).

## What's included
- `index.html` — Single page layout (Home, About, Products, Contact).
- `styles.css` — Styling with a purple & gold gradient, responsive layout.
- `script.js` — Product data, Add-to-Cart UI (client-side only), and interactions.
- `logo.jpg` — Brand logo.
- `products/` — Product images (including your uploaded ring image).

## Example products
- Elegant Silver Ring — 35 KWD (products/20241006_122816.jpg)
- Handcrafted Necklace — 45 KWD (products/necklace.jpg)
- Luxury Shawl — 75 KWD (products/shawl.jpg)
- Statement Earrings — 30 KWD (products/earrings.jpg)

---

## Deploy to GitHub Pages

1. Create a new repository on GitHub named **`nayaab-collection`** (or any name you prefer).
2. On your computer, unzip this project folder, then in a terminal run:
```bash
git init
git add .
git commit -m "Initial commit - Nayaab Collection single-page site"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/nayaab-collection.git
git push -u origin main
```
3. In the GitHub repository page, go to **Settings → Pages** (or **Pages** in the sidebar):
   - For **Source**, choose the `main` branch and the root folder (`/`), then save.
   - GitHub Pages will provide a URL like `https://YOUR_GITHUB_USERNAME.github.io/nayaab-collection/` within a minute or two.
4. Open the provided URL to view your live site.

## Notes & next steps
- This site is a **static front-end** demo. To make it a full e-commerce store you can:
  - Integrate a hosted cart solution (Snipcart, Shopify Buy Button).
  - Add a backend with a shopping cart & payments (Stripe, PayPal).
  - Replace placeholder product images with high-resolution photos in `products/`.
- Need help connecting payments or deploying? Reply and I’ll walk you through it or do it for you.

---
Made for Nayaab Collection — good luck! 💜
