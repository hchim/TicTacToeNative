import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import GameBoard from '../containers/GameBoard';
import GameStatus from '../containers/GameStatus';
import HeaderButton from './HeaderButton';

class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerRight: (
                <HeaderButton
                    title="Settings"
                    screen="Settings"
                    navigation={navigation}
                    icon={require('../images/ic_settings_white_48dp.png')} />
            )
        }
    };

    //Set parameters to navigation is needed
    // componentWillMount() {
    //     this.props.navigation.setParams({});
    // }

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