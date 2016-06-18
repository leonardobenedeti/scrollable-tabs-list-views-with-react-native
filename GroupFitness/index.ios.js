/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import NavigationBar from 'react-native-navbar';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class GroupFitness extends Component {
  render() {

    const titleConfig = {
      title: 'Group Fitness',
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

        <View style={styles.container}>
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

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navbar: {
    backgroundColor: '#cc0814',
    height: 80,
  },
});

AppRegistry.registerComponent('GroupFitness', () => GroupFitness);
