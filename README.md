# Service Business Template — ProFlow Plumbing

Production-ready Next.js 14 + Tailwind + TypeScript template for a plumbing/service business. Deploy to Vercel in 2 minutes.

## Quick Deploy

### Option 1: Vercel Dashboard (Recommended)
1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Click **Deploy** — done!

## Local Development

```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/                     
│   ├── layout.tsx          
│   ├── page.tsx            
│   └── globals.css         
├── components/
│   ├── ui/                 
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Container.tsx
│   ├── layout/             
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/           
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── Testimonials.tsx
│       ├── CTA.tsx
│       └── Contact.tsx
└── lib/
    └── utils.ts             
```

## Customization Checklist

- [ ] Update `src/app/layout.tsx` — site title, description, favicon
- [ ] Edit `src/components/sections/Hero.tsx` — headline, subtext, CTA
- [ ] Edit `src/components/sections/Services.tsx` — services, icons, descriptions
- [ ] Edit `src/components/sections/Testimonials.tsx` — real reviews
- [ ] Edit `src/components/sections/Contact.tsx` — address, phone, email, hours
- [ ] Edit `src/components/layout/Footer.tsx` — your name, contact info
- [ ] Update colors in `tailwind.config.ts` (primary brand color)
- [ ] Replace images in `public/` or update Unsplash URLs
- [ ] Add real license number in Footer & CTA

## Learning Targets (Week 2)

1. **Props-driven variants** — `Card` with `variant="service"` pattern
2. **Data-driven UI** — Map over arrays (`services`, `reviews`) instead of hardcoding
3. **Reusing component library** — Zero new UI components needed
4. **Client components** — `"use client"` on interactive sections