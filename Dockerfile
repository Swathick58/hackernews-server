FROM node:18

WORKDIR /app

# Copy only package.json and lock files first
COPY package*.json ./

# Install dependencies (this installs @prisma/client)
RUN npm install

# Copy everything else
COPY . .

# ✨ Generate the Prisma client
RUN npx prisma generate

# Expose your app's port
EXPOSE 3000

# Start your app using tsx
CMD ["npx", "tsx", "src/index.ts"]
