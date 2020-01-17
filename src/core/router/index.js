import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AuthContainer from '../../views/auth';

const Router = createAppContainer(
  createSwitchNavigator({
    Auth: {
      screen: AuthContainer
    }
  })
);

export default Router;
