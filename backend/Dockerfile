FROM node:alpine
WORKDIR /app 
 # change second '.' to '/app'
 COPY . /app  
RUN npm install  
RUN npm install -g nodemon
COPY . .  
CMD ["nodemon","server.js"]
