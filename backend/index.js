const Koa = require('koa');
const http = require('http');
const mysql = require('mysql');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const log4js = require('koa-log4')
const path = require('path');
const cors = require('koa2-cors');
const static = require('koa-static');
// const serve = require('koa-static')
// const convert = require('koa-convert');
// const historyApiFallback = require('koa-history-api-fallback');
const apiRouter = require('./router');
const conf = require('./conf.js');

const app = new Koa();
const socket = new Koa();

const staticPath = './public'

app.use(static(
  path.join( __dirname,  staticPath)
))

const server = http.createServer(socket.callback());
const io = require('socket.io')(server);

let roomInfo = {};

io.on('connection', function (socket) {

  let url = socket.request.headers.referer;
  let splited = url.split('/');
  let roomID = splited[splited.length - 1];   // 获取房间ID
  console.log(url, splited, roomID);
  let user = '';

  socket.on('join', function (userName, id) {
    user = userName;
    roomID = id;
    // 将用户昵称加入房间名单中
    if (!roomInfo[roomID]) {
      roomInfo[roomID] = [];
    }
    if (roomInfo[roomID].indexOf(user) === -1) {
      roomInfo[roomID].push(user);
    }
    socket.join(roomID);    // 加入房间
    // 通知房间内人员
    io.to(roomID).emit('sys', user + '加入了房间', roomInfo[roomID]);  
  });

  socket.on('leave', function () {
    socket.emit('disconnect');
  });

  socket.on('addmsg', function (user, ctx) {
    console.log('1111');
    socket.broadcast.emit('msg', user, ctx);
    socket.emit('msg', user, ctx);
  });

  socket.on('disconnect', function () {
    // 从房间名单中移除
    var index = roomInfo[roomID].indexOf(user);
    if (index !== -1) {
      roomInfo[roomID].splice(index, 1);
    }

    socket.leave(roomID);    // 退出房间
    io.to(roomID).emit('sys', user + '退出了房间', roomInfo[roomID]);
  });

  // 接收用户消息,发送相应的房间
  socket.on('message', function (msg) {
    // 验证如果用户不在房间内则不给发送
    if (roomInfo[roomID].indexOf(user) === -1) {  
      return false;
    }
    io.to(roomID).emit('msg', user, msg);
  });

});

app.use(cors({
  origin: 'http://localhost:8080',
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE', 'PUT', 'HEAD', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'authorization-token', 'Accept', 'Accept-Encoding', 'Range', 'chrome-proxy'],
}))
// app.use(convert(historyApiFallback()));
// app.use(serve(__dirname + '/public'))

// logger
require('./models/log.js')  //引入（运行）日志配置文件， 生产日志目录及相应文件
const logger = log4js.getLogger('app') //将当前文件日志命名为 app 
logger.info('--------step into koa-------------')
app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  await next();

  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });


app.listen(conf.port,function(){
  console.log("db success", conf.port);
});
const connection = mysql.createConnection(conf.sql);
connection.connect();

// 首页
const index = router.get('/', ctx => {
  ctx.response.body = 'hello world';
}).routes();


app.use(index);
app.use(bodyParser());
// console.log('test3', apiRouter)
app.use(apiRouter.routes()).use(apiRouter.allowedMethods());

server.listen(3002);
app.listen(3000);