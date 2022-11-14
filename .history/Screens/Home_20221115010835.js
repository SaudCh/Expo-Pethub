import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Card from './Card';

export default function Home() {
  const navigation = useNavigation()

  return (
    <View style={{ flex: 1 }}>
      <Card />

      <TouchableOpacity onPress={() => navigation.navigate("Add")} style={{ ...styles.floatingPoint }}>
        <Ionicons name="add" size={50} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  floatingPoint: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#2B5262',
    position: 'absolute',
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
  }

})