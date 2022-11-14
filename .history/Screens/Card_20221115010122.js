import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card() {
    return (
        <View style={{
            ...styles.card,
        }}>
            <View style={{ flexDirection: "row" }}>
                <Image
                    style={{ ...styles.image }}
                    source={{ uri: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                />
                <View>
                    <Text style={{ ...styles.text }}>John Doe</Text>
                    <Text style={{ ...styles.text }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                </View>
            </View>

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
        width: 150,
        height: 150,
        borderRadius: 10
    }


})