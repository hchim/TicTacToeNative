import React from 'react';
import { StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types'

export default class StatusLabel extends React.Component {
    render () {
        return (
            <Text style={styles.status}>{this.props.status}</Text>
        )
    }
}

StatusLabel.propTypes = {
    status: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    status: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#696',
        marginTop: 20
    }
});