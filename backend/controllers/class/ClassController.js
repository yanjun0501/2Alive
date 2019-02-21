const { 
  classes_sql,
  findClass_sql,
  findItem_sql
} = require('../../models/db');

class ClassController {
  async allParentType(ctx, next) {
    let data = null;
    await classes_sql().then(res => {
      data = res[0];
    })
    ctx.body = {
      status: true,
      data,
    }
  }

  async getChildTypeByParentId(ctx, next) {
    let data = null;
    let id = ctx.query.id;
    await findClass_sql([id]).then(res => {
      data = res[0];
    })
    ctx.body = {
      status: true,
      data,
    }
  }

  async getItemByTypeId(ctx, next) {
    let data = null;
    let id = ctx.query.id;
    await findItem_sql([id]).then(res => {
      data = res[0];
    })
    ctx.body = {
      status: true,
      data,
    }
  }
}

module.exports = new ClassController();
