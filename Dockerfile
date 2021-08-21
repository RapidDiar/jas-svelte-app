FROM node:14.15.3-alpine
WORKDIR /src
RUN apk update && apk upgrade
COPY package*.json ./
RUN yarn install
COPY ./ .