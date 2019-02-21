const mysql = require('mysql');
const conf = require('../conf.js')

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

const login_sql = function( value ) {
  const _sql = "select password from sut_live_account where username = ?;"
  return query( _sql, value )
}

const user_sql = function( value ) {
  const _sql = "select * from sut_live_account where username = ?;"
  return query( _sql, value )
}

const classes_sql = function( value ) {
  const _sql = "select * from sut_live_class where type = 'parent';"
  return query( _sql, value )
}

const findClass__sql = function( value ) {
  const _sql = "select * from sut_live_class where type = 'child' and parentId = ?;"
  return query( _sql, value )
}

const findItem_sql = function( value ) {
  const _sql = "select * from sut_live_item where classId = ?;"
  return query( _sql, value )
}

const rooms_sql = function( value ) {
  const _sql = "select * from sut_live_room;"
  return query( _sql, value )
}

const wave_sql = function( value ) {
  const _sql = "select * from sut_live_wave where roomId = ?;"
  return query( _sql, value )
}

const add_room = function( value ) {
  const _sql = "insert into sut_live_room set room_name = ?, user_id = ?;"
  return query( _sql, value )
}

const delete_room = function( value ) {
  const _sql = "delete from sut_live_room where room_id = ?;"
  return query( _sql, value )
}

module.exports = {
	query,
	createTable,
  login_sql,
  user_sql,
  rooms_sql,
  classes_sql,
  add_room,
  delete_room,
}