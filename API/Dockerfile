FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Bundle app source
COPY . .

RUN ./install_internal.sh

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

EXPOSE 9000
CMD [ "npm", "start" ]