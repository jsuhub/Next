# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /home/scoheart/docker

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Next.js application for production
RUN npm run build

# Expose the port that Next.js will be running on
EXPOSE 3000

# Set the environment variable to production
ENV NODE_ENV production

# Start the Next.js application
CMD ["npm", "run", "dev"]
