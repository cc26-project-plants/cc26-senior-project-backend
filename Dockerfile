FROM node:latest

WORKDIR /app

COPY . .

RUN yarn install

CMD ["yarn", "start:dev"]

EXPOSE 8080
