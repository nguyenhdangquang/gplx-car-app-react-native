import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: 100,
    height: 30
  },
  arrent: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btn: {
    backgroundColor: '#FFA500',
    marginVertical: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    width: 200,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    width: '100%',
    height: 50,
    alignItems: 'flex-end',
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',

  }
});

export default styles;