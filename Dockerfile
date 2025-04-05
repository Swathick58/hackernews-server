FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY .env .env


# Generate Prisma client (important)
RUN npx prisma generate

EXPOSE 3000

# Start the app using tsx
CMD ["npx", "tsx", "src/index.ts"]
