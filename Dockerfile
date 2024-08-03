#Pull the node image
FROM node:18-alpine

#Create a work directory in node image
WORKDIR /app

#Copy package.json file to the work directory in node image
COPY package*.json .
#Install all the dependencies in the node image
RUN npm ci

#Copy all the files from the current directory to the work directory in node image
COPY public/ ./public
COPY src/ ./src

#Expose the port 3000
CMD ["npm", "start"]