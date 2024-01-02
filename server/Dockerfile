FROM node:18-alpine

WORKDIR /app

COPY ./app/package*.json .


COPY ./app .
RUN npm install 
RUN npm install -D typescript

CMD ["npm", "start"]
