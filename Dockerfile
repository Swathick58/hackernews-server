FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
COPY .env .env

RUN npx prisma generate

EXPOSE 3000

CMD ["npx", "tsx", "src/index.ts"]
