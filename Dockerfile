FROM node:latest

COPY index.js /index.js
EXPOSE 5000

CMD ["node", "index.js"]

