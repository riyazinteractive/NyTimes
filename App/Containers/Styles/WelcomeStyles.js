import { StyleSheet } from 'react-native'

import { verticalScale, scale } from '../../Themes/Scale'
import { Colors, ApplicationStyles } from '../../Themes'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  welcome: {
    paddingHorizontal: scale(60),
    paddingTop: verticalScale(140)
  },
  smallHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
    letterSpacing: 3
  },
  bigHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white
  },
  content: {
    fontSize: 16,
    color: Colors.white
  },
  linkText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    textDecorationLine: 'underline'
  },
  meetDocBtn: {
    paddingVertical: verticalScale(60),
    alignItems: 'flex-start'
  },
  padVer5: {
    paddingVertical: 5
  },
  padVer10: {
    paddingVertical: 10
  },
  booking: {
    padding: verticalScale(60)
  }
})
