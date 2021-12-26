import React from 'react';
import { StyleSheet, Text, View, Button} from "react-native";


const HomeScreen = ({navigation}) => {

    return (
        <View style={Styles.container}>
            <Text>HomeScreen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detail')}
            />
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

export default HomeScreen;