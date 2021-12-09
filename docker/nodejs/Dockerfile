FROM node:16

WORKDIR /usr/app

COPY ./src/package.json ./
RUN mkdir prisma
COPY ./src/prisma ./prisma

RUN yarn && yarn add global nodemon
RUN npm i nodemon prisma -g
RUN yarn prisma generate --schema=./prisma/schema.prisma

EXPOSE 3000
EXPOSE 5555

COPY . .

CMD ["npm", "start"]