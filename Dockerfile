FROM node:10-alpine
WORKDIR /app
COPY . .
CMD node app.js
