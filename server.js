const http = require('http');
const app = require('./app');

/*
  СЛУШАТЬ ПОРТ
  РАБОТА С ЗАПРОСАМИ (СЛУШАТЬ/ОТВЕЧАТЬ)
  РАБОТА С БД
*/

const server = http.createServer(app);

const port = process.env.PORT || 3000

server.listen(port, () => {
  console.log(`App started on port ${port}`);
});

/*
  Model: Group
  name:string,
  imagePath:text,
  description:string,
  
*/