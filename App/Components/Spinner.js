import React from 'react'
import { View, Modal } from 'react-native'
import { ActivityIndicator } from 'react-native-paper'
// Styles
import styles from './Styles/SpinnerStyles'
import { Colors } from '../Themes'

const Spinner = ({ visible, size }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType='fade'
      onRequestClose={() => {}}
    >
      <View style={styles.containerStyle}>
        <View style={styles.spinnerStyle}>
          <ActivityIndicator
            animating
            color={Colors.background}
            size={size || 'large'}
          />
        </View>
      </View>
    </Modal>
  )
}

export { Spinner }
