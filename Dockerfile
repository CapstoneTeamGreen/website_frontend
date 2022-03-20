# The node image that will serve as the base for our website.
FROM node:16

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

# Should we do cleanup now?

FROM httpd:latest

# remove node_modules

WORKDIR /app

COPY /build /usr/local/apache2/htdocs/

