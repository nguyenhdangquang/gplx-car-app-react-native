import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { color } from '../../actions/color';
import styles from './styles';

class BackgroundChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
        colors: [
          {name: 'RED', hexCode: '#DE5448'},
          {name: 'GREEN', hexCode: '#17A05E' },
          {name: 'BLUE', hexCode: '#498AF4' },
        ]
    }
  };

  onSelectColor = (hexCode) => {
    console.log(this.props.navigation)
    this.props.color(hexCode);
    this.props.navigation.goBack();
  }
	
  render() {
    console.log('this.props::: ', this.props);
    const { colors } = this.state;
    const renderButton = colors.map((color) => 
        <TouchableOpacity style={styles.btn} onPress={()=>this.onSelectColor(color.hexCode)} key={color.name}>
          <Text>
            {color.name}
          </Text>
        </TouchableOpacity>
    )
    return (
      <View style={styles.container}>
         <View style={styles.arrentBtn}>
            {renderButton}
         </View>
      </View>
    )
  }
}

export default connect(
  state => ({
   
  }),
  dispatch => ({
    dispatch,
    ...bindActionCreators({
    color
  }, dispatch)
})
)(BackgroundChange);