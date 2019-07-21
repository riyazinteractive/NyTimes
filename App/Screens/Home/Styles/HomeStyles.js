import { StyleSheet } from 'react-native'

import { Colors, ApplicationStyles } from '../../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    flex: 1
  },
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0
  },
  bgColor: {
    backgroundColor: Colors.primary
  },
  f16: {
    fontSize: 16
  },
  errorView: {
    padding: 20,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  f18: {
    fontSize: 18
  }
})
