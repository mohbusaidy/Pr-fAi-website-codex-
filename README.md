# PrüfAI Website

Official website for PrüfAI, an AI-powered exam and certification preparation platform.

This repository is built for local development and private-server deployment. It is not configured for Vercel.

## Requirements

- Node.js `>=20.9.0`
- npm
- PM2 on the production server
- Nginx on the production server
- Git access to this repository

Node.js 22 LTS is recommended for production servers.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- npm
- PM2
- Nginx reverse proxy

## Local Setup

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open:

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

Run the built app locally:

```bash
npm start
```

The production server runs on port `3000`.

## Pages

- `/`
- `/kontakt`
- `/impressum`
- `/datenschutz`

The legal pages currently contain placeholder content and should be finalized before launch in a regulated or commercial setting.

## Project Structure

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
  shared/
  ui/

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

## Private Server Deployment

Clone the repository on the server:

```bash
git clone https://github.com/mohbusaidy/Pr-fAi-website-codex-.git
cd Pr-fAi-website-codex-
```

Install dependencies and build:

```bash
npm ci
npm run build
```

Start with PM2:

```bash
pm2 start deployment/ecosystem.config.js
pm2 save
```

The app listens on:

```text
127.0.0.1:3000
```

## Deploy Script

The deploy helper is:

```bash
./deployment/deploy.sh
```

It:

- changes into the repository root
- pulls the latest code with `git pull --ff-only`
- installs dependencies with `npm ci`
- builds the Next.js app
- starts or reloads the PM2 process
- saves the PM2 process list

Run it from the repository root or from any path:

```bash
/path/to/Pr-fAi-website-codex-/deployment/deploy.sh
```

## PM2

PM2 config:

```text
deployment/ecosystem.config.js
```

The configured process name is:

```text
prufai-website
```

Useful commands:

```bash
pm2 status
pm2 logs prufai-website
pm2 reload prufai-website
pm2 restart prufai-website
```

## Nginx

Example config:

```text
deployment/nginx.conf.example
```

Copy it into your Nginx sites configuration, update `server_name`, then enable and reload Nginx.

Example:

```bash
sudo cp deployment/nginx.conf.example /etc/nginx/sites-available/prufai-website
sudo ln -s /etc/nginx/sites-available/prufai-website /etc/nginx/sites-enabled/prufai-website
sudo nginx -t
sudo systemctl reload nginx
```

The example reverse proxies public traffic to:

```text
http://127.0.0.1:3000
```

For HTTPS, add a certificate with your preferred provider, such as Certbot, after DNS points to the server.

## CI

GitHub Actions runs:

```bash
npm install
npm run lint
npm run build
```

## Notes

- No Figma, API, or deployment secrets are required for this app to run.
- Environment files are ignored by Git.
- The current website is suitable for public preview, but legal copy and final product content should be reviewed before a formal launch.
