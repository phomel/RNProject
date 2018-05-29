import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import ChatScreen from './ChatScreen';
import MinePage from './MinePage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

class HomePage extends Component {
    static navigationOptions = {
        title: '首页',
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('hahaha')
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{padding: 10}}>Hello Navigation</Text>

                <Button title='点击跳转'
                        onPress={() => this.props.navigation.navigate('Chat', {user: 'Sybil'})}/>
            </View>
        )

    }

}
const numbers = number => number * number;


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

class Item extends Component{

    render() {
        return (<View style={{flex:1, height:50}}>
            <Image style={{width:25, height:25}} source={this.props.image}/>
        </View>)
    }
}
const MainScreenNavigator = TabNavigator({
        Home: {screen: HomePage},
        Mine: {screen: MinePage},
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = focused?require('./image.png'):require('./mine.jpg')
                } else if (routeName === 'Mine') {
                    iconName = focused?require('./image.png'):require('./mine.jpg')
                }
                return <Item image={iconName} size={25} color={tintColor} />;
                // return <Item image={focused?require('./image.png'):require('./mine.jpg')}/>;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        animationEnabled: false,
        swipeEnabled: false,
    });

const SimpleApp = StackNavigator({
    Home: {screen: MainScreenNavigator},
    Chat: {screen: ChatScreen}
});
export default SimpleApp;
