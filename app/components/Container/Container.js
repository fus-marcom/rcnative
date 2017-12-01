import React from 'react';
import { View } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  greenContainer: {
    backgroundColor: '$primary'
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class Container extends React.Component {
  render() {
    const { children, green, center } = this.props;
    let containerStyles = [styles.container];
    if (green) {
      containerStyles.push(styles.greenContainer);
    }
    if (center) {
      containerStyles.push(styles.center);
    }
    return <View style={containerStyles}>{children}</View>;
  }
}
