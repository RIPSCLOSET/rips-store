/* ════════════════════════════════════════════════════════════════
   ██████╗ ██╗██████╗ ███████╗    RIPS CLOSET — CONTROL PANEL FILE
   ██╔══██╗██║██╔══██╗██╔════╝
   ██████╔╝██║██████╔╝███████╗    👋 THIS IS THE ONLY FILE YOU EVER
   ██╔══██╗██║██╔═══╝ ╚════██║       NEED TO TOUCH BY HAND.
   ██║  ██║██║██║     ███████║
   ╚═╝  ╚═╝╚═╝╚═╝     ╚══════╝    Everything you'd want to change —
                                   passwords, buttons, colors, and
                                   every item in the store — lives here.

   ⚠️  GOLDEN RULES (so the site never breaks):
   1. Every line inside { } that has a value must END WITH A COMMA ,
   2. Text always goes inside "quotes like this"
   3. true / false are NOT in quotes
   4. If the site goes blank after an edit — you deleted a comma
      or a quote. Undo your last change and try again.
   ════════════════════════════════════════════════════════════════ */


/* ════════════════════════════════════════════════════════════════
   1️⃣  SITE SETTINGS  — links, passwords, button text
   ════════════════════════════════════════════════════════════════ */
const SETTINGS = {

  // 👻 YOUR SNAPCHAT LINK — every button on the site goes here.
  // Make sure this is YOUR real add link so buyers land on your Snap.
  SNAP_LINK: "https://www.snapchat.com/add/ripscloset",

  // 🔒 PASSWORD to view the store (customers type this to get in)
  SITE_PASSWORD: "RIPS247",

  // 🔑 PASSWORD for the admin page (KEEP THIS ONE PRIVATE — change it!)
  ADMIN_PASSWORD: "RIPSBOSS31",

  // 🛒 Button text on items that are AVAILABLE
  BUY_BUTTON_TEXT: "PURCHASE ON SNAP",

  // 🔔 Button text on items that are SOLD OUT
  SOLDOUT_BUTTON_TEXT: "NOTIFY ME WHEN BACK",

  // 📣 The scrolling ticker at the top of the store
  TICKER_TEXT: "LOCAL MEETUPS ONLY ✦ CASH ONLY ✦ 931 AREA ✦ HMU ON SNAP TO COP ✦",

  // 🏷️ Small line under the logo
  TAGLINE: "STREETWEAR • LOCAL PICKUP • FAYETTEVILLE 931",

  // 🎨 COLORS — swap these hex codes to re-theme the whole site
  COLOR_GREEN: "#3ddd00",   // the neon green
  COLOR_BLACK: "#060606",   // the background black
};


/* ════════════════════════════════════════════════════════════════
   2️⃣  YOUR INVENTORY
   ────────────────────────────────────────────────────────────────
   ➕ EASIEST WAY TO ADD ITEMS: use admin.html — it writes this
      code for you (and can even publish it automatically).

   ✍️  MANUAL WAY: copy one whole ITEM block (from ═══ ITEM to
      ═══ END ITEM), paste it below the marker line, and change
      the details. Upload the photo to the  images/  folder and
      make sure "image" matches the photo's exact file name.

   ✅ WHEN SOMETHING SELLS: find the item and change
         soldOut: false,   ➜   soldOut: true,
      That's it — the button flips to "NOTIFY ME WHEN BACK"
      automatically. Flip it back to false when you restock.

   🗑️  TO REMOVE AN ITEM: delete its whole block, ITEM line
      through END ITEM line.
   ════════════════════════════════════════════════════════════════ */
const PRODUCTS = [
  // ⬇️⬇️⬇️ NEW ITEMS GET ADDED RIGHT BELOW THIS LINE (do not delete this line) ⬇️⬇️⬇️

  // ═══ ITEM: Example Hoodie ═══ [id:demo1]
  {
    id: "demo1",
    name: "Supreme Box Logo Hoodie",     // item name shown on the card
    price: "$220",                        // price (put the $ yourself)
    size: "L",                            // size — leave "" if none
    condition: "9/10",                    // condition — leave "" to hide
    image: "images/demo1.jpg",            // photo file inside images folder
    soldOut: true,                       // 👈 change to true when it sells
  },
  // ═══ END ITEM ═══ [end:demo1]

  // ═══ ITEM: Example Tee ═══ [id:demo2]
  {
    id: "demo2",
    name: "Hellstar Graphic Tee",
    price: "$95",
    size: "M",
    condition: "DS / New",
    image: "images/demo2.jpg",
    soldOut: true,                        // 👈 this one shows the SOLD stamp
  },
  // ═══ END ITEM ═══ [end:demo2]

];
/* ════════════ END OF INVENTORY — nothing to edit past here ════════════ */
