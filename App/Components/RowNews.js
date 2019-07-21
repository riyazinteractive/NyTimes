import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Avatar, IconButton, Button } from 'react-native-paper'
// Styles
import styles from './Styles/RowNewsStyles'
const RowNews = ({ onPress, data }) => {
  const { media } = data
  const images = media[0]['media-metadata']
  const thumbnail = images[0].url
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.pad10}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ justifyContent: 'center' }}>
            <Avatar.Image size={80} source={{ uri: thumbnail }} />
          </View>
          <View style={styles.titleView}>
            <View style={{ flex: 1 }}>
              <Text numberOfLines={2} style={styles.f16}>
                {data.title}
              </Text>
            </View>
            <View style={{ paddingVertical: 10 }}>
              <Text style={styles.subText}>{data.byline}</Text>
            </View>
            <View
              style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Button icon='perm-contact-calendar' disabled>
                {data.published_date}
              </Button>
            </View>
          </View>
          <View style={{ justifyContent: 'center' }}>
            <IconButton icon='keyboard-arrow-right' size={20} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export { RowNews }
