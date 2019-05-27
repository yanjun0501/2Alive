const { 
  findItem_sql,
  media_sql
} = require('../../models/db');

class ClassController {
  async list(ctx, next) {
    const res = await media_sql();
    ctx.body = {
      code: 200,
      data: res,
    };
  }

  async getItemByTypeId(ctx, next) {
    const id = ctx.query.id || '';
    console.log('test1', id)
    const res = await findItem_sql([id]);
    console.log(res)
    ctx.body = {
      code: 200,
      data: res[0],
    };
  }

}

module.exports = new ClassController();
