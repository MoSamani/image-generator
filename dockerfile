FROM node:22-alpine

#Create a app directory
WORKDIR /app

#Install app dipendencies
COPY package*.json ./

#Run npm install
RUN npm install

#Bundle app source
COPY . .


EXPOSE 8081

CMD ["npm", "start"]