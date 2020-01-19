import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthContainer from '../../pages/auth';

const Router = createAppContainer(
  createSwitchNavigator({
    Auth: {
      screen: AuthContainer
    }
  })
);

export default Router;
