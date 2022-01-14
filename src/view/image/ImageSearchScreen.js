import react, { useState, useEffect} from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View ,Image} from 'react-native'
import CardView from '../custom/CardView';

const url = 'https://pixabay.com/api/?key=9140105-4c2e6a4eadeb7f0ace651bc11&image_type=photo'
const ImageSearchScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const doSearch = ()=>{
        axios.get(url)
        .then((response)=>response.data)
        .then((json)=>setData(json.hits))
        .catch((error) => console.error(error))
      .finally(() => setLoading(false));
    }

    useEffect(() => {
       doSearch();
    }, [])

    return (
        <SafeAreaView>
            <View style={styles.contentContainer}>
                <View style={styles.searchContainer}>
                <TextInput 
                style={styles.searchInput}
                placeholder='Search'
                onChangeText={setSearchText}
                />
                <Button title='Search' onPress={doSearch}/>
                </View>
            </View>
            {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
              <CardView style={styles.cardSpacing}>
                  <Image style={styles.image} source={{uri:item.imageURL}}/>
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
        flex: 1,
        backgroundColor: '#fff',
        padding:16,
    },
    searchContainer: {
        flexDirection:'row'
    },
    searchInput:{
     padding:10,
     backgroundColor:'#aeaeae',
     borderRadius:8,
    },
    submitButton:{

    },
    cardSpacing: {
        margin:8
    },
    image: {
        width: '98%',
        height: 200,
        borderRadius: 12
      },


})
