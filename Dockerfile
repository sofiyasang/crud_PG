FROM node:alpine
COPY . .
RUN npm install
ENV REACT_APP_baseAPIURL=http://localhost:3080
EXPOSE 3000
CMD ["npm","start"]