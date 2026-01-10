#!/usr/bin/env bash

# This runs inside the container on Render
php artisan migrate --force
php artisan storage:link || true




echo "Caching config..."
php artisan config:clear
php artisan config:cache
php artisan route:cache
php artisan view:cache




echo "Starting services..."

exec "$@"