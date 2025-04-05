# Use Node base image
FROM node:18

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Copy app source code
COPY . .

# Expose the app port
EXPOSE 3000

# Run the app
CMD ["npx", "tsx", "src/index.ts"]
