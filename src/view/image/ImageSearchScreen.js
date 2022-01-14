import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image, ActivityIndicator, FlatList } from 'react-native'
import CardView from '../custom/CardView';
import axios from 'axios';

const url = 'https://pixabay.com/api/?key=9140105-4c2e6a4eadeb7f0ace651bc11&image_type=photo'
const ImageSearchScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const doSearch = () => {
        axios.get(url)
            .then((response) => response.data)
            .then((json) => setData(json.hits))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        doSearch();
    }, [])
    console.log("mk>>" + JSON.stringify(data))
    return (
        <SafeAreaView>
            <View style={styles.contentContainer}>
                <CardView style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder='Search'
                        onChangeText={setSearchText}
                    />
                    <Button title='Search' onPress={doSearch} />
                </CardView>
            </View>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <CardView style={styles.cardSpacing}>
                            <Image style={styles.image} source={{ uri: item.largeImageURL }} />
                        </CardView>
                    )}
                />
            )}
        </SafeAreaView>
    )
}

export default ImageSearchScreen;

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#fff',
    },
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    searchInput: {
        padding: 10,
        width: '70%',
        height: 24,
        backgroundColor: '#aeaeae',
        borderRadius: 8,
    },
    submitButton: {

    },
    cardSpacing: {
        marginStart: 12,
        marginEnd: 12,
        marginTop: 8,
        marginBottom: 8
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 12
    },


})
