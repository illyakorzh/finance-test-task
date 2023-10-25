FROM node:18

WORKDIR /usr/src/app

# add oracle instantclient binaries



# install dependencies and extract binaries`
RUN apt-get update \
  && apt-get clean autoclean \
  && apt-get autoremove -y \
  && rm -rf /var/lib/{apt,dpkg,cache,log}/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm config set strict-ssl false

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production
COPY . .

EXPOSE 4000

CMD [ "npm", "run", "start" ]
