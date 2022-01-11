import React from 'react';
import { StyleSheet, Text, View } from "react-native";


export default DetailScreen = ({navigation}) => {

    return (
        <View style={Styles.container}>
            <Text>DetailScreen</Text>
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