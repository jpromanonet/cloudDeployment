FROM node:15.4 as build

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
RUN npn run build