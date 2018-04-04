import { connect } from 'react-redux'
import { moveOnBoard } from '../actions'
import Board from '../components/Board'

const mapStateToProps = state => {
    return {
        squares: state.game.board
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSquareClick: (row, col) => {
            dispatch(moveOnBoard(row, col))
        }
    }
}

const MoveOnBoard = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board)

export default MoveOnBoard