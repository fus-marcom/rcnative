import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  body: {
    flexDirection: 'column',
    flex: 2
  },
  image: {
    width: undefined,
    height: undefined,
    flex: 1,
    // resizeMode: 'contain',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  title: {
    color: 'white',
    fontSize: 25
  },
  innerView: {
    backgroundColor: 'transparent'
  }
})

export default styles
