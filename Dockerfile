# Этап сборки
FROM node:alpine as build

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install --production

COPY . .

RUN npm run build

# Этап сборки Nginx
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
