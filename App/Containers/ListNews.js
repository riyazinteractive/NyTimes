import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import { RowNews } from '../Components'

import AppActions from '../Redux/AppRedux'

class ListNews extends Component {
  constructor (props) {
    super(props)
    this.flatListRef = null
    this.state = {}
  }

  onItemSelect = item => {
    // console.log('Item::', item)
    this.props.setNews(item)
    this.props.navigation.navigate('News')
  };

  rowItem (item) {
    return (
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          paddingBottom: 10
        }}
      >
        <RowNews data={item} onPress={() => this.onItemSelect(item)} />
      </View>
    )
  }

  render () {
    const { data } = this.props
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ref={ref => {
            this.flatListRef = ref
          }}
          data={data}
          renderItem={({ item }) => this.rowItem(item)}
          keyExtractor={(item, index) => index + ''}
        />
      </View>
    )
  }
}

// const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => ({
  setNews: item => dispatch(AppActions.setNews(item))
})

export default connect(
  null,
  mapDispatchToProps
)(ListNews)
