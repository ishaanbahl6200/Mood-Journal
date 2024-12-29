import { Text, View, StyleSheet } from 'react-native';
import Home from './views/Home';

export default function Index() {
  return (
    <View style={ styles.container }>
      <Home />
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
