import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity } from 'react-native';

import { get } from 'lodash';
import styles from './styles';
import { increment, decrement } from '../../actions/count';

class Home extends Component {
  static propTypes = {
    result: PropTypes.object
  }
  increment = () => {
    this.props.increment(1);
  }
  decrement = () => {
    this.props.decrement(1);
  }
  changeBackground = () => {
    this.props.navigation.push('BackgroundChange');
  }
  render() {
    const { result, color } = this.props;
    const colorB = !color ? '#fff' : color;
    return (
      <View style={[styles.container, {backgroundColor: colorB.color}]}>
        <Text style={styles.result}>{result.counter}</Text>
        <View style={styles.arrent}>
          <TouchableOpacity style={styles.btn} onPress={this.increment}>
            <Text>INCREMENT</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.decrement}>
            <Text>DECREMENT</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.footer} onPress={this.changeBackground}> 
            <Text>CHANGE BACKGROUND</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  state => ({
    result: state.count,
    color: state.color
  }),
  dispatch => ({
    dispatch,
    ...bindActionCreators({
    increment,
    decrement
  }, dispatch)
})
)(Home);