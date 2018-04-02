import React, { Component } from 'react';
import { AppRegistry, Text} from 'react-native';
import ToastExample from './ToastExample';
export default class HelloWorldApp extends Component {
	componentDidMount() {
    ToastExample.showToast("hello", ToastExample.SHORT);
  }
  test(){
  ToastExample.showToast("hello", ToastExample.SHORT);
  }
  render() {
    return (
      <Text onPress={()=>this.test()}>Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent("MyReactNativeApp", ()=>HelloWorldApp);