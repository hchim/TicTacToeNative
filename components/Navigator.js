import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import PropTypes from 'prop-types';
import { addListener } from '../utils/redux';

export const Navigator = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Settings: { screen: SettingsScreen }
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            }
        }
    }
);

class NavigatorWithState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const { dispatch, nav } = this.props;

        return (
            <Navigator navigation={{dispatch, state: nav, addListener}} />
        );
    }
}

export default NavigatorWithState;