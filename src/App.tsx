import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

function App(): React.JSX.Element {
  return (
    <WebView style={styles.container} source={{uri: 'https://sc.pro-cop.ru/#/'}} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e4dfda',
  },
});

export default App;
