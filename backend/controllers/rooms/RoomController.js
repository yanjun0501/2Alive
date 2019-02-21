const { 
  rooms_sql,
  wave_sql,
} = require('../../models/db');

class RoomController {
  async list(ctx, next) {
    let data = null;
    await rooms_sql().then(res => {
      data = res[0];
    })
    ctx.body = {
      status: true,
      data,
    }
  }

  async wave(ctx, next) {
    let data = null;
    let id = ctx.query.id;
    await wave_sql([id]).then(res => {
      data = res[0];
    })
    ctx.body = {
      status: true,
      data,
    }
  }
}

module.exports = new RoomController();
