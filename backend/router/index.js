// router/index.js
// 加载依赖
const router = require('koa-router')();
const userctrl = require('../controllers/users/UserController');
const mediactrl = require('../controllers/media/MediaController');
const roomctrl = require('../controllers/rooms/RoomController');
// const mesctrl = require('../controllers/message/MessageController');

router
  //user
  .get('/api/user/info', userctrl.info)
  .post('/api/user/login', userctrl.login)
  .post('/api/user/add', userctrl.add)
  .put('/api/user/update', userctrl.update)
  // class
  .get('/api/media/item', mediactrl.getItemByTypeId)
  .get('/api/media/list', mediactrl.list)
  //room
  .get('/api/room/list', roomctrl.list)
  .get('/api/room/find', roomctrl.find)
  .get('/api/room/user', roomctrl.findUser)
  .post('/api/room/add', roomctrl.add)
  .put('/api/room/update', roomctrl.update)
  .delete('/api/room/delete', roomctrl.delete)
  //message
  // .post('/api/message/emit', mesctrl.postMessage)

module.exports = router;
