import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View, Image, ActivityIndicator, FlatList } from 'react-native'
import CardView from '../custom/CardView';
import axios from 'axios';

var url = 'https://pixabay.com/api/?key=9140105-4c2e6a4eadeb7f0ace651bc11&image_type=photo'
const ImageSearchScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const doSearch = (searchText) => {
        console.log("mk>> searchText:" + searchText)
        if (searchText!='') {
            url=url+encodeURIComponent('&q='+searchText);
        }
        console.log("mk>> url:" + url)
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
    const renderSearch = (
<CardView style={styles.searchContainer}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder='Search'
                        onChangeText={setSearchText}
                    />
                    <Button title='Search' onPress={doSearch(searchText)} />
                </CardView>
    );
    return (
        <SafeAreaView>
            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                ListHeaderComponent={renderSearch}
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
        marginTop: 8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    searchInput: {
        padding: 10,
        width: '75%',
        backgroundColor: '#eaeaea',
        padding:10,
        borderWidth:1,
        borderRadius: 4,
    },
    submitButton: {
        alignSelf:'center',
        marginStart:16,
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
