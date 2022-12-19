# datastructure
FROM node:16.17.1-alpine
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install
COPY . .
CMD ["npm", "run", "start"]
Build image
docker build -t <tag> .
Run container
docker run --rm -it --name <name> -p 3000:3000 <tag>
Run container (while mapping local files inside container)
docker run --rm -it --name <name> -p 3000:3000 -v $(pwd):/app <tag>
Access Container
docker exec -it <name> sh
See All Images
docker images
See All Containers
docker ps -a
Production Dockerfile
FROM node:16.17.1-alpine as build
WORKDIR /app
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm ci --production
COPY . .
RUN npm run build

FROM nginx:1.22.0-alpine as prod
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
Build image
docker build -t <tag> .
Run container
docker run --rm -it --name <name> -p 3000:80 <tag>
