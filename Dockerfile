FROM node:16.16.0-alpine3.15

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "node", "app" ]