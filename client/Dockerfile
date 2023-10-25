FROM node:18 as build-deps

WORKDIR /usr/src/app


COPY package*.json ./

RUN npm config set strict-ssl false

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . .

RUN npm run build

FROM nginx
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

