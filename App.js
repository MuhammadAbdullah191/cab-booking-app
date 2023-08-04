import React from 'react';
import {SafeAreaView} from 'react-native';
import Login from './src/pages/Login';
import { globalStyles } from './src/assets/styles/global';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.container}> 
      <Login></Login>
    </SafeAreaView>
  );
}

export default App;
