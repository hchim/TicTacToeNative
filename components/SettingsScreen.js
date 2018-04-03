import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Styles from '../common/Styles';

class SettingsScreen extends React.Component {

    static navigationOptions = {
        title: 'Settings'
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