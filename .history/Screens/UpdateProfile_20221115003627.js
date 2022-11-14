import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

export default function Profile() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, margin: 10 }}>
            <View style={{ alignSelf: 'center', marginTop: 30 }}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
                    }}
                />
                <TouchableOpacity onPress={() => console.log("Pressed")} style={styles.editIcon}>
                    <Text style={{ fontSize: 16 }}>Edit</Text>
                </TouchableOpacity>
            </View>

            <View style={{ marginTop: 20 }}>
                <TextInput
                    label="Name"
                    value="Tayyab Naseer"
                    mode="outlined"
                    style={{ backgroundColor: 'white' }}
                />
            </View>


            <Button onPress={() => navigation.goBack()} mode='contained' style={{ width: 200, alignSelf: 'center', marginTop: 50 }}>
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
        resizeMode: "cover",
        borderWidth: 1,
        borderRadius: 5
    },
    editIcon: {
        width: 150,
        height: 40,
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",

    }

})