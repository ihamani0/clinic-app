# --- Stage 1: Build Frontend Assets (Vite) ---
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: PHP & Nginx ---
FROM php:8.4-fpm-alpine

# Install System Dependencies & Nginx
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
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo_mysql intl zip exif opcache gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy application code
COPY . .

# Copy built assets from the build-stage (Vite)
COPY --from=build-stage /app/public/build ./public/build

# Install PHP dependencies (production optimized)
RUN composer install --no-dev --optimize-autoloader

# Setup Nginx config
COPY nginx/default.conf /etc/nginx/http.d/default.conf

# --- Stage 1: Build Frontend Assets (Vite) ---
FROM node:20-alpine AS build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: PHP & Nginx ---
FROM php:8.4-fpm-alpine

# Install System Dependencies & Media Tools for Spatie
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
    && docker-php-ext-configure gd --with-freetype --with-jpeg --with-webp \
    && docker-php-ext-install pdo_mysql intl zip exif opcache gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy application code
COPY . .

# Copy built assets from build-stage
COPY --from=build-stage /app/public/build ./public/build



# Setup Entrypoint script
# Copy it, make it executable, and fix Windows line-endings if necessary
COPY script/00-laravel-deploy.sh /usr/local/bin/00-laravel-deploy.sh
RUN chmod +x /usr/local/bin/00-laravel-deploy.sh && sed -i 's/\r$//' /usr/local/bin/00-laravel-deploy.sh



# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Setup Nginx config
COPY nginx/default.conf /etc/nginx/http.d/default.conf

# Permissions for Laravel & Spatie Media
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# Expose HTTP
EXPOSE 80

# Use the script as the entrypoint
ENTRYPOINT ["/usr/local/bin/00-laravel-deploy.sh"]