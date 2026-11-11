
# Zero to Creator (2026 Edition) — High-Converting Sales Funnel

This repository contains the complete, high-converting digital product sales funnel for **"Zero to Creator: The Complete Content Creation Guide (2026 Edition)"**.

---

## 📁 File Structure

```text
/Users/apple/Ebook/
├── index.html                   # High-Converting Sales Page
├── thankyou.html                # Post-Payment Delivery & Download Page
├── vercel.json                  # Vercel Deployment & Asset Header Config
├── .gitignore                   # Git Ignore File
├── README.md                    # Setup & Instructions Guide
├── assets/
│   ├── cover.jpg                # 2026 Edition Book Cover (640x1024)
│   ├── style.css                # Ultra-Smooth 120 FPS CSS (3D Book Banner, Responsive)
│   └── app.js                  # Razorpay Config, Sticky Bar, Popups & Interactions
└── downloads/
    ├── Zero-to-Creator-2026-Edition.pdf  # The Full 67-Page eBook PDF
    └── cover.jpg                # Cover Artwork
```

---

## 🌟 What Was Built

### 1. High-Converting Sales Page (`index.html`)
- **Interactive 3D Book Banner in Hero**: Realistic 3D perspective book mockup with spine depth, page thickness, lighting sheen, and smooth hover tilt.
- **Strategic Price Anchoring**:
  - Limited Time Launch Price: **₹111**
  - Original Strikethrough Price: **₹399** (72% Discount, Save ₹288).
- **Conversion Boosters**:
  - Sticky CTA bar appearing on scroll with instant checkout trigger.
  - Live social proof toast notifications featuring verified buyer alerts across major cities.
  - "The Uncomfortable Truth" problem vs. solution breakdown (The Broken Way vs. The Zero to Creator System).
  - 4-Part Creator Ladder breakdown (Foundation, Create, Grow, Earn) with all 19 chapters.
  - Value Stack Breakdown: Total real-world value ₹1,596 for just ₹111.
  - Free Bonus Stack: 30 Hook Swipe File, Content Planner, Brand Pitch DM Scripts, and 90-Day Roadmap.
  - Instant Digital Delivery & Support Commitment.
  - Interactive FAQ Accordions with refund policy and dedicated customer support email.

### 2. Post-Payment Thank You Page (`thankyou.html`)
- **Customer Confirmation**: Order ID display, celebration confetti burst animation on load.
- **Prominent E-Book Download Banner**: 3D book mockup paired with an instant **"Download eBook (PDF) Now"** button linked directly to `downloads/Zero-to-Creator-2026-Edition.pdf`.
- **Bonus Toolkit Quick-Access**: Clear index pointing to Appendix A, B, C, and D inside the PDF.
- **15-Minute Action Plan**: Immediate steps for the customer to start creating right away.

---

## 🚀 Deploying to Vercel

This repository is pre-configured with `vercel.json` for 1-click zero-configuration deployment:

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New Project"** → **"Import Git Repository"**.
3. Select this repository: `veergandhi268/Zerotocreator`.
4. Framework Preset: **Other** (Root directory: `./`).
5. Click **"Deploy"**.
6. Your sales page will immediately be live with HTTPS and worldwide CDN edge delivery!

---

## 💳 How to Connect Your Cashfree Payment Link

When you create your Payment Link in your Cashfree Merchant Dashboard:

1. Open `assets/app.js`.
2. Look for the configuration line at the top:
   ```javascript
   const CASHFREE_PAYMENT_URL = ""; 
   ```
3. Paste your Cashfree Payment Link URL between the quotes:
   ```javascript
   const CASHFREE_PAYMENT_URL = "https://payments.cashfree.com/links/your-cashfree-link-here";
   ```
4. In your **Cashfree Dashboard** under Payment Link / Checkout settings:
   - Set the **Return URL / Redirect URL** to your hosted Vercel Thank You page (e.g., `https://your-domain.vercel.app/thankyou`).
   - Cashfree will automatically pass the `order_id` and status, which the Thank You page displays dynamically!
