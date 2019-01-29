// controllers/users/UserController.jsconst
const { 
  login_sql,
  user_sql
} = require('../../models/db');

class UserController {
  // 用户登录
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
    // try {
    //   await next()
    //   if (ctx.status === 404) {
    //     console.log(ctx.params, '11111', ctx.query, ctx.querystring, ctx.request.query, ctx.request.querystring)
    //   }
    // } catch (err) {
    //   console.log(err)
    // }
    // console.log('test1', ctx, ctx.request)
    let name = ctx.query.username || ''
    let data = null;
    await user_sql([name]).then(res => {
      data = res[0]
    })
    ctx.body = {
      status: true,
      data,
    }
    // return next();
    console.log('test2', ctx, ctx.request)
  }
}

module.exports = new UserController();
