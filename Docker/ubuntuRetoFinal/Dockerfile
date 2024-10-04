FROM ubuntu:latest
LABEL maintainer="jovirodriguezgya@gmail.com"
RUN apt-get -y update && apt-get -y upgrade && apt-get install -y curl && apt-get install -y iputils-ping && apt-get install -y telnet
CMD ["tail", "-f", "/dev/null"]