class ClassController {
  async allParentType(ctx, next) {
    // 获取请求提交的数据
    ctx.body = {
        status: true,
        token: '123'
    }
  }

  async getChildTypeByParentId(ctx, next) {
    // 获取请求提交的数据
    ctx.body = {
        status: true,
        token: '123'
    }
  }

  async getItemByTypeId(ctx, next) {
    // 获取请求提交的数据
    ctx.body = {
        status: true,
        token: '123'
    }
  }
}

module.exports = new ClassController();
