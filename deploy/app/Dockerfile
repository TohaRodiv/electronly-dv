FROM node:16.13.0-alpine3.11

# Папка приложения
ARG APP_DIR=/usr/app
# RUN mkdir -p ${APP_DIR}
WORKDIR ${APP_DIR}

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Копирование файлов проекта
COPY . .

RUN npm run build

# Запуск проекта
CMD npm run start