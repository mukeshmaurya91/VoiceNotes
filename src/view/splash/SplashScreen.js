import { StyleSheet, Text, View } from "react-native";
import React, { Component } from 'react';

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={Styles.container}>
            <Text>Splash Screen</Text>
        </View>
        );
    }
    goToNextScreen(navigation){
        setTimeout(()=>{
            navigation.navigate('Home');
        },2000);
    }

    componentDidMount(){
        goToNextScreen();
    }
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6a51ae',
        alignItems: 'center',
        justifyContent: 'center',
    },
});