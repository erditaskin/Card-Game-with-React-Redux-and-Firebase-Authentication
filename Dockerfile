FROM node:15.13-alpine
WORKDIR /Card-Game-with-React-Redux-and-Firebase-Authentication
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
CMD ["npm", "start"]