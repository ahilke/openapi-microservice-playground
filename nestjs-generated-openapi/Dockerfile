FROM node:16-alpine as builder

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build && npm prune --production

FROM node:16-alpine

COPY --from=builder --chown=node:node package*.json .
COPY --from=builder --chown=node:node node_modules/ node_modules/
COPY --from=builder --chown=node:node dist/ dist/

CMD ["node", "dist/main.js"]
