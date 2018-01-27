import React from 'react'
import { View, Text } from 'react-native'

const capSplitFirstLetter = title => {}

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
