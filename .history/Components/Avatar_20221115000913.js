import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

export default function Avatar() {
    return (
        <TouchableOpacity TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{
            marginRight: 10
        }} >
            <MaterialIcons name="account-circle" size={24} color={"black"} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})