FROM alpine
LABEL maintainer="jovirodriguezgya@gmail.com"
RUN apk update
RUN apk upgrade
RUN apk add --no-cache curl
RUN apk add --no-cache iputils
RUN apk add --no-cache busybox-extras
CMD ["tail", "-f", "/dev/null"]