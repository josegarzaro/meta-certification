FROM node:20

WORKDIR /app

COPY meta_frontend/package.json meta_frontend/package-lock.json ./
RUN npm install

COPY . .

CMD ["npm", "start"]