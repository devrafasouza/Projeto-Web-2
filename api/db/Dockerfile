FROM mysql
ENV MYSQL_ROOT_PASSWORD 1234

FROM node:10-slim
WORKDIR ../app
RUN npm install

CMD npm start
