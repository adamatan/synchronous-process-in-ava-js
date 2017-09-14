FROM node:latest

RUN mkdir -p /usr/src/sandbox
WORKDIR /usr/src/sandbox

COPY package.json .
COPY test.js .
COPY long_process.sh .

RUN npm install 

ENTRYPOINT ["npm", "test"]
