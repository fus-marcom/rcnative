import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  body: {
    flexDirection: 'column',
    flex: 2,
    marginLeft: '0.4rem',
    marginRight: '.4rem'
  },
  image: {
    width: 220,
    height: 80
  },
  title: {
    fontSize: 30
  },
  titleContainer: {
    marginLeft: '0.4rem',
    marginRight: '.4rem',
    marginTop: '1rem',
    marginBottom: '1.5rem',
    /* borderBottomColor: 'black',
        borderBottomWidth: '0.1rem', */
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    fontSize: 16,
    color: 'black',
    textAlign: 'justify',
    lineHeight: '1.6rem',
    marginLeft: '0.4rem',
    marginRight: '.4rem'
  }
})

export default styles
