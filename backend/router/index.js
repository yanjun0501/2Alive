// router/index.js
// 加载依赖
const router = require('koa-router')();
const userctrl = require('../controllers/users/UserController');
const classctrl = require('../controllers/class/ClassController');
const roomctrl = require('../controllers/rooms/RoomController');
const mesctrl = require('../controllers/message/MessageController');

router
  //user
  .get('/api/user/info', userctrl.info)
  .post('/api/user/login', userctrl.login)
  // class
  .get('/api/class/list', classctrl.allParentType)
  .get('/api/class/child', classctrl.getChildTypeByParentId)
  .get('/api/class/items', classctrl.getItemByTypeId)
  //room
  .get('/api/room/list', roomctrl.list)
  .get('/api/room/wave', roomctrl.wave)

  .post('/api/message/emit', mesctrl.postMessage)
module.exports = router;
