# Stage 1  - build stage 

FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . . 

RUN npm run build

# --------------- STAGE 1 COMPLETE -----------

# Stage 2  - runner stage 

FROM node:24-alpine AS runner

WORKDIR /app

RUN npm install -g vite@5 && npm cache clean --force

COPY --from=builder /app/dist ./dist

COPY vite.preview.config.js  ./vite.config.js

EXPOSE 4173

CMD ["vite","preview", "--host", "0.0.0.0", "--port", "4173"]
