import React from 'react'
import { View, Text } from 'react-native'

const capSplitFirstLetter = title => {
  if (title !== ' ' && title.length >= 1) {
    var word
    word = title.substring(0, 1)
    return word.toUpperCase()
  }
}

const FlatBanner = props => (
  <View>
    <Text>{capSplitFirstLetter(props.title)}</Text>
    <View>
      <Text>Flat banner</Text>
      <Text>{props.subtext}</Text>
    </View>
  </View>
)

export default FlatBanner
