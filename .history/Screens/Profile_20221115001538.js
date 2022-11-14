import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <Image
                style={styles.image}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
            />


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