FROM node:18

#Create app directory
WORKDIR /usr/src/app

#Look up the rest... 

COPY package*.json ./

RUN npm install


COPY . .

EXPOSE 8080

CMD ["npm", "run", "start"]



