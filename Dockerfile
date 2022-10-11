FROM node:lts-alpine
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY . .


RUN npm install --production --silent && mv node_modules ../
RUN npm run build

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=8080
ENV HOST: '0.0.0.0'
ENV NODE_ENV: 'production'

EXPOSE 8080
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]