import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native'
import { TextInput, Center, Button } from "react-native-paper"

export default function Signup() {

    const [data, setData] = useState({
        email: '',
        password: ''
    })

    return (
        <View style={{ ...styles.body }}>
            <View style={{ ...styles.box }}>
                <View>
                    <TextInput
                        mode="outlined"
                        placeholder="Email"
                        value={data.email}
                        onChangeText={text => setData({ ...data, email: text })}
                    />
                </View>
                <View>
                    <TextInput
                        mode="outlined"
                        placeholder="Password"
                        value={data.password}
                        onChangeText={text => setData({ ...data, password: text })}
                        secureTextEntry
                    />
                </View>
                <View>
                    <Center>
                        {isLoading ? (
                            <View style={{ ...styles.activityContainer }}>
                                <ActivityIndicator size="large" color="red" />
                            </View>
                        ) : <Button onPress={() => register()} style={{ backgroundColor: 'transparent' }}>
                            <Text style={{ ...styles.bottomText, color: COLORS.dPink }}>Sign Up</Text>
                        </Button>}

                        <Button onPress={() => navigation.replace('Login')} style={{ backgroundColor: 'transparent' }}>
                            <Text style={{ ...styles.bottomText, color: COLORS.yellow }}>Switch to Login</Text>
                        </Button>
                    </Center>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: COLORS.lPink
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

        backgroundColor: COLORS.white,
        padding: 20,
        width: 300
    },
    inputText: {
        fontWeight: 'bold'
    },
    bottomText: {
        fontSize: 20
    }
});