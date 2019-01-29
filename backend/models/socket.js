import IO from 'socket.io';
import conf from '../conf';


const options = {
  // reconnectionDelay: 1000,
};

const io = require('socket.io')(conf.socket, options);
export default io;
