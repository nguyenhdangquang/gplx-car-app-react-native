import { createStackNavigator } from 'react-navigation';

import Home from '../screens/Home';
import BackgroundChange from '../screens/BackgroundChange';

const stackNavigatorConfig = {
  initialRouteName: 'Home',
  headerMode: 'none'
};

const MainNav = createStackNavigator({
  Home: { screen: Home },
  BackgroundChange: { screen: BackgroundChange },
}, stackNavigatorConfig);

export default MainNav;