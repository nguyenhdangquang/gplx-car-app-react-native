import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1
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
  arrentBtn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export default styles;