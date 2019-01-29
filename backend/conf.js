const sql = {
  host: 'localhost',       //数据库主机
  user: 'root',       //数据库帐户
  password: '970501',   //数据库密码
  port: '3306',       //数据库端口
  database: 'sut_live_alpha'    //数据库名
};

const port = 3001;
const socket = 3002;

module.exports = {
    sql,
    port,
    socket
};