// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import Profile from '../Screens/Profile';
import UpdateProfile from '../Screens/UpdateProfile';
import Avatar from './Avatar';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
    );
}

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{
                    title: 'Login',
                    headerTintColor: "#2B5262",
                    headerTitleAlign: 'center'
                }} />

                <Stack.Screen name="Signup" component={Signup} options={{
                    title: 'Signup',
                    headerTintColor: "#2B5262",
                    headerTitleAlign: 'center'
                }} />

                <Stack.Screen name="Home" component={Home}
                    options={{
                        title: 'Home',
                        headerTintColor: "#2B5262",
                        headerTitleAlign: 'center',
                        headerRight: () => (
                            <Avatar />
                        )
                    }}
                />

                <Stack.Screen name="Profile" component={Profile} options={{
                    title: 'Home',
                    headerTintColor: "#2B5262",
                    headerTitleAlign: 'center',
                    headerRight: () => (
                        <Avatar />
                    )
                }} />
                <Stack.Screen name="UpdateProfile" component={UpdateProfile} options={{
                    title: 'Home',
                    headerTintColor: "#2B5262",
                    headerTitleAlign: 'center',
                }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;