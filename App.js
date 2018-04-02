import React, {Component} from 'react';
import {FlatList, StyleSheet, ScrollView, Image, Text, View} from 'react-native'

export default class FlatListBasics extends Component {
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    style={{flexDirection: 'row'}}
                    renderItem={(({item}) => <Text style={styles.item}>{item.key}</Text>)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

getFormJson()
{
    fetch('https://mywebsite.com/mydata.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'key1=value&key2=value2'
    });
}
getJson()
{
    fetch('https://mywebsite.com/endpoint/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue'
        })
    })
}
getMoviesFromApiAsync()
{
    return fetch('https://facebook.github,io/react-native/movies.json')
        .then((response) => response.json())
        .then((responseJson) => {
            return responseJson.movies;
        }
catch
    (error)
    {
        console.error(error);
    }
}
var request = new XMLHttpRequest();
request.onreadystatechange(e)
=>
{
    if (request.readyState !== 4) {
        return;
    }
    if (request.staus === 200) {
        console.log('success', request.responseText);
    } else {
        console.warn('error');
    }
}
;
request.open('GET', 'https://mywebsite.com/endpoint/');
request.send();
	
