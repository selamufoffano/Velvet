# Stage 1: build dell'app
FROM node:20-alpine AS build

WORKDIR /app

# Copia package.json e lock file
COPY package*.json ./

# Installa dipendenze
RUN npm install

# Copia il resto del progetto
COPY . .

# Build produzione
RUN npm run build


# Stage 2: server nginx
FROM nginx:alpine

# Copia i file buildati
COPY --from=build /app/dist /usr/share/nginx/html

# Espone porta 80
EXPOSE 80

# Avvia nginx
CMD ["nginx", "-g", "daemon off;"]