FROM node:14
WORKDIR /usr/src/app
COPY ./package*.json ./
COPY ./tsconfig.json ./
COPY ./tsconfig.paths.json ./
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]