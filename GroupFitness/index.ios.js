/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class GroupFitness extends Component {
  render() {

    const titleConfig = {
      title: 'GROUP FITNESS',
      tintColor: '#ffffff'
    };

    const statusBarConfig = {
      tintColor: '#000000',
      style: 'light-content'
    };

    return (
      <View style={{ flex: 1, }}>
        <NavigationBar style={styles.navbar}
          title={titleConfig}
          statusBar={statusBarConfig} />

        <ScrollableTabView
          style={styles.tabs}
          tabBarUnderlineColor='#cc0814'
          tabBarActiveTextColor='#cc0814'
          tabBarTextStyle={styles.tabbar}
          initialPage={0}
          renderTabBar={() => <ScrollableTabBar />}
          >
          <View style={styles.tabContent} tabLabel='Seg'>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit index.ios.js
              </Text>
              <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
          </View>
          <Text tabLabel='Ter'>favorite</Text>
          <Text tabLabel='Qua'>project</Text>
          <Text tabLabel='Qui'>favorite</Text>
          <Text tabLabel='Sex'>project</Text>
          <Text tabLabel='Sab'>project</Text>
          <Text tabLabel='Dom'>project</Text>
        </ScrollableTabView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#cc0814',
    height: 80,
  },
  tabs: {
    paddingTop: 20,
  },
  tabbar: {
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('GroupFitness', () => GroupFitness);
