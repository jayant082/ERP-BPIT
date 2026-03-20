# backend Dockerfile for ERP Student server

# use official node image
FROM node:18-alpine

# create app directory
WORKDIR /usr/src/app

# copy package files
COPY package*.json ./

# install dependencies
RUN npm install --production

# copy remaining source code
COPY . .

# expose port (default from .env)
EXPOSE 5000

# start the server
CMD ["npm", "start"]
