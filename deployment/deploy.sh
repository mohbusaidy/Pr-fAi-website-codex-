#!/usr/bin/env bash
set -euo pipefail

APP_NAME="prufai-website"

git pull
npm install
npm run build
pm2 restart "$APP_NAME" || pm2 start deployment/ecosystem.config.js
