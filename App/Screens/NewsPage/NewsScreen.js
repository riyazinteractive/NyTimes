import React, { Component } from 'react'
import { View, ScrollView, Text, Linking } from 'react-native'
import { Appbar, Button, Card, Title, Paragraph } from 'react-native-paper'
import { connect } from 'react-redux'

import styles from './Styles/NewsStyles'
class NewsScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  _goBack = () => {
    this.props.navigation.goBack()
  };

  renderAppHeader () {
    return (
      <Appbar.Header style={styles.bgColor}>
        <Appbar.BackAction onPress={this._goBack} />
        <Appbar.Content title='News' titleStyle={styles.f16} />
      </Appbar.Header>
    )
  }

  openBrowser = url => {
    Linking.canOpenURL(url)
      .then(supported => {
        if (!supported) {
          console.log("Can't handle url: " + url)
        } else {
          return Linking.openURL(url)
        }
      })
      .catch(err => console.error('An error occurred', err))
  };

  render () {
    const {
      title,
      abstract,
      byline,
      source,
      url,
      media
    } = this.props.news
    const images = media[0]['media-metadata']
    const coverimage = images[2].url

    const publishDate = this.props.news.published_date
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          {this.renderAppHeader()}
          <Card style={styles.card}>
            <Card.Cover source={{ uri: coverimage }} />
            <Card.Content>
              <View style={styles.source}>
                <Text style={styles.italic}>
                  source: <Text style={styles.normal}>{source}</Text>
                </Text>
                <Text>{publishDate}</Text>
              </View>
              <View style={styles.pad5}>
                <Text>{byline}</Text>
              </View>
            </Card.Content>
            <Card.Content>
              <Title style={styles.pad10}>{title}</Title>
              <Paragraph style={styles.pad10}>{abstract}</Paragraph>
            </Card.Content>
            <Card.Actions style={{ justifyContent: 'flex-end' }}>
              <Button onPress={() => this.openBrowser(url)}>Read More</Button>
            </Card.Actions>
          </Card>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const { news } = state.app
  return { news }
}

export default connect(
  mapStateToProps,
  null
)(NewsScreen)
