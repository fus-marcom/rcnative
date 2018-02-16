import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 160,
    marginLeft: '1rem',
    marginRight: '1rem',
    backgroundColor: 'transparent'
  },
  cardBoard: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    borderLeftWidth: 13,
    borderLeftColor: '$yellow',
    paddingTop: '0.5rem',
    paddingLeft: '0.8rem',
    paddingRight: '0.8rem',
    paddingBottom: '0.8rem',
    marginTop: 6,
    marginBottom: 6
  },
  titleCard: {
    fontSize: 20
  },
  description: {
    marginTop: '0.2rem'
  },
  descriptionCard: {
    fontSize: 15
  }
})

export default styles
