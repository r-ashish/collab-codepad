############################################################
# Dockerfile to build sandbox for executing user code
# Based on Ubuntu
############################################################

FROM alpine:latest
MAINTAINER ASAD MEMON, OSMAN ALI

# Update the repository sources list
# RUN echo "deb http://archive.ubuntu.com/ubuntu trusty main universe" > /etc/apt/sources.list
RUN apk update
#RUN apk upgrade
#add all the languages/compilers we are supporting.
RUN apk add gcc
RUN apk add g++
RUN apk add php5-cli
# RUN apk add ruby
RUN apk add python
# RUN apk add mono-xsp2 mono-xsp2-base

# RUN apk add mono-vbnc
# RUN apk add golang-go
RUN apk add --update nodejs nodejs-npm
RUN npm config set strict-ssl false

# RUN npm add -g underscore request express jade shelljs passport http sys jquery lodash async mocha moment connect validator restify ejs ws co when helmet wrench brain mustache should backbone forever  debug && export NODE_PATH=/usr/local/lib/node_modules/

# RUN apk add clojure1.4


#prepare for Java download
# RUN apk add python-software-properties
# RUN apk add software-properties-common

#grab oracle java (auto accept licence)
# RUN add-apt-repository ppa:webupd8team/java
# RUN apk update
# RUN echo oracle-java8-installer shared/accepted-oracle-license-v1-1 select true | /usr/bin/debconf-set-selections
# RUN apk add oracle-java8-installer
RUN apk --update add openjdk7

# RUN apk add gobjc
# RUN apk add gnustep-devel &&  sed -i 's/#define BASE_NATIVE_OBJC_EXCEPTIONS     1/#define BASE_NATIVE_OBJC_EXCEPTIONS     0/g' /usr/include/GNUstep/GNUstepBase/GSConfig.h


# RUN apk add scala
# RUN apk add mysql-server
# RUN apk add mysql mysql-client
# RUN apk add perl

RUN apk add curl
# RUN mkdir -p /opt/rust && \
#     curl https://sh.rustup.rs -sSf | HOME=/opt/rust sh -s -- --no-modify-path && \
#     chmod -R 777 /opt/rust

RUN apk add sudo
RUN apk add bc

RUN apk add --update bash && rm -rf /var/cache/apk/*

RUN apk add --no-cache python3
RUN ln -s /usr/lib/jvm/java-1.7-openjdk/bin/javac /usr/bin/javac

# RUN echo "mysql ALL = NOPASSWD: /usr/sbin/service mysql start" | cat >> /etc/sudoers

