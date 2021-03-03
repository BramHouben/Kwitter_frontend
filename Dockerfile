FROM node:12.18-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . ./
EXPOSE 3000
CMD ["npm", "build"]


FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html
CMD ["nginx","-g","daemon off;"]