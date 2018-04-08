import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GameBoard from '../containers/GameBoard';
import GameStatus from '../containers/GameStatus';
import HeaderButtons from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';
import { NavigationActions } from 'react-navigation';

class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerRight: (
                <HeaderButtons IconComponent={Ionicons} iconSize={23} color="#fff">
                    <HeaderButtons.Item
                        title="Settings"
                        iconName="ios-settings"
                        onPress={() => navigation.dispatch(NavigationActions.navigate({routeName: 'Settings'}))} />
                </HeaderButtons>
            )
        }
    };

    render() {
        return (
            <View style={styles.homeContainer}>
                <GameBoard />
                <GameStatus />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    homeContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default HomeScreen;