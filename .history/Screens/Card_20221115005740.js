import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
    return (
        <View style={{
            ...styles.card,
        }}>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    }

})