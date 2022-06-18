FROM mysql
ENV MYSQL_ROOT_PASSWORD 1234

FROM node:10-slim
WORKDIR ../app
RUN npm install \
    && npx sequelize db:migrate \
    && npx sequelize db:seed:all \
    && npx sequelize db:seed:20220610182216-teste-historicos.js

CMD npm start
