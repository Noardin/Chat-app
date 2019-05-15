import io from 'socket.io-client'
import {defaultURL} from './config'
export const $socket = io(defaultURL,{
  transports: ['websocket'],
    forceNew:false,
    autoConnect:false,
    reconnect:false,
});