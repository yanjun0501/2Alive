// controllers/users/UserController.jsconst
const { 
  login_sql,
  user_sql,
  add_user,
  role_sql,
  update_user
} = require('../../models/db');

class UserController {
  async login(ctx, next) {
    const name = ctx.request.body.username || '';
    const pwd = ctx.request.body.password || '';
    const res = await login_sql([name]);
    if (pwd === res[0].password) {
      const userInfo = await user_sql([name]);
      const childRes = await role_sql([userInfo[0].role_id]);
      ctx.body = {
        code: 200,
        data: {
          ...userInfo[0],
          role: childRes[0].role,
        },
      };
    } else {
      ctx.body = {
        status: false,
      };
    }
  }

  // 用户信息
  async info(ctx, next) {
    const name = ctx.query.username || '';
    const res = await user_sql([name]);
    const childres = await role_sql([res[0].role_id]);
    ctx.body = {
      code: 200,
      data: {
        ...res[0],
        role: childres[0].role,
      },
    };
  }

  async update(ctx, next) {
    const name = ctx.request.body.username || '';
    const pwd = ctx.request.body.password || '';
    await update_user([pwd, name]);
    const res = await user_sql([name]);
    const childres = await role_sql([res[0].role_id]);
    ctx.body = {
      code: 200,
      data: {
        ...res[0],
        role: childres[0].role,
      },
    };
  }

  async add(ctx, next) {
    const name = ctx.request.body.username || '';
    const pwd = ctx.request.body.password || '';
    await add_user([name, pwd])
    const res = await user_sql([name]);
    const childres = await role_sql([res[0].role_id]);
    ctx.body = {
      code: 200,
      data: {
        ...res[0],
        role: childres[0].role,
      },
    };
  }
}

module.exports = new UserController();
