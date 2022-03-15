FROM node:latest

WORKDIR /messenger

COPY package*.json ./

COPY . .

RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["node", "server.js"]
