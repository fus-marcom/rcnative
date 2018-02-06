import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
  containerInner: {
    flexDirection: 'row',
    flex: 2,
    backgroundColor: 'white',
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    marginTop: '.1rem',
    marginBottom: '.4rem',
    marginLeft: '.2rem',
    marginRight: '.2rem',
    borderRightWidth: 5.5,
    borderColor: '$primary',
    borderStyle: 'solid'
  },
  capLetter: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primary',
    width: 40,
    height: 50
  },
  capFont: {
    fontSize: 30,
    color: 'white'
  },
  rowContainer: {
    flexDirection: 'column',
    flex: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    height: 50,
    marginLeft: '.3.5rerem'
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black'
  },
  subTitle: {
    fontSize: 11,
    color: '#D3D3D3',
    fontWeight: '300'
  }
})

export default styles
