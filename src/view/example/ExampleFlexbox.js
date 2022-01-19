import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const ExampleFlexbox = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.firstRow}>
                    <Text style={[styles.commonStyle, styles.box1]}>Box 1</Text>
                    <Text style={[styles.commonStyle, styles.box2]}>Box 2</Text>
                    <Text style={[styles.commonStyle, styles.box3]}>Box 3</Text>
                </View>
                <Text style={[styles.commonStyle, styles.box4]}>Box 4</Text>
                <Text style={[styles.commonStyle, styles.box5]}>Box 5</Text>
                <View style={styles.lastRow}>
                    <Text style={[styles.commonStyle, styles.box6]}>Box 6</Text>
                    <Text style={[styles.commonStyle, styles.box7]}>Box 7</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default ExampleFlexbox

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    commonStyle: {
        height: 72,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    firstRow: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    box1: {
        flex: 1,
        backgroundColor: '#673AB7',
        color: 'white',
    },
    box2: {
        flex: 2,
        backgroundColor: '#CDDC39',
    },
    box3: {
        flex: 3,
        backgroundColor: '#3F51B5',
        color: 'white'
    },
    box4: {
        flex: 1,
        backgroundColor: '#454545',
        color: 'white'
    },
    box5: {
        flex: 1,
        backgroundColor: '#FFEB3B',
        color: 'black',
    },
    box6: {
        flex: 1,
        backgroundColor: '#00BCD4',
        height: null,
        color: 'white',
    },
    box7: {
        flex:1,
        backgroundColor: '#9C27B0',
        height: null,
        color: 'white',
    },
    lastRow: {
        flex: 1,
        height:'100%',
        flexDirection: 'row',
    },
});
