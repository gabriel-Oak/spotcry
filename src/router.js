import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SingIn from './pages/auth/SingIn';

const Router = createAppContainer(
  createSwitchNavigator({
    Auth: {
      screen: SingIn
    }
  })
);

export default Router;
