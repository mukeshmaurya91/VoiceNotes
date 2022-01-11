import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, SafeAreaView, Pressable } from "react-native";
import CardView from '../custom/CardView';


const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={Styles.fullScreenContainer}>
            <StatusBar backgroundColor="#fff" barStyle='dark-content' />
            <View style={Styles.contentContainer}>
                <View style={Styles.contentRow}>
                    <View style={{width:'48%',height: 100}}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate('Example') }}>
                            <CardView style={Styles.featureCard1}>
                                <Text style={Styles.text}>Feature 1</Text>
                            </CardView>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:'48%',height: 100, marginStart:16}}>
                    <Pressable
                        onPress={() => { navigation.navigate('Example') }}>
                        <CardView style={Styles.featureCard2}>
                            <Text style={Styles.text}>Feature 2</Text>
                        </CardView>
                    </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const Styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        padding: 20,
    },
    contentRow: {
        flexDirection: 'row',
        flex: 1,
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
    featureCard1: {
        backgroundColor: '#C6EEBC',
    },
    featureCard2: {
        backgroundColor: '#BCC1EE',
    }
});

export default HomeScreen;