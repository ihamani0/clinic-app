#!/usr/bin/env bash
set -e # Exit immediately if a command fails

echo "Running deployment tasks..."

# Link storage
php artisan storage:link --force

# Cache everything for production speed
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "Running migrations..."
# This will now work because we added the pdo_pgsql driver!
php artisan migrate --force

echo "Starting PHP-FPM..."
php-fpm -D

echo "Starting Nginx..."
# 'daemon off' is critical - it keeps the container alive
nginx -g 'daemon off;'