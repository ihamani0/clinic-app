#!/usr/bin/env bash

# This runs inside the container on Render
echo "Caching config..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "Running migrations..."
# --force is required because this is production
php artisan migrate --force --seed