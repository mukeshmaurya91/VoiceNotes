import React,{useState} from 'react'
import { StyleSheet,StatusBar,TextInput,SafeAreaView, Text, View, Button } from 'react-native'

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <SafeAreaView style={styles.fullScreenContainer}>
            <StatusBar backgroundColor="#fff" barStyle='dark-content' />
            <View style={styles.contentContainer}>
                <Text style={styles.loginTitle}>Login</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder='Password'
                />
                <Button
                title='Submit'
                />
            </View>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        flexDirection: 'column'
    },
    loginTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop:30,
        marginBottom:30,
        justifyContent: 'center',
        alignContent:'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        backgroundColor:'#eaeaea',
        borderColor:'#aeaeae',
        borderWidth: 1,
        padding: 10,
        borderRadius:20
    },
})
