import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';

import { Button } from 'react-native-paper';
import Constants from 'expo-constants';
import { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
function Add() {

    return (
        <>
            <View style={{ alignItems: 'center', marginTop: 70 }}>
                <Text style={{ textDecoration: 'underline', fontWeight: 'bold', fontSize: 20 }}> Upload an Ad Sir.</Text>
            </View>
            <View style={{ marginTop: 50, marginLeft: 40 }}>
                <TextInput
                    placeholder='Give Your Ad -A Title...'
                    style={{ borderWidth: 1, padding: 4, width: 250 }}
                />

            </View>
            <Text style={{ color: 'grey', marginTop: 2, marginLeft: 9, fontSize: 20 }}> ____________ </Text>
            <Text style={{ color: 'grey' }}> It must be simple and short -- max length to be 30 chars </Text>

            <View style={{ marginTop: 40, marginLeft: 40 }}>
                <TextInput
                    placeholder='Bird Specie'
                    style={{ borderWidth: 1, padding: 4, width: 250 }}
                />

            </View>

            <View style={{ marginTop: 40, marginLeft: 40 }}>
                <TextInput
                    placeholder='Description...'
                    style={{ borderWidth: 1, padding: 4, width: 250 }}
                />

            </View>
            <Text style={{ color: 'grey', marginTop: 2, marginLeft: 9, fontSize: 20 }}> ____________ </Text>

            <View style={{ flexDirection: 'row', marginTop: 30, marginLeft: 40 }}>
                <View>
                    <TextInput
                        placeholder='Price (PKR)...'
                        style={{ borderWidth: 1, padding: 4, width: 100 }}
                    />

                    <Text style={{ color: 'grey', fontSize: 12 }}>______ </Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <Button mode='outlined' style={{ borderColor: 'blue', backgroundColor: 'blue' }} uppercase={false} >
                        <Text style={{ color: 'white' }}> Upload Pictures </Text>
                    </Button>
                    <View style={{}}>
                        <Text> Please select recognizable Images. </Text>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20, marginLeft: 40, alignItems: 'space-between' }}>
                <View style={{}}>
                    <TextInput
                        placeholder='Contact Number '
                        style={{ borderWidth: 1, padding: 4, width: 130 }}

                    />
                    <Text style={{ fontSize: 12, color: 'grey' }}> ______ </Text>
                </View>
                <View style={{ marginLeft: 7 }}>
                    <TextInput
                        placeholder='City Name '
                        style={{ borderWidth: 1, padding: 4, width: 100 }}
                    />
                    <Text style={{ fontSize: 12, color: 'grey' }}> ______ </Text>
                </View>
                <View style={{ marginLeft: 5 }}>
                    <TextInput
                        placeholder='Provide Address '
                        style={{ borderWidth: 1, padding: 4, width: 120 }}
                    />
                    <Text style={{ fontSize: 12, color: 'grey' }}> ______ </Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View style={{ borderWidth: 1, marginLeft: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 3 }}>
                    <Picker style={{ width: 135, height: 25, borderWidth: 5, borderColor: 'black' }} >
                        <Picker.Item label='Gender' value='Gender' />
                        <Picker.Item label='Male' value='Male' />
                        <Picker.Item label='Female' value='Female' />

                    </Picker>

                </View>
                <View style={{ marginLeft: 65 }}>
                    <TextInput
                        placeholder='Age (in Months) '
                        style={{ borderWidth: 1, padding: 4, width: 120 }}
                    />
                    <Text style={{ color: 'grey' }}> _________ </Text>
                </View>
            </View>
            <View style={{ marginTop: 50, backgroundColor: 'blue' }}>
                <Button mode='outlined'>
                    <Text style={{ color: 'white' }}> Send </Text>

                </Button>
            </View>
        </>
    )
}

export default App;