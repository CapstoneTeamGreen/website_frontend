# The node image that will serve as the base for our website.
FROM node:16

VOLUME frontend

WORKDIR /app

COPY . /app

RUN npm install

# NGINX server that will serve the reactjs files
FROM nginx:latest

COPY . /usr/share/nginx/html

# Delete the default configuration file for NGINX
RUN rm /etc/nginx/nginx.conf /etc/nginx/conf.d/default.conf

#
# Copy nginx directory configuration files to the expected directory
COPY conf /etc/nginx

EXPOSE 80