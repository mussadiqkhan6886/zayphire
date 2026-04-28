# Zayphire — Men's Fabric E-Commerce Store

> Premium unstitched men's fabric brand, live in production. The first project delivered under the **[Scrupulous](https://scrupulous.vercel.app)** agency.

🌐 **Live Site:** [zayphire.store](https://www.zayphire.store)

---

## What Was Built

A full e-commerce experience for a premium Pakistani fabric brand — from a customer-facing storefront with filtering, cart, and checkout to a complete admin dashboard for day-to-day business management. The site is integrated with Meta Pixel for ad tracking and connected across Facebook, Instagram, TikTok, and WhatsApp.

---

## Customer Experience

**Shopping**
- Browse 23+ premium unstitched fabric products across summer and winter collections
- Filter by material type and price range for quick product discovery
- Multi-image product cards with hover-switch preview
- Cart system with quantity management and order placement
- WhatsApp direct contact button for quick customer queries

**Accounts & Communication**
- User signup and login with secure authentication via `next-auth`
- Email notifications powered by Nodemailer and EmailJS
- Customer review submission on products
- Newsletter / trend updates subscription

**Marketing & Analytics**
- Meta Pixel integrated for Facebook and Instagram ad conversion tracking
- Social media links across Facebook, Instagram, TikTok, and WhatsApp
- SEO-optimised pages with proper meta per collection and product

---

## Admin Dashboard

| Module | What It Does |
|---|---|
| Products | Full CRUD — add, edit, delete fabric listings with multi-image upload |
| Orders | View and manage all customer orders |
| Reviews | Approve or remove customer reviews |

Image uploads are compressed client-side before being stored on Cloudinary CDN.

---

## Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| **Next.js 16** | App Router, SSR & SSG |
| **React 19 + TypeScript** | Type-safe component architecture |
| **Tailwind CSS v4** | Utility-first styling |
| **Framer Motion** | Page and UI animations |
| **Swiper.js** | Product image carousels |
| **MUI v7 + Data Grid** | Admin dashboard tables and UI |
| **Lucide React + Heroicons + React Icons** | Icon libraries |
| **react-hot-toast** | Toast notifications |

### Backend (Next.js API Routes)
| Technology | Purpose |
|---|---|
| **MongoDB + Mongoose** | Products, orders, users, reviews |
| **next-auth** | User authentication and session management |
| **JWT + bcryptjs** | Secure token and password handling |
| **Nodemailer + EmailJS** | Order confirmation and contact emails |
| **Cloudinary + next-cloudinary** | Image storage and CDN delivery |
| **browser-image-compression** | Client-side compression before upload |
| **Multer** | Multipart form / file upload handling |
| **Axios** | HTTP client for API calls |

---

## 👨‍💻 Built By

Designed & developed by **[Mussadiq Khan](https://github.com/mussadiqkhan6886)** — **[Scrupulous](https://scrupulous.vercel.app)** Agency.

> *Shared for portfolio purposes with client permission. Environment variables and sensitive configuration are excluded.*

---

**Business:** Zayphire · **Location:** Pakistan · **Specialty:** Premium unstitched men's fabrics
