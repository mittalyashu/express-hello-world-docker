FROM node:20-alpine

WORKDIR /app
COPY . .
RUN npx pnpm i;

EXPOSE 8080
ENTRYPOINT ["node", "./index.js"]
