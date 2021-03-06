import React,{ useState,useEffect } from 'react';
import { StyleSheet,SafeAreaView, Text, FlatList,View, ActivityIndicator,Image } from "react-native";
import CardView from '../custom/CardView';
import axios from 'axios';

const API_URL='https://reqres.in/api/users';
const ExampleApiCallUi = () => {

  //Toggle boolean for fetch or axios use
    const fromFetch=false;

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
      if (fromFetch) {
        fetch(API_URL)
        .then((response)=>response.json())
        .then((json)=>setData(json.data))
        .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      }else{
        axios.get(API_URL)
        .then((response)=>response.data)
        .then((json)=>setData(json.data))
        .catch((error) => console.error(error))
      .finally(() => setLoading(false));
      } 
    }, []);
    return (
        <SafeAreaView style={styles.fullScreenContainer}>
        <View style={styles.fullScreenContainer}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
              <CardView style={styles.cardSpacing}>
                  <View style={styles.cardItemRow}>
                  <Image style={styles.avatar} source={{uri:item.avatar}}/>
                  <View style={styles.textSpacing}>
            <Text style={styles.textName}>{item.first_name} {item.last_name}</Text>
            <Text>{item.email}</Text>
            </View>
            </View>
            </CardView>
          )}
        />
      )}
    </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fullScreenContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
    avatar: {
        width: 64,
        height: 64,
        borderRadius: 12
      },
    cardSpacing: {
        margin:8
    },
    cardItemRow:{
        flex:1,
        flexDirection:'row'
    },
    textSpacing:{
        marginStart:16,
        alignItems:'flex-start'
    },
    textName:{
        fontSize:18,
        fontWeight:'bold'
    }
});

export default ExampleApiCallUi;