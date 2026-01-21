#!/usr/bin/env bash
set -e

echo "Running deployment tasks..."

echo "Running composer install..."
composer install \
  --no-dev \
  --no-interaction \
  --prefer-dist \
  --optimize-autoloader \
  --working-dir=/var/www/html

# Link storage
php artisan storage:link --force

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force
