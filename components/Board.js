import React from 'react';
import { StyleSheet, View } from 'react-native';
import Square from './Square'
import PropTypes from 'prop-types'

export default class Board extends React.Component {
    render() {
        const boardRows = []

        for (let i = 0; i < 3; i++) {
            const boardCols = []
            for (let j = 0; j < 3; j++) {
                let symbol = this.props.squares[i * 3 + j]
                boardCols.push(
                    <Square key={i + "-" + j} symbol={symbol} onClick={() => this.props.onSquareClick(i, j)}/>
                )
            }

            boardRows.push(
                <View key={i.toString()} style={styles.row}>
                    {boardCols}
                </View>
            )
        }

        return (
            <View style={styles.board}>
                {boardRows}
            </View>
        );
    }
}

Board.propTypes = {
    squares: PropTypes.array.isRequired,
    onSquareClick: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
    board: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row',
        backgroundColor: 50
    },
});