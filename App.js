import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {  Text, View, SafeAreaView } from 'react-native';
import HomeScreen from './src/screens/homeScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
}


