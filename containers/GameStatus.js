import { connect } from 'react-redux'
import StatusLabel from '../components/StatusLabel'

function getNewStatus(winner, xIsNext, steps) {
    if (winner) {
        return 'Winner is ' + winner
    } else if (steps === 9) {
        return 'Nobody wins.'
    }

    return 'Next player: ' + (xIsNext ? 'X' : 'O')
}

const mapStateToProps = state => {
    let gameState = state.game;
    return {
        status: getNewStatus(gameState.winner, gameState.xIsNext, gameState.steps)
    }
}

const UpdateStatus = connect(
    mapStateToProps
)(StatusLabel)

export default UpdateStatus;