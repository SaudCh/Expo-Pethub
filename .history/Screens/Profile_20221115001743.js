import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <View style={{ alignSelf: 'center', width: 150, height: 150, borderRadius: 75, overflow: "hidden" }}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            </View>

            <Button>
                Update Profile
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        alignSelf: 'center',
        marginBottom: 20
    }

})