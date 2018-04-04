'use strict';
import React, {Component} from 'react';
import {AppRegistry, AppState, StyleSheet, Text, ToastAndroid, View,} from 'react-native';

class AppStateDemo extends Component {
    constructor(props) {
        super(props);
        // this._handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            _appState: { currentState:AppState.currentState},

        };
    }

    componentWillMount() {
        //ToastAndroid.show('挂载',ToastAndroid.SHORT);
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        //ToastAndroid.show('取消挂载',ToastAndroid.SHORT);
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(appState) {
        ToastAndroid.show('当前状态为:' + appState, ToastAndroid.SHORT);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>当前App状态信息如下:</Text>
                <Text>
                    {this.state._appState.currentState}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

AppRegistry.registerComponent('MyReactNativeApp', () => AppStateDemo);