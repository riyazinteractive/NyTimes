import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Appbar, Searchbar } from 'react-native-paper'

import Menu, { MenuItem } from 'react-native-material-menu'
import { connect } from 'react-redux'

import AppActions from '../../Redux/AppRedux'

import styles from './Styles/HomeStyles'
import { Spinner } from '../../Components'
import ListNews from '../../Containers/ListNews'

class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this._moremenu = null
    this.state = {
      showSearch: false,
      searchValue: '',
      dataList: null
    }
  }

  componentDidMount () {
    this.props.fetchData(1)
  }

  componentDidUpdate (prevProps) {
    if (prevProps.data !== this.props.data) {
      this.setState({ dataList: this.props.data.results })
    }
  }

  _onSearch = () => {
    this.setState({ showSearch: true })
  };

  _onMore = () => {
    this.showMenu()
  };

  _onMenu = () => {
    this.props.navigation.openDrawer()
  };

  setMenuRef = ref => {
    this._moremenu = ref
  };

  getLatestFeeds = days => {
    this.props.fetchData(days)
    this._moremenu.hide()
  };

  showMenu = () => {
    this._moremenu.show()
  };

  onSearchBlur = () => {
    const { searchValue } = this.state
    if (searchValue === '') {
      const { data } = this.props
      this.setState({
        showSearch: false,
        searchValue: '',
        dataList: data.results
      })
    }
  };

  filterList = val => {
    val = val.toLowerCase()
    const { results } = this.props.data
    const filteredList = results.filter(item => {
      if (
        item.adx_keywords.toLowerCase().indexOf(val) !== -1 ||
        item.title.toLowerCase().indexOf(val) !== -1 ||
        item.published_date.toLowerCase().indexOf(val) !== -1 ||
        item.byline.toLowerCase().indexOf(val) !== -1
      ) {
        return item
      }
    })
    this.setState({
      dataList: filteredList.length > 0 ? filteredList : 'noresult',
      searchValue: val,
      showSearch: !!val
    })
  };

  renderSearchBar () {
    const { searchValue } = this.state
    return (
      <Searchbar
        placeholder='Search'
        onChangeText={query => {
          this.filterList(query)
        }}
        value={searchValue}
        style={styles.bgColor}
        onBlur={this.onSearchBlur}
        autoFocus
      />
    )
  }

  renderAppHeader () {
    return (
      <Appbar.Header style={styles.bgColor}>
        <Appbar.Action icon='menu' onPress={this._onMenu} />
        <Appbar.Content title='NY Times Most Popular' titleStyle={styles.f16} />
        <Appbar.Action icon='search' onPress={this._onSearch} />
        <Appbar.Action icon='more-vert' onPress={this._onMore} />
      </Appbar.Header>
    )
  }

  renderMenu () {
    return (
      <Menu ref={this.setMenuRef} button={<Text></Text>}>
        <MenuItem onPress={() => this.getLatestFeeds(1)}>Today</MenuItem>
        <MenuItem onPress={() => this.getLatestFeeds(7)}>Last 7 days</MenuItem>
        <MenuItem onPress={() => this.getLatestFeeds(30)}>
          Last 30 days
        </MenuItem>
      </Menu>
    )
  }

  displayNoResult () {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text>No Records Found!</Text>
      </View>
    )
  }

  render () {
    const { showSearch, dataList } = this.state
    const { error, navigation } = this.props
    return (
      <ScrollView style={{ flex: 1 }}>
        <Spinner visible={this.props.loading} />
        <View style={styles.container}>
          {showSearch ? this.renderSearchBar() : this.renderAppHeader()}
          <View style={{ alignItems: 'flex-end' }}>{this.renderMenu()}</View>
          {error ? (
            <View style={styles.errorView}>
              <Text style={styles.f18}>{error}</Text>
            </View>
          ) : (
            <View style={{ flex: 1, paddingVertical: 10 }}>
              {dataList ? (
                dataList === 'noresult' ? (
                  this.displayNoResult()
                ) : (
                  <ListNews data={dataList} navigation={navigation} />
                )
              ) : null}
            </View>
          )}
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  const { loading, error, data } = state.app
  return { loading, error, data }
}

const mapDispatchToProps = dispatch => ({
  fetchData: val => dispatch(AppActions.getData(val))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen)
