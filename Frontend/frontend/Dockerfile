FROM node:16.15.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html

COPY --from=build-stage /app/nginx/deploy.conf /etc/nginx/sites-available/default.conf
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]