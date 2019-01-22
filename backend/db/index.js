const mysql = require('mysql');
const config = require('../conf.js')

const pool  = mysql.createPool({
  host     : conf.sql.host,
  user     : conf.sql.user,
  password : conf.sql.password,
  database : conf.sql.database
});

const query = function(sql, values) {
  return new Promise(( resolve, reject ) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

let createTable = function( sql ) {
  return query( sql, [] )
}

// 建表

// 注册用户
const query_sql = function( value ) {
  const _sql = "insert into users set name=?,pass=?,avator=?,moment=?;"
  return query( _sql, value )
}

module.exports = {
	query,
	createTable,
  query_sql
}