import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Profile() {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ alignSelf: 'center', marginTop: 50, width: 150, height: 150, borderRadius: 75, overflow: "hidden" }}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
                    }}
                />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ alignSelf: 'center', fontSize: 20 }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Name: John Doe</Text>

                </Text>
            </View>


            <Button>
                Update Profile
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