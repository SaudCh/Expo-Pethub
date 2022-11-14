import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>

      <TouchableOpacity style={{ ...styles.floatingPoint }}>
        <Ionicons name="add" size={60} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  floatingPoint: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#A9CCCF',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }

})