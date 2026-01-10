# --- Stage 1: Build Frontend Assets (Vite) ---
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: PHP & Nginx + Spatie Media Tools ---
FROM php:8.4-fpm-alpine

# Install System Dependencies, Nginx, and Media Optimization Tools for Spatie
RUN apk add --no-cache \
    nginx \
    bash \
    icu-dev \
    libzip-dev \
    oniguruma-dev \
    zlib-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    freetype-dev \
    libwebp-dev \
    jpegoptim \
    optipng \
    pngquant \
    gifsicle \
    libwebp-tools \
    postgresql-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp 

# Install PHP Extensions using the reliable mlocati helper
# This ensures pdo_pgsql and gd (for Spatie) are perfectly installed
COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/
RUN install-php-extensions pdo_mysql pdo_pgsql pgsql intl zip exif opcache gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# 1. Copy application code first
COPY . .

# 2. Copy built assets from the build-stage (Vite)
COPY --from=build-stage /app/public/build ./public/build

# 3. Setup Entrypoint script
# We copy it from your local 'script' folder to the container's bin
COPY scripts/00-laravel-deploy.sh /usr/local/bin/00-laravel-deploy.sh
RUN chmod +x /usr/local/bin/00-laravel-deploy.sh && sed -i 's/\r$//' /usr/local/bin/00-laravel-deploy.sh

# 4. Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# 5. Setup Nginx config
COPY nginx/default.conf /etc/nginx/http.d/default.conf

# 6. Set Permissions for Laravel & Spatie
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Expose HTTP
EXPOSE 80

# Run the deploy script
ENTRYPOINT ["/usr/local/bin/00-laravel-deploy.sh"]