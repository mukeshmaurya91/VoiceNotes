import React from 'react';
import { StyleSheet, Text, View } from "react-native";


const SplashScreen = ({navigation}) => {

    return (
        <View style={Styles.container}>
            <Text>Splash Screen</Text>
        </View>
    );
}

function goToNextScreen(navigation){
    navigation.navigate('Home')
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SplashScreen;