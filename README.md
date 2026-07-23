# LightPro Technologies — corporate website

React 18 + Tailwind CSS 3 + Node (Express). Multi-page site with routed sub-pages,
built around the logo's palette: **#67A93B** green and **#0B0C0B** black on white.

---

## Run it

```bash
npm install          # install dependencies
npm run dev          # Vite dev server  -> http://localhost:5173
```

Production:

```bash
npm run build        # outputs to /dist
npm start            # Express serves /dist -> http://localhost:3000
# or in one step:
npm run serve
```

`npm run dev` proxies `/api/*` to `http://localhost:3000`, so run `npm start` in a
second terminal if you want the contact form working while developing.

---

## Menu structure

Logo sits on the left, the menu on the right. Defined once in `src/data/site.js` —
edit there and the header, mobile drawer and footer all update.

| # | Menu item | Sub-menu |
|---|-----------|----------|
| 1 | About | — |
| 2 | Digital Workspace Solutions | Network & End-point · Device Management Solutions · Productivity Software & Tools |
| 3 | Network & Cyber Security Services | — |
| 4 | LightPro Professional Services | IT Staffing Services · Seamless Deployment · On-Demand Services · Warehousing |
| 5 | Contact Us | — |

## Routes

```
/                                                          Home
/about                                                     About
/digital-workspace-solutions                               Overview
/digital-workspace-solutions/network-and-endpoint          Sub-page
/digital-workspace-solutions/device-management-solutions   Sub-page
/digital-workspace-solutions/productivity-software-and-tools  Sub-page
/network-and-cyber-security-services                       Service page
/professional-services                                     Overview
/professional-services/it-staffing-services                Sub-page
/professional-services/seamless-deployment                 Sub-page
/professional-services/on-demand-services                  Sub-page
/professional-services/warehousing                         Sub-page
/contact                                                   Contact
*                                                          404
```

---

## Theme

Set in `tailwind.config.js`:

| Token | Hex | Use |
|-------|-----|-----|
| `brand` | `#67A93B` | Logo green — accents, rules, primary buttons |
| `brand-dark` | `#528B2C` | Button hover |
| `brand-tint` | `#F1F7EA` | Menu hover, soft panels |
| `ink` | `#0B0C0B` | Logo black — headings, dark sections |
| `ink-500` | `#5C6259` | Body copy |
| `hair` | `#E6E9E3` | Hairline borders |

Type: **Outfit** (display, light weights — matches the logo wordmark) and
**Inter** (body). Corners are square by design; the logo is geometric, so the
whole system uses hairline rules instead of rounded cards.

**Design signature:** the logo is a stack of rules that widen as they descend.
That motif is reused as the eyebrow marker, the list bullet, the page-header
furniture and — on the home page — as `LayerStack.jsx`, an interactive graphic
where each rule is one layer of the service offering.

---

## Project structure

```
src/
├── components/
│   ├── Logo.jsx          SVG recreation of the LightPro mark (full + compact)
│   ├── Navbar.jsx        Logo left, menu right, hover/click dropdowns, mobile drawer
│   ├── Footer.jsx        Auto-generated from the nav data
│   ├── LayerStack.jsx    Home-page signature graphic
│   ├── ScrollToTop.jsx   Resets scroll on route change
│   └── UI.jsx            Section, PageHero, BrandGrid, RuleList, LinkCard, Steps, CTA
├── data/site.js          Nav tree, brand lists, company details
├── pages/                One file per route (14 pages)
├── App.jsx               Route table
└── index.css             Tailwind layers + component classes

server/index.js           Express: static /dist + POST /api/contact + SPA fallback
home.html                 Standalone static preview of the home page (no build needed)
```

---

## Brand lists

Edit in `src/data/site.js`. Currently:

- **Devices:** Lenovo, HP, Dell, Asus, Microsoft, Apple, Samsung, Legrand, Dynabook, MeadBar
- **Networking & security:** Cisco Meraki, Aruba, Juniper, HPE, Fortinet, Sophos
- **Device management:** JAMF, Microsoft Intune, Scalefusion, 42Gears, One Identity, Yubico, Veeam
- **Productivity:** Microsoft 365, Adobe, Autodesk, WPS Office, DocuSign, Bang & Olufsen, SentinelOne

> Two entries came from unclear handwriting: **"MeadBar"** and **"42Gears"** (written
> as "H2 Gear"). Confirm both before launch. To swap the text brand names for real
> logo files, drop SVGs into `public/brands/` and render `<img>` inside `BrandGrid`.

---

## Contact form

`POST /api/contact` validates name + email and appends the enquiry to
`server/enquiries.log`. Replace that `fs.appendFile` call in `server/index.js`
with Nodemailer, a CRM webhook or a database insert when you go live.

## Before launch

- Replace placeholder phone, email, address and CIN in `src/data/site.js`
- Swap brand names for licensed partner logos
- Add real client logos, case studies and testimonials
- Point the form at your mail or CRM provider
