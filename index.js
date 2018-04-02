'use strict';
import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Switch, Text, View, ToastAndroid} from 'react-native';

class ToastAndroidDemo extends Component {

    state = {
        value: true,
        disabled: false,
        changeText: '打开'
    };

    render() {
        return (
            <View style={{flexDirection: 'column', flex: 1, alignItems: 'flex-start', justifyContent: 'space-between'}}>
                <Text style={styles.text}>Switch测试</Text>
                <Text>{this.state.changeText}</Text>
                <Switch
                    value={this.state.value}
                    onValueChange={(value) => {
                        this.setState({
                            value: value,
                            changeText: value ? '打开了' : '关闭了'
                        }, function () {
                            ToastAndroid.show(value.toString(), ToastAndroid.SHORT)
                        })
                    }
                    }/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'black',
        padding: 15,
        width: 100,
        height: 60
    },
    text: {
        textAlign: 'center',
        color: 'red',
        backgroundColor: 'black'
    }
});

AppRegistry.registerComponent('MyReactNativeApp', () => ToastAndroidDemo);