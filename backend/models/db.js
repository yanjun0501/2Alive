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
  return query( _sql, value );
}

const user_sql = function( value ) {
  const _sql = "select * from sut_live_account where username = ?;"
  return query( _sql, value );
}

const role_sql = function( value ) {
  const _sql = "select role from sut_live_role where id = ?;"
  return query( _sql, value );
}

const findItem_sql = function( value ) {
  const _sql = "select * from sut_live_media where item_id = ?;"
  return query( _sql, value );
}

const room_info_name = function( value ) {
  const _sql = "select * from sut_live_room where room_name = ?;"
  return query( _sql, value );
}

const room_user = function( value ) {
  const _sql = "select * from sut_live_room where owner_name = ? and type = ?;"
  return query( _sql, value );
}

const media_sql = function( value ) {
  const _sql = "select * from sut_live_media;"
  return query( _sql, value );
}

const rooms_sql = function( value ) {
  const _sql = "select * from sut_live_room;"
  return query( _sql, value );
}

const add_room = function( value ) {
  const _sql = "insert into sut_live_room(room_name, stream, type, owner_name) values (?, ?, ?, ?);"
  return query( _sql, value );
}

const room_info = function( value ) {
  const _sql = "select * from sut_live_room where id = ?;"
  return query( _sql, value );
}

const update_room = function( value ) {
  const _sql = "update sut_live_room  set room_name = ? where id = ?;"
  return query( _sql, value );
}

const add_user = function( value ) {
  const _sql = "insert into sut_live_account(username, password) values (?, ?);"
  return query( _sql, value );
}

const update_user = function( value ) {
  const _sql = "update sut_live_account  set password = ? where username = ?;"
  return query( _sql, value );
}

const delete_room = function( value ) {
  const _sql = "update sut_live_room set room_status = 2 where id = ?;"
  return query( _sql, value );
}

module.exports = {
	query,
	createTable,
  login_sql,
  user_sql,
  role_sql,
  rooms_sql,
  room_info,
  media_sql,
  findItem_sql,
  room_info_name,
  add_room,
  update_room,
  add_user,
  update_user,
  delete_room,
  room_user,
}