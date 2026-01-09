# --- Stage 1: Build the Frontend (React/Vite) ---
FROM node:20-alpine AS frontend-builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# --- Stage 2: Build the Backend (PHP/Nginx) ---
FROM richarvey/nginx-php-fpm:latest

# Set working directory
WORKDIR /var/www/html

# Copy all Laravel files
COPY . .

# Copy the compiled React assets from the frontend-builder stage
COPY --from=frontend-builder /app/public/build ./public/build

# Image Configuration for Render
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1
ENV APP_ENV production
ENV APP_DEBUG false

# Install Composer dependencies
ENV COMPOSER_ALLOW_SUPERUSER 1
RUN composer install --no-dev --optimize-autoloader --ignore-platform-reqs

# Fix permissions for Laravel
RUN chmod -R 775 storage bootstrap/cache

EXPOSE 80