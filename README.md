# InsightEdge Website

This is the source code for the InsightEdge website — the one live at [insightedge.org.in](https://insightedge.org.in). This README explains, in plain language, how the project is put together and how to make changes to it.

## What this project is

A modern website built with **Next.js** (a popular React framework) and **Tailwind CSS** (for styling). It's not a page-builder site like Wix or Squarespace — it's real code, which means it's fast, fully customizable, and free to host.

You don't need to know how to code to *understand* this README, but making changes does require editing code (or asking someone — like Claude — to do it for you).

## How the site is hosted

The site is deployed on **Vercel**, a hosting platform built for this kind of project. Every time the code on the `main` branch is updated and deployed, the live site at insightedge.org.in updates automatically within a minute or two.

- Vercel dashboard: [vercel.com](https://vercel.com) (log in with the account that owns the `studio` project)
- No server to maintain, no manual uploads — Vercel builds and hosts everything

## Project structure (the important folders)

```
src/
  app/              → Each folder here is a page on the site
    page.tsx        → Homepage (insightedge.org.in)
    about/           → /about
    services/        → /services
    events/          → /events
    team/             → /team
    faq/              → /faq
    contact/          → /contact
    layout.tsx       → Wraps every page (header, footer, loading screen)

  components/       → Reusable building blocks used across pages
    home/            → Sections used on the homepage
    about/           → Sections used on the About page
    layout/          → Header and Footer
    shared/          → Things reused everywhere (e.g. the page banner/hero)
    ui/              → Small generic pieces (buttons, cards, loading screen)

  lib/
    data.ts                 → Team members, services, testimonials, nav links — most of the site's text content lives here
    placeholder-images.ts   → Where every image's file path is defined

public/              → All images, photos, and static files used on the site
```

**If you want to change text** (a bio, a service description, a FAQ answer), it's almost always in `src/lib/data.ts`.

**If you want to swap a photo**, drop the new image file into the `public/` folder, then update its path in `src/lib/placeholder-images.ts`.

## Running the site on your own computer

You'll need [Node.js](https://nodejs.org) installed (version 18 or newer).

1. Open a terminal in this project folder
2. Install dependencies (only needed once, or after packages change):
   ```
   npm install
   ```
3. Start the local preview server:
   ```
   npm run dev
   ```
4. Open [http://localhost:9002](http://localhost:9002) in your browser — this is a live preview that updates instantly as code changes

This local version is just for previewing — it does **not** affect the live site until you deploy.

## Making the live site update (deploying)

The site deploys via the Vercel CLI, not automatically from GitHub pushes. From the project folder:

```
npx vercel --prod
```

This builds the project and publishes it straight to insightedge.org.in. (If it's your first time, it'll ask you to log in to Vercel and confirm the project link.)

## No secret keys required

This project doesn't need any API keys or passwords to run or build — it's a fully static/content-driven site. (There are a couple of unused AI-related files left over from the project's starting template — they're not connected to anything on the live site and can be ignored.)

## Getting help

If you want changes made and don't want to touch code yourself, the easiest route is to describe what you want changed (in plain English, screenshots welcome) to whoever is helping maintain the site — including via Claude Code, which was used to build and maintain most of this site.
