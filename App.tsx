/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Button, Text, StyleSheet} from 'react-native';

const App = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100));
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={style.root}>
        <Text style={style.text}>{number}</Text>
        <Button
          title="Generate"
          onPress={() => {
            setNumber(Math.floor(Math.random() * 100));
          }}
        />
      </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
  root: {
    height: '100%',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    textAlign: 'center',
    marginBottom: 100,
    fontSize: 100,
  },
});

export default App;
