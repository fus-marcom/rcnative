import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

const GenericCard = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        props.funcCallBack(props.link, props.navigate, props)
      }}
    >
      <View style={styles.container}>
        <View style={styles.cardBoard}>
          <Text style={styles.titleCard}>{props.title}</Text>
          <View style={styles.description}>
            <Text style={styles.descriptionCard}>{props.description}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

GenericCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  funcCallBack: PropTypes.func
}
export default GenericCard
