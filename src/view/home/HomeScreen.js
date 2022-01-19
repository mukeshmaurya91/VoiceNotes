import React from 'react';
import { StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from "react-native";
import CardView from '../custom/CardView';

const HomeScreen = props => {
    return (
        <SafeAreaView style={styles.fullScreenContainer}>
            <StatusBar backgroundColor="#fff" barStyle='dark-content' />
            <View style={styles.contentContainer}>
                <View style={styles.contentRow}>
                    <View style={styles.common}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate('ExampleApiCall') }}>
                            <CardView style={styles.featureCard1}>
                                <Text style={styles.text}>Simple Fetch</Text>
                            </CardView>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.common,{marginStart:16}]}>
                    <TouchableOpacity
                        onPress={() => { props.navigation.navigate('Login') }}>
                        <CardView style={styles.featureCard2}>
                            <Text style={styles.text}>Login</Text>
                        </CardView>
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.contentRow}>
                    <View style={styles.common}>
                        <TouchableOpacity
                            onPress={() => { props.navigation.navigate('ImageSearch') }}>
                            <CardView style={styles.featureCard1}>
                                <Text style={styles.text}>Image Search</Text>
                            </CardView>
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.common,{marginStart:16}]}>
                    <TouchableOpacity
                        onPress={() => { props.navigation.navigate('FlexBoxExample') }}>
                        <CardView style={styles.featureCard2}>
                            <Text style={styles.text}>Flex Example</Text>
                        </CardView>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex:1,
        padding: 20,
        flexDirection: 'column'
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
    common:{
        width:'49%',
        height: 100
    },
    featureCard1: {
        backgroundColor: '#C6EEBC',
    },
    featureCard2: {
        backgroundColor: '#BCC1EE',
    }
});

export default HomeScreen;