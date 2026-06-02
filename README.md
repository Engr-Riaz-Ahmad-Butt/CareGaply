# CareGaply

CareGaply is a Next.js healthcare marketing and blog website for practices that want to improve value-based care performance, close patient care gaps, and collect contact inquiries.

## Features

- Responsive homepage with service, about, CTA, and contact sections
- Contentful-powered blog listing and blog detail pages
- Rich text rendering for Contentful blog content
- Dynamic SEO metadata for blog posts
- Contact form API using Nodemailer SMTP
- Vercel Analytics integration

## Tech Stack

- Next.js 16
- React 19
- Sass modules
- Contentful
- Nodemailer
- Vercel Analytics

## Environment Variables

Create `.env.local` with:

```env
SMTP_USER=
SMTP_PASS=
SMTP_RECIPIENT=
SMTP_HOST=
CONTENTFUL_SPACE_ID=
CONTENTFUL_ACCESS_TOKEN=
CONTENTFUL_CONTENT_TYPE=
NEXT_PUBLIC_BASE_URL=
```

## Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm run start
```
