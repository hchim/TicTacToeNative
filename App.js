import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import GameBoard from './containers/GameBoard';
import GameStatus from './containers/GameStatus';
import { Constants } from 'expo';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';

let store = createStore(reducers)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <GameBoard />
                    <GameStatus />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: Constants.statusBarHeight,
        paddingLeft: 20,
        paddingRight: 20
    }
});