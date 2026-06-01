# PrüfAI Website

This repository contains the technical foundation for the official PrüfAI website.

The project is intentionally minimal at this stage. It sets up the application architecture, route structure, reusable component folders, and private server deployment examples. The full Figma-based visual design will be implemented later.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- npm
- PM2 for private server process management
- Nginx as an example reverse proxy

## Local Setup

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local site:

```text
http://localhost:3000
```

Run linting:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Start the production server locally:

```bash
npm run start
```

## Folder Structure

```text
app/
  layout.tsx
  page.tsx
  globals.css
  impressum/
  datenschutz/
  kontakt/

components/
  layout/
  sections/
  ui/
  shared/

lib/
  constants.ts
  navigation.ts
  utils.ts

public/
  images/
  icons/
  logos/

deployment/
  ecosystem.config.js
  nginx.conf.example
  deploy.sh

.github/
  workflows/
    ci.yml
```

## Current Pages

- `/`
- `/impressum`
- `/datenschutz`
- `/kontakt`

The homepage imports and renders placeholder section components in the planned order:

1. Hero
2. Problem
3. Solution
4. Features
5. How it works
6. Target groups
7. Demo
8. Pricing
9. CTA
10. FAQ

## Private Server Deployment Notes

This project is not configured for Vercel. It is intended to be deployed by pulling the repository onto a private server, installing dependencies, building the app, and running it with PM2.

The app is configured to run on port `3000` in production.

Example deployment flow:

```bash
cd /path/to/Pr-fAi-website-codex-
./deployment/deploy.sh
```

The deployment script:

- pulls the latest code
- installs dependencies
- builds the application
- restarts the PM2 process

## PM2

The PM2 configuration lives in:

```text
deployment/ecosystem.config.js
```

It runs the Next.js production server with:

```bash
next start -p 3000
```

To start the app manually on a server:

```bash
pm2 start deployment/ecosystem.config.js
```

To restart it:

```bash
pm2 restart prufai-website
```

## Nginx

A sample Nginx reverse proxy config is included at:

```text
deployment/nginx.conf.example
```

It forwards public traffic to:

```text
http://127.0.0.1:3000
```

Update the `server_name` value before using it on a real server.
