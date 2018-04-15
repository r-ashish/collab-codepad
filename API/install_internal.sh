#!/bin/sh

###########################
# Docker SETUP
###########################
apt-get update
apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | apt-key add -
apt-key fingerprint 0EBFCD88
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
apt-get update
apt-get install -y docker-ce
ln -sf /usr/bin/docker-ce /usr/local/bin/docker

echo "Docker Setup complete"

###########################
# Start Docker
###########################
chmod 777 DockerTimeout.sh
chmod 777 Payload/script.sh
chmod 777 Payload/javaRunner.sh
chmod 777 UpdateDocker.sh

service docker restart
./UpdateDocker.sh
