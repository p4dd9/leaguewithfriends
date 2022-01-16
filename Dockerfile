# define nodejs baseimage
FROM node:16-alpine3.11

# expose ports
EXPOSE 4600

# set target image directory
WORKDIR /opt/leaguewithfriends

# add all files to image directory
ADD . /opt/leaguewithfriends

# install dependencies
RUN npm install

# compile
RUN npm run build

# set target image directory
WORKDIR /opt/leaguewithfriends

# start
ENTRYPOINT npm run start