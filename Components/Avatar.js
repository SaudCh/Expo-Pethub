import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Avatar() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity TouchableOpacity onPress={() => navigation.navigate("Profile")} style={{
            marginRight: 10
        }} >
            <MaterialIcons name="account-circle" size={24} color={"#2B5262"} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})