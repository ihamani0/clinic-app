#!/usr/bin/env bash
set -e # Exit immediately if a command fails

echo "Running deployment tasks..."



echo "Running composer install..."

composer global require hirak/prestissimo
composer install --no-dev --working-dir=/var/www/html --optimize-autoloader
 



# Link storage
php artisan storage:link --force

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force


