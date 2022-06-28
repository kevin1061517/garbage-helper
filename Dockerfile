FROM node:14.18-alpine3.15
WORKDIR /
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]