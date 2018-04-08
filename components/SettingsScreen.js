import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Styles from '../common/Styles';
import { HeaderBackButton } from 'react-navigation';
import { NavigationActions } from 'react-navigation';

class SettingsScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            title: 'Settings',
            headerLeft: (
                <HeaderBackButton tintColor='#fff' onPress={() => navigation.dispatch(NavigationActions.back())} />
            )
        };
    };

    render() {
        return (
            <View style={Styles.mainContainer}>
                <View style={styles.header}>
                    <Text>Settings</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default SettingsScreen;