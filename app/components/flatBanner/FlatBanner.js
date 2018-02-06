import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './styles'

const capSplitFirstLetter = title => {
  if (title !== ' ' && title.length >= 1) {
    let letter = title.substring(0, 1).toUpperCase()
    return letter
  }
  // return the parametro if is empty string.
  return title
}

const FlatBanner = props => {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate(props.detailScreen)}
    >
      <View style={styles.containerInner}>
        <View style={styles.capLetter}>
          <Text style={styles.capFont}>{capSplitFirstLetter(props.title)}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.title}>
            {props.title.substring(1, props.title.length)}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default FlatBanner
