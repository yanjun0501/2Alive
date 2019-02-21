// controllers/users/UserController.jsconst
const { 
  login_sql,
  user_sql
} = require('../../models/db');

class UserController {
  // 用户登录
  /**
   * 
   * @param {Object} ctx 
   * @param {*} next 
   */
  async login(ctx, next) {
    let name = ctx.request.body.username || '',
      pwd = ctx.request.body.password || '';
    let data = null;
    await login_sql([name]).then(res => {
      if (pwd === res[0].password) {
        data = true;
      }
    })
    ctx.body = {
      status: true,
      data,
    }
  }

  // 用户信息
  async info(ctx, next) {
    let name = ctx.query.username || ''
    let data = null;
    await user_sql([name]).then(res => {
      data = res[0]
    })
    ctx.body = {
      status: true,
      data,
    }
  }
}

module.exports = new UserController();
