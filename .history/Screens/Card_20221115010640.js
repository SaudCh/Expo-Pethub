import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';


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
                <View style={{ marginLeft: 10 }}>
                    <Text style={{ ...styles.heading }}>1st Babbler</Text>
                    <Text style={{ ...styles.text }}>Abbot's Babbler</Text>
                    <Text style={{ ...styles.text }}>Rs 10,000</Text>
                    <Text style={{ ...styles.text }}>Kathmandu, Nepal</Text>
                    <View style={{ flexDirection: "row", marginTop: 5 }}>
                        <FontAwesome5 name="star" size={20} color="black" />
                        <FontAwesome5 name="star" size={20} color="black" />
                        <FontAwesome5 name="star" size={20} color="black" />
                        <FontAwesome5 name="star" size={20} color="black" />
                        <FontAwesome5 name="star" size={20} color="black" />
                    </View>
                    <Text style={{ ...styles.textSecondary }}>12/12/2022</Text>

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
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10
    },
    text: {
        fontSize: 15,
        marginTop: 5
    },
    textSecondary: {
        fontSize: 15,
        marginTop: 5,
        color: 'grey'
    }



})