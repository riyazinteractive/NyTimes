import { StyleSheet } from 'react-native'

import { Colors, ApplicationStyles } from '../../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container: {
    flex: 1
  },
  bgColor: {
    backgroundColor: Colors.primary
  },
  content: {
    flex: 1,
    backgroundColor: Colors.lightgrey,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f24: {
    fontSize: 24
  },
  f24b: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  f16: {
    fontSize: 16
  }
})
