// router/index.js
// 加载依赖
const router = require('koa-router')();
const userctrl = require('../controllers/users/UserController');
const classctrl = require('../controllers/classes/ClassController');
const roomctrl = require('../controllers/rooms/RoomController');

router
  //user
  .post('/api/user/login', userctrl.login)
  .get('/api/user/userinfo', userctrl.userInfo)
  //class
  .get('/api/class/list', classctrl.allParentType)
  .get('/api/class/child', classctrl.getChildTypeByParentId)
  .get('/api/class/items', classctrl.getItemByTypeId)
  //room
  .get('/api/room/list', roomctrl.list)
  .get('/api/room/wave', roomctrl.wave)

module.exports = router;
