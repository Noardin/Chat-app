import io from 'socket.io-client'
export const $socket = io('https://chatapp-backendapi.herokuapp.com/',{
  transports: ['websocket'],
    forceNew:false,
    autoConnect:false,
    reconnect:false,
});