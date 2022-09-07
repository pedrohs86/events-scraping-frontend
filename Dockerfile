FROM node:alpine as base
ARG type_build=prod
ENV TYPE_ENV=$type_build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration=$type_build

FROM nginx:alpine
COPY --from=base app/dist/events-scraping-frontend /usr/share/nginx/html