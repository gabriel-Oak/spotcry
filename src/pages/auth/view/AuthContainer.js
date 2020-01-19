import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import AuthPage from './AuthPage';
import socket from '../../../core/services/auth-api';
import * as actions from '../store/actions';
import { Alert } from 'react-native';

const AuthContainer = props => {
  const {
    relogin,
    unloading,
    setTokens,
    setUser,
    getTokens
  } = props;

  useEffect(() => {
    if (relogin) {
      relog();
    }
  }, [relogin]);

  useEffect(() => {
    getTokens();
  }, []);

  const relog = () => {
    const timeout = setTimeout(() => {
      Alert.alert(
        'Oops!',
        'Parece que estamos com dificuldade de conectar ao nosso serviço, voce pode tentar de novo.',
        [
          { text: 'Ok', onPress: relog }
        ],
        { cancelable: false }
      )
    }, 30000);

    socket.on('connected', () => {
      unloading();
      clearTimeout(timeout);
    });

    socket.on('credentials', ({ tokens, user }) => {
      setTokens(tokens);
      setUser(user);
      socket.close();
    });

    socket.open();
  }

  return (
    <AuthPage
      {...props}
      id={socket.id}
    />
  );
}

const mapStateToProps = ({ auth }) => (
  auth
);

mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
