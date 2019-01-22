const Koa = require('koa');
const mysql = require('mysql');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const log4js = require('koa-log4')
const cors = require('koa2-cors');
const serve = require('koa-static')
const convert = require('koa-convert');
const historyApiFallback = require('koa-history-api-fallback');
const apiRouter = require('./router');
const conf = require('./conf.js');

const app = new Koa();

app.use(cors());
app.use(convert(historyApiFallback()));
app.use(serve(__dirname + '/public'))

// logger
require('./log.js')  //引入（运行）日志配置文件， 生产日志目录及相应文件
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
  console.log("db success");
});
// app.use(bodyParser.json())
const connection = mysql.createConnection(conf.sql);
connection.connect();

// 首页
const index = router.get('/', ctx => {
  ctx.response.body = 'hello world';
}).routes();


app.use(index);
app.use(bodyParser());
app.use(apiRouter.routes());

app.listen(3000);