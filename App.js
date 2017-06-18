import React, { Component } from 'react';
import Expo from 'expo';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';

import MainApp from './src/App';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>
);

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      'Ionicons': require('native-base/Fonts/Ionicons.ttf'),
    });

    this.setState({isReady: true});
  }

  render() {
    return this.state.isReady ?
      <View style={styles.container}>
        <MyStatusBar backgroundColor="indigo" barStyle="light-content" />
        <View style={styles.content}>
          <MainApp />
        </View>
      </View> : <Expo.AppLoading />;
  }
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : 25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  content: {
    flex: 1
  },
});
