import "react-native-gesture-handler"
import React, { useEffect, useState } from 'react'
import { LogBox, StyleSheet } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"

import RootStackScreen from "./navigation/RootStackScreen"

import * as Authentication from "./api/auth"
import * as Database from "./api/db"

LogBox.ignoreAllLogs()

export default function App() {

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});