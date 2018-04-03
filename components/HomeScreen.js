import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GameBoard from '../containers/GameBoard';
import GameStatus from '../containers/GameStatus';
import HeaderButtons from 'react-navigation-header-buttons'
import { Ionicons } from '@expo/vector-icons';

class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        const params = navigation.state.params || {};
        return {
            title: 'Home',
            headerRight: (
                <HeaderButtons IconComponent={Ionicons} iconSize={23} color="#fff">
                    <HeaderButtons.Item
                        title="Settings"
                        iconName="ios-settings"
                        onPress={() => params.onPress('Settings')} />
                </HeaderButtons>
            )
        }
    };

    _navigateTo = (screen) => {
        this.props.navigation.navigate(screen);
    }

    componentWillMount() {
        this.props.navigation.setParams({
            onPress: this._navigateTo
        });
    }

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