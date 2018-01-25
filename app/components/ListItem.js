import React from 'react'
import { Text, TouchableWithoutFeedback, View } from 'react-native'
import { Icon } from 'native-base'

const styles = {
  cell: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
    paddingRight: 0.5,
    paddingLeft: 7,
    paddingBottom: 10
  },
  cellText: {
    marginLeft: 11,
    fontSize: 15
  }
}
const ListItem = props => (
  <TouchableWithoutFeedback onPress={() => props.navigate(props.param)}>
    <View style={styles.cell}>
      <Icon
        ios={props.iosIcon}
        android={props.androidIcon}
        style={{ fontSize: 15 }}
      />
      <Text style={styles.cellText}>{props.title}</Text>
    </View>
  </TouchableWithoutFeedback>
)

export default ListItem
