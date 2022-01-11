import React from 'react';
import { StyleSheet, Text, View, Button, StatusBar, SafeAreaView} from "react-native";


export default function HomeScreen(navigation){
    return (
        <SafeAreaView style={Styles.container}>
        <StatusBar backgroundColor="#fff" barStyle='dark-content'/>
        <View>
            <Text style={Styles.text}>HomeScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
            />
        </View>
        </SafeAreaView>
        );
}

const Styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
    },
    text:{
        color:'red',
        fontSize:32,
        fontWeight:'bold',
    }
});