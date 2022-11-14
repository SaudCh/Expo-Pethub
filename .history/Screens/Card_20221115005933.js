import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
    return (
        <View style={{
            ...styles.card,
        }}>
            <Image
                style={{ ...styles.image }}
                source={{ uri: 'https://images.unsplash.com/photo-1610391551119-8b8b2b2b9b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' }}
            />

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
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 10
    }
    

})