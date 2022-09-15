FROM node:16.15.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
FROM nginx:stable-alpine as production-stage

COPY --from=build-stage /app/dist /usr/share/nginx/html
ENTRYPOINT echo "COPY HTML"
COPY --from=build-stage /app/nginx/default.conf /etc/nginx/sites-available/default.conf
ENTRYPOINT echo "COPY CONF"
EXPOSE 80
CMD ["nginx", "-g","daemon off;"]