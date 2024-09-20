import React, {Component} from 'react';
import { BackHandler, Platform } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavigationActions } from "react-navigation";

import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import RootNavigator from './AppNavigation';

export const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');
class App extends Component {
  componentDidMount() {
    this.handleBackAndroid();
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      this.backHandler.remove();
    }

  }

  handleBackAndroid() {
    if (Platform.OS === 'android') {
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
        this.props.dispatch(NavigationActions.back());
        return true;
      });
    }
  }

  render() {
    const { nav, dispatch } = this.props;
    return (
      <AppWithNavigationState state={nav} dispatch={dispatch}/>
    )
  }
}

export default connect(
  state => ({
    nav: state.nav,
  }),
  dispatch => ({
    dispatch,
    ...bindActionCreators({
  }, dispatch)
  })
)(App);