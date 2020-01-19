import React from 'react'
import { ActivityIndicator } from 'react-native';
import WebView from 'react-native-webview';

import { Container, LoadingText } from './styles';
import { api } from '../../../core/services/auth-api';

const Auth = ({ loading, id }) => {

  return (
    <Container>
      {
        loading
          ?
          <>
            <LoadingText>Carregando...</LoadingText>            
            <ActivityIndicator size={50} />
          </>
          :
          <WebView
            source={{ uri: `http://${api}/login/${id}` }}
          />
      }
    </Container>
  );
}


export default Auth;
