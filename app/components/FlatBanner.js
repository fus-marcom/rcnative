import React from 'react'
import { View, Text } from 'react-native'

const capSplitFirstLetter = title => {
  if (title !== ' ' && title.length >= 1) {
    return title.substring(0, 1).toUpperCase()
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
