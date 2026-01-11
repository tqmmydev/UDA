# Use Node.js LTS version as base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy the entire project
COPY . .

# Expose the port your server runs on (adjust if needed)
EXPOSE 3000

# Run the server
CMD ["node", "./server/server.mjs"]
