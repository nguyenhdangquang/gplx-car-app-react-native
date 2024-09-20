import { createStackNavigator } from 'react-navigation';

import MainNav from './routes/mainNav';

const stackNavigatorConfig = {
  headerMode: 'none'
};
const RootNavigator = createStackNavigator({
  MainNav: { screen: MainNav },
}, stackNavigatorConfig);

export default RootNavigator;