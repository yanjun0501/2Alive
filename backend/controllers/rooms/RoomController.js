const { 
  rooms_sql,
  add_room,
  room_info_name,
  delete_room,
  update_room,
  room_info,
  room_user,
} = require('../../models/db');

class RoomController {
  async list(ctx, next) {
    const res = await rooms_sql();
    ctx.body = {
      code: 200,
      data: res,
    };
  }

  async find(ctx, next) {
    const id = ctx.query.id || '';
    const res = await room_info([id]);
    ctx.body = {
      code: 200,
      data: res[0],
    };
  }

  async findUser(ctx, next) {
    const user = ctx.query.user || '';
    const type = ctx.query.type || '';
    const res = await room_user([user, type]);
    ctx.body = {
      code: 200,
      data: res[0],
    };
  }

  async add(ctx, next) {
    const name = ctx.request.body.name || '';
    const stream = ctx.request.body.stream || '';
    const type = ctx.request.body.type || '';
    const owner = ctx.request.body.owner || '';
    await add_room([name, stream, type, owner]);
    const res = await room_info_name([name]);
    ctx.body = {
      code: 200,
      data: res[0],
    };
  }

  async update(ctx, next) {
    const name = ctx.request.body.name || '';
    const stream = ctx.request.body.stream || '';
    const id = ctx.request.body.id || '';
    await update_room([name, id]);
    const res = await room_info([id]);
    ctx.body = {
      code: 200,
      data: res[0],
    };
  }

  async delete(ctx, next) {
    const id = ctx.request.body.id || '';
    await delete_room([id]);
    const res = await room_info([id]);
    ctx.body = {
      code: 200,
      data: res[0],
    };
  }
}
module.exports = new RoomController();
