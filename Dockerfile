FROM node:latest

WORKDIR /

RUN npm i -g @angular/cli

COPY entrypoint.sh /

ENTRYPOINT [ "sh","/entrypoint.sh" ]