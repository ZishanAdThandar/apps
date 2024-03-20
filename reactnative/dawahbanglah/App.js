import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={true} />
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        style={styles.webview} // Apply full screen styles
        source={{ uri: 'https://dawah.gitbook.io/bengali/' }}
        automaticallyAdjustContentInsets={false}
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1, // Take up full screen space
  },
});
