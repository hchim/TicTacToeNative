import React from 'react';
import { StyleSheet, TouchableHighlight, Text, Button, Dimensions } from 'react-native';
import PropTypes from 'prop-types'

const winSize = Dimensions.get('window');

export default class Square extends React.Component {
    render() {
        return (
            <TouchableHighlight style={styles.squareBtn} onPress={this.props.onClick}>
                <Text style={styles.squareBtnText}>{this.props.symbol}</Text>
            </TouchableHighlight>
        );
    }
}

Square.propTypes = {
    symbol: PropTypes.oneOf(['X', 'O', null]),
    onClick: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    squareBtn: {
        flex: 1,
        aspectRatio: 1,
        borderColor: '#999',
        borderWidth: 1,
        borderStyle: 'solid',
        marginRight: -1,
        marginTop: -1
    },
    squareBtnText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#69e',
        fontSize: winSize.width * 0.25
    },
});