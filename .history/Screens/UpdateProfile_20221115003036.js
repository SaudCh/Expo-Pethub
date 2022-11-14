import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ alignSelf: 'center', marginTop: 30, width: 150, height: 150, borderRadius: 75, overflow: "hidden" }}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
                    }}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Name: </Text>
                    Tayyab Naseer
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Email: </Text>
                    tayyabnaseer044@gmail.com
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Phone: </Text>
                    +92 123 456 7890
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>City: </Text>
                    Lahore
                </Text>
            </View>

            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 16 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Address: </Text>
                    Defense Phase 2, Lahore
                </Text>
            </View>

            <Button onPress={() => navigation.navigate("UpdateProfile")} mode='contained' style={{ width: 200, alignSelf: 'center', marginTop: 50 }}>
                Update
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
        resizeMode: "cover"
    }

})