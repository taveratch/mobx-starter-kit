FROM node:8.6.0-slim

WORKDIR /app

COPY ./ .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "build-start"]