import React from 'react';
import { StyleSheet, Text, View } from "react-native";


const ExampleScreen = () => {

    return (
        <View style={Styles.container}>
            <Text>ExampleScreen</Text>
        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ExampleScreen;