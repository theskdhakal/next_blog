# Use the official Node.js 18 image.
FROM node:18

# Set the working directory to /app in the container.
WORKDIR /app

# Copy package.json and package-lock.json (if present).
COPY package*.json ./

# Install dependencies.
RUN npm install

# Copy all remaining files to the working directory.
COPY . .

# Expose the port the app runs on.
EXPOSE 4000

# Command to run your application.
CMD ["npm", "start"]
