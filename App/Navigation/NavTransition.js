import { Animated, Easing } from 'react-native'

const transitionRight = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { position, layout, scene } = sceneProps

      const thisSceneIndex = scene.index
      // const height = layout.initHeight
      const width = layout.initWidth
      // console.log('thisSceneIndex::',thisSceneIndex,'height::',height,'width::',width)
      // We can access our navigation params on the scene's 'route' property
      // var thisSceneParams = scene.route.params || {}

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
        outputRange: [width, 0, 0]
      })

      // const translateY = position.interpolate({
      //   inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      //   outputRange: [height, 0, 0]
      // })

      // const opacity = position.interpolate({
      //   inputRange: [thisSceneIndex - 1, thisSceneIndex - 0.5, thisSceneIndex],
      //   outputRange: [0, 1, 1]
      // })

      // const scale = position.interpolate({
      //   inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
      //   outputRange: [4, 1, 1]
      // })

      const slideFromRight = { transform: [{ translateX }] }
      // const scaleWithOpacity = { opacity, transform: [{ scaleX: scale }, { scaleY: scale }] }
      // const slideInFromBottom = { transform: [{ translateY }] }

      return slideFromRight
    }
  }
}
export { transitionRight }
