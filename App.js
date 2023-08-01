import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.wrapper}> 
      <View style={styles.container}>
        <Text> Initial Commit </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper:{
    flex:1
  },
  container:{
    backgroundColor: 'red',
    flex: 1,
    alignItems: 'center' 
  }
})

export default App;
