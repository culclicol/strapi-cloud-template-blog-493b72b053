
FROM node:20-alpine AS builder
WORKDIR /srv/app

# Install build deps
COPY package*.json ./
RUN npm install

# Copy source and build admin
COPY . .
RUN npm run build

FROM node:20-alpine AS production
WORKDIR /srv/app
ENV NODE_ENV=production

# Install only production deps
COPY package*.json ./
RUN npm install --production

# Copy app files and built admin from builder
COPY --from=builder /srv/app .

EXPOSE 1337

CMD ["npm", "run", "start"]
