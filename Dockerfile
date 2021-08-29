FROM node:14-alpine

WORKDIR /opt/app

ENV PORT=3117


COPY package*.json ./

RUN npm install --production

# Bundle app source
COPY . .

RUN npm run build

CMD npm start
