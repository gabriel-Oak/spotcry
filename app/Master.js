import React, { PureComponent } from 'react'
import { View } from 'react-native';
import WebView from 'react-native-webview';

import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
import Form from './form';

const socket = io.connect('http://192.168.0.101:3000');
socket.on('connected', () => {
  // socket.emit('login', 'zzzz');
});


class Master extends PureComponent {

  render() {
    console.log(socket);
    
    if (socket.id) {
      return (
        <WebView
          source={{ uri: `http://192.168.0.101:3000/login/${socket.id}`}}
        />
      )
    }
    return (
      <SocketProvider socket={socket}>
        <Form />
      </SocketProvider>
    )
  }
}

export default Master;
