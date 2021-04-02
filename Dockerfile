FROM node:12-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=builder /app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

# FROM httpd:alpine
# #WORKDIR /var/www/html
# COPY --from=build /build /var/www/html