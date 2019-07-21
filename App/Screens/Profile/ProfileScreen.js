import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Appbar } from 'react-native-paper'

import styles from './Styles/ProfileStyles'

class ProfileScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  _goBack = () => {
    this.props.navigation.goBack()
  };

  render () {
    return (
      <View style={styles.container}>
        <Appbar.Header style={styles.bgColor}>
          <Appbar.BackAction onPress={this._goBack} />
          <Appbar.Content title='Profile' titleStyle={styles.f16} />
        </Appbar.Header>
        <View style={styles.content}>
          <Text style={styles.f24}>
            Developed by: <Text style={styles.f24b}>Riyaz</Text>
          </Text>
        </View>
      </View>
    )
  }
}

export default ProfileScreen
