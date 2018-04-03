import React from 'react';
import { StyleSheet, TouchableHighlight, Image } from 'react-native';
import PropTypes from 'prop-types'

export default class HeaderButton extends React.Component {
    _navigateTo() {
        const nav = this.props.navigation;
        const screen = this.props.screen;
        const params = nav.state.params || {};

        if (nav && screen) {
            nav.navigate(screen, params);
        }
    }

    render() {
        let button = null;

        if (this.props.icon) {
            button = (
                <TouchableHighlight onPress={() => this._navigateTo()}>
                    <Image
                        style={styles.iconButton}
                        source={this.props.icon}
                    />
                </TouchableHighlight>
            );
        } else {
            <Button title={this.props.title} onPress= {() => this._navigateTo()} />
        }

        return button;
    }
}

HeaderButton.propTypes = {
    title: PropTypes.string.isRequired,
    screen: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
    iconButton: {
        width: 24,
        height: 24
    }
});