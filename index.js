import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';

import store from './src/store';
import App from './src/App';
import Master from './app/Master';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () =>  Master);
