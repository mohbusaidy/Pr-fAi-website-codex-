#!/usr/bin/env bash
set -euo pipefail

APP_NAME="prufai-website"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
APP_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$APP_DIR"

command -v git >/dev/null 2>&1 || { echo "git is required"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "npm is required"; exit 1; }
command -v pm2 >/dev/null 2>&1 || { echo "pm2 is required. Install it with: npm install -g pm2"; exit 1; }

git pull --ff-only
npm ci
npm run build

if pm2 describe "$APP_NAME" >/dev/null 2>&1; then
  pm2 reload "$APP_NAME" --update-env
else
  pm2 start deployment/ecosystem.config.js
fi

pm2 save
