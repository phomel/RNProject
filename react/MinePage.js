import React, {Component} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import {
    DrawerNavigator
} from 'react-navigation';
import MyNotificationsScreen from './MyNotificationsScreen';
class MinePage extends Component{

    static navigationOptions = {
        title:'我的',
        drawerLabel:'我的',
        drawerIcon:({tintColor}) => (<Image
            source={require('./image.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />)
    };

    render() {
        return(
            <View style={{backgroundColor:'#fff', flex:1}}>
                <Text style={{padding:20}}>Sybil</Text>
                <Button style={{padding:20}}
                        title='点击打开侧滑菜单'
                        onPress={() =>
                        this.props.navigation.navigate('DrawerOpen')}/>
            </View>
        )
    }
}

const MyChatNavigator = DrawerNavigator({
    MyChat:{
        screen:MinePage
    },
    Notifications:{
        screen:MyNotificationsScreen
    }
}, {
    drawerWidth:220,
    drawerPosition:'left',
    contentOptions:{
        initialRouteName: MinePage, // 默认页面组件
        activeTintColor: '#008AC9',  // 选中文字颜色
        activeBackgroundColor: '#f5f5f5', // 选中背景颜色
        inactiveTintColor: '#000',  // 未选中文字颜色
        inactiveBackgroundColor: '#fff', // 未选中背景颜色
        style: {  // 样式

        }
    }
});
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    icon: {
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});

export default MyChatNavigator;