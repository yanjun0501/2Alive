class RoomController {
  async list(ctx, next) {
    // 获取请求提交的数据
    ctx.body = {
        status: true,
        token: '123'
    }
  }

  async wave(ctx, next) {
    // 获取请求提交的数据
    ctx.body = {
        status: true,
        token: '123'
    }
  }
}

module.exports = new RoomController();
