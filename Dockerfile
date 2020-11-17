FROM node:12

WORKDIR /API

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]