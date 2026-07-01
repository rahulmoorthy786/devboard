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

COPY package*.json ./
COPY vite.config.js ./

RUN npm ci

COPY --from=builder /app/dist ./dist

EXPOSE 4173

CMD ["npx","vite","preview","--host","0.0.0.0","--port","4173"]