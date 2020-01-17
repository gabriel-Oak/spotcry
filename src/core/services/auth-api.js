import io from 'socket.io-client';

export const api = 'ec2-18-231-166-89.sa-east-1.compute.amazonaws.com:3000';

const socket = io(api, {
  autoConnect: false
});

socket.on('connected', () => {
  console.log('Socket conectado');
});

export default socket;