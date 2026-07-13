# 🟢 RIPS CLOSET — Store Website

Neon-green password-locked storefront. Customers browse the drop, every button sends them to your Snap. No online sales — local meetups only, exactly how you run it.

**The one rule to remember: everything you'd ever want to change lives in `products.js`.** Items, prices, passwords, button text, the ticker, even the colors. You never need to touch the other files.

---

## 🚀 Put it on GitHub (one-time, ~10 min)

1. Log in at **github.com** → click **+** (top right) → **New repository**
2. Name it `rips-store` → set it to **Public** → **Create repository**
3. Click **uploading an existing file** → drag in **everything from this folder** (`index.html`, `admin.html`, `products.js`, `README.md`, and the whole `images` folder) → green **Commit changes**
   - If the `images` folder doesn't upload as a folder: open the repo → **Add file → Create new file** → type `images/keep.txt` as the name, put anything in it, commit. Now the folder exists and you can upload photos into it.
4. In the repo: **Settings → Pages** → under *Branch* choose **main** and **/ (root)** → **Save**
5. Wait ~2 minutes. Your store is live at:
   `https://YOURUSERNAME.github.io/rips-store/`

Your admin page is that same link with `/admin.html` on the end. **Don't post the admin link anywhere.**

---

## ➕ Adding items (2 ways)

### ⚡ Way 1 — Instant Publish (do the 2-min setup once, then it's one tap forever)
Open `admin.html` → log in → scroll to **"Instant Publish — one-time setup"** and follow the steps on the page (you make a free GitHub "token" — a spare key that lets the admin page save to your repo). After that:
- **Add item** = fill the form, pick a photo, tap **PUBLISH TO SITE** ✅
- **Mark sold / back in stock / delete** = one tap in the "Current Inventory" list ✅

Your partner does the same setup once on their phone with their own token.

### ✍️ Way 2 — Manual Mode (zero setup)
Fill the form → tap **MANUAL MODE** → the page hands you a ready-to-go photo file + a code block, with numbered steps for exactly where to paste it on GitHub.

---

## ✅ When something sells (manual way)

Open `products.js` on GitHub → ✏️ pencil → find the item → change:

```
soldOut: false,   →   soldOut: true,
```

Green **Commit changes**. The button flips to **NOTIFY ME WHEN BACK** and the SOLD stamp appears on its own. Flip back to `false` when you restock.

---

## 🎛️ Changing buttons, passwords, ticker, colors

Open `products.js` → ✏️ pencil → the **SITE SETTINGS** block at the top is labeled line by line:

| Want to change | Edit this line |
|---|---|
| Where buttons send people | `SNAP_LINK` |
| Store password | `SITE_PASSWORD` |
| Admin password (**change it!**) | `ADMIN_PASSWORD` |
| "PURCHASE ON SNAP" text | `BUY_BUTTON_TEXT` |
| "NOTIFY ME WHEN BACK" text | `SOLDOUT_BUTTON_TEXT` |
| Scrolling ticker | `TICKER_TEXT` |
| Line under the logo | `TAGLINE` |
| Colors | `COLOR_GREEN` / `COLOR_BLACK` |

---

## 🚑 If something breaks

- **Site goes blank after an edit** → you deleted a comma `,` or a quote `"` in products.js. On GitHub: repo → **Commits** (clock icon) → open your last change to see what moved, and fix it.
- **Photo not showing** → the file name in `image:` must match the file in `images/` *exactly* (capital letters count).
- **Change not showing up** → GitHub Pages takes 1–2 min. Hard-refresh (pull down on mobile).
- **Instant Publish stopped working** → your token expired. Make a fresh one (steps are on the admin page) and save it again.

## 🔒 Real talk about the password

The password gate keeps randoms and lurkers out, which is what you want. But since the site is all front-end, someone tech-savvy could dig the password out of the code. Don't treat it like a bank vault — it's a velvet rope, not a safe. For a cash-and-meetup shop, that's plenty.

Two demo items ship in `products.js` so you can see how it looks — delete their blocks when you add your first real drop.
