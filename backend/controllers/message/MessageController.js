class MessageController {
  async postMessage(ctx, next) {
    // 获取请求提交的数据
    ctx.body = {
        status: true,
        token: '123'
    }
  }

  async historyMessage(ctx, next) {
    // 获取请求提交的数据
    ctx.body = {
        status: true,
        token: '123'
    }
  }
}

module.exports = new MessageController();
