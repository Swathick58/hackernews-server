FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm installFROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy everything else (including .env if it exists)
COPY . .

# Prisma generate (needed for @prisma/client to work)
RUN npx prisma generate

# Expose the port your app runs on
EXPOSE 3000

# Run your app using tsx
CMD ["npx", "tsx", "src/index.ts"]


COPY .env .env


# Generate Prisma client (important)
RUN npx prisma generate

EXPOSE 3000

# Start the app using tsx
CMD ["npx", "tsx", "src/index.ts"]
