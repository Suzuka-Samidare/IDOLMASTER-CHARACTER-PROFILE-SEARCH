FROM node:10.15-alpine
ADD . /app
WORKDIR /app
RUN npm install -g @angular/cli
#  && ng config -g cli.packageManager yarn
CMD ng serve --host=0.0.0.0