import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import AuthPage from './AuthPage';
import socket from '../../../core/services/auth-api';
import * as actions from '../store/actions';

const AuthContainer = props => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.on('connected', () => {
      setLoading(false);
    });

    socket.on('credentials', result => {
      console.log(result);
      socket.close();
    });
    props.auth({});
    socket.open();
  }, []);

  return (
    <AuthPage
      {...props}
      loading={loading}
      id={socket.id}
    />
  );
}

const mapStateToProps = state => (
  state.auth
);

mapDispatchToProps = {
  ...actions
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer);
