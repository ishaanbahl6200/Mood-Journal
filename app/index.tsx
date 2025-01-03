import { useState, useEffect } from 'react';
import {View, StyleSheet } from 'react-native';
import Home from './views/Home';
import Tracker from './views/Tracker';
import NavigationProvider from './contexts/NavigationContext';
import App from './views/App';


export default function Index() {
  return (
    <View style={ styles.container }>
      <NavigationProvider>
        <App />
     </NavigationProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: '#fff',
  },
});
