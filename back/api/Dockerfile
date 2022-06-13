FROM node:slim

WORKDIR /usr/src/app


RUN npm install -g typescript
RUN npm install -g ts-node

COPY package*.json ./
COPY tsconfig.json ./
COPY prisma ./prisma/
COPY .env ./
RUN npm install --force --quiet
RUN npx prisma generate

COPY src ./
RUN npm run build
COPY . .

EXPOSE 3010
CMD [ "npm", "start" ]