import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width]

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 768
const guidelineBaseHeight = 1334

const scale = size => parseInt((shortDimension / guidelineBaseWidth) * size)
const verticalScale = size =>
  parseInt((longDimension / guidelineBaseHeight) * size)
const moderateScale = (size, factor = 0.5) =>
  parseInt(size + (scale(size) - size) * factor)

export { scale, verticalScale, moderateScale }
