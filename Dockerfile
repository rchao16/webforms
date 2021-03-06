FROM node:carbon

#Create app directory

WORKDIR /usr/src/docker-react-sample

# Install app dependencies
# A wildcard is used to ensure both package.json AND
# package-lock.json are copied where available (npm@5+)

COPY package*.json ./

RUN npm install

# Bundle app source

COPY . .

EXPOSE 3000

#Command to run your app using CMD which defines runtime
CMD ["npm", "start"]