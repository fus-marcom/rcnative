import React, { Component } from 'react'
import { Icon } from 'native-base'
import DetailTextContainer from '../components/Container/detailTextContainer/DetailTextContainer'

const text = `Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`
const styles = {
  arrowStyle: {
    paddingLeft: 6,
    paddingBottom: 3,
    color: 'white'
  }
}
class AboutDetail extends Component {
  componentDidMount () {
    // do a http reques to get the data to display in the component
  }

  static navigationOptions = ({ navigation }) => ({
    headerTitle: '',
    headerLeft: (
      <Icon
        style={styles.arrowStyle}
        ios="ios-arrow-back-outline"
        android="md-arrow-back"
        onPress={() => navigation.navigate('About')}
      />
    )
  })

  render () {
    return <DetailTextContainer title={'Title'} text={text} />
  }
}

export default AboutDetail
