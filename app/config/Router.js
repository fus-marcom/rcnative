import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';

import SplashScreen from '../screens/Splash';
import HomeScreen from '../screens/Home';

export default StackNavigator({
  Home: {
    screen: SplashScreen,
    navigationOptions: {
      header: () => null,
      headerTitle: 'Home'
    }
  },
  Land: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: { marginTop: Constants.statusBarHeight },
      headerTitle: 'Resource Center',
      headerLeft: null
    }
  }
});
