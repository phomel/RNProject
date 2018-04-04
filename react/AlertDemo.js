import React, {Component} from 'react';
import {Alert, AppRegistry, StyleSheet, Text, ToastAndroid, TouchableHighlight, View} from 'react-native';


class CustomButton extends Component {
    render() {
        return (
            <TouchableHighlight
                style={styles.button}
                underlayColor="#a5a5a5"
                onPress={this.props.onPress}>
                <Text style={styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        );
    }
}

class AlertDemo extends Component {

    render() {
        return (
            <View>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.title}>弹窗实例</Text>
                </View>

                <CustomButton text='普通alter' onPress={
                    () => {
                        Alert.alert('普通alert', '哈哈')
                    }
                }/>

                <CustomButton text='two button' onPress={() => {
                    Alert.alert('普通alert', '哈哈',
                        [{text: 'cancel', onPress: () => ToastAndroid.show('you click cancel', ToastAndroid.SHORT)},
                            {text: 'confirm', onPress: () => ToastAndroid.show('you click confirm', ToastAndroid.SHORT)}])
                }
                }/>

                <CustomButton text='three button' onPress={() => {
                    Alert.alert('普通alert', '哈哈',
                        [{text: 'time after', onPress: () => ToastAndroid.show('you click time after', ToastAndroid.SHORT)},
                            {text: 'cancel', onPress: () => ToastAndroid.show('you click cancel', ToastAndroid.SHORT)},
                            {text: 'confirm', onPress: () => ToastAndroid.show('you click confirm', ToastAndroid.SHORT)}])
                }
                }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        margin: 5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    title: {
        color: 'black',
        fontSize: 20
    }
});

AppRegistry.registerComponent('MyReactNativeApp', () => AlertDemo);