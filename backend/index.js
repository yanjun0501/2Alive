const Koa = require('koa');
const http = require('http');
const mysql = require('mysql');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const log4js = require('koa-log4')
const cors = require('koa2-cors');
// const serve = require('koa-static')
// const convert = require('koa-convert');
// const historyApiFallback = require('koa-history-api-fallback');
const apiRouter = require('./router');
const conf = require('./conf.js');

const app = new Koa();
const socket = new Koa();
const server = http.createServer(socket.callback());
const io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('a user connected');
});

app.use(cors());
// app.use(convert(historyApiFallback()));
// app.use(serve(__dirname + '/public'))

// logger
require('./models/log.js')  //引入（运行）日志配置文件， 生产日志目录及相应文件
const logger = log4js.getLogger('app') //将当前文件日志命名为 app 
logger.info('--------step into koa-------------')
app.use(log4js.koaLogger(log4js.getLogger('http'), { level: 'auto' }))

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});


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