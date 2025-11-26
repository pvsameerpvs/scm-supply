# SCM Supply FZCO – Next.js Website

Tech stack:

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lightweight shadcn-style UI components (Button, Card, Badge)
- Node.js engine: >= 22.21.1 (see `.nvmrc`)

## Main Pages

- `/` – Home (hero, logistics, industries, featured products)
- `/about` – About SCM Supply FZCO
- `/brands` – Brands & catalog sourcing (Grainger, McMaster-Carr, Uline, etc.)
- `/products` – Product category listing
- `/products/[slug]` – Dynamic product pages (each with slug, 3 images & detailed range bullets)
- `/contact` – Contact details for UAE & USA offices

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

Product data and slugs are defined in `data/products.ts`.  
Brand info is in `data/brands.ts`.  
Update images under `/public/images/products/...` as needed.
