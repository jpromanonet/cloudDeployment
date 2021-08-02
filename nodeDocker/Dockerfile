FROM node

WORKDIR /app

COPY package*.json .
RUN npm install
COPY . .
CMD node index.js

# How to build and run it
## sudo docker build -t app .
## 