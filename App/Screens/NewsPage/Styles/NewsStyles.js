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
  f16: {
    fontSize: 16
  },
  pad5: {
    paddingTop: 5
  },
  pad10: {
    paddingTop: 10
  },
  card: {
    padding: 10,
    borderRadius: 4
  },
  source: {
    paddingTop: 5,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  italic: {
    fontStyle: 'italic'
  },
  normal: {
    fontStyle: 'normal'
  }
})
