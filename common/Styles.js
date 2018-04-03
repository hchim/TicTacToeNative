import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default StyleSheet.create({
    //Main container
    mainContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: Constants.statusBarHeight,
        paddingLeft: 20,
        paddingRight: 20
    }
});