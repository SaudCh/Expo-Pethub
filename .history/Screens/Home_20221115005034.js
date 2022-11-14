import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>

      <TouchableOpacity style={{ ...styles.floatingPoint }}>

      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  floatingPoint: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 20,
    right: 20
  }

})