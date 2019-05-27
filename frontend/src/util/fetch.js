import socket from '../socket';

export default function fetch(event, data = {}, {
  toast = true,
} = {}) {
  return new Promise((resolve) => {
    socket.emit(event, data, (res) => {
      if (typeof res === 'string') {
        if (toast) {
          // console.log(res);
        }
        resolve([res, null]);
      } else {
        resolve([null, res]);
      }
    });
  });
}
