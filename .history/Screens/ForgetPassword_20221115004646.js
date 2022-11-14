import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert, TouchableOpacity } from 'react-native'
import { TextInput, Button } from "react-native-paper"

export default function ForgetPassword() {

    const navigation = useNavigation()

    const [data, setData] = useState({
        email: ''
    })

    return (
        <View style={{ ...styles.body }}>
            <View style={{ ...styles.box }}>
                <View>
                    <TextInput
                        mode="outlined"
                        placeholder="Email"
                        style={{ marginBottom: 10 }}
                        value={data.email}
                        onChangeText={text => setData({ ...data, email: text })}
                    />
                </View>
                <View>
                    <Button mode="contained" onPress={() => navigation.replace('Home')} style={{ marginTop: 10 }} >
                        Reset
                    </Button>

                    <Button onPress={() => navigation.navigate("Signup")} style={{ backgroundColor: 'transparent' }}>
                        <Text style={{ ...styles.bottomText }}>Login Here</Text>
                    </Button>
                </View>
            </View>
        </View >
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#A9CCCF'
    },
    box: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 10,

        backgroundColor: "#fff",
        padding: 20,
        width: 350
    },
    inputText: {
        fontWeight: 'bold'
    },
    bottomText: {
        fontSize: 16
    }
});