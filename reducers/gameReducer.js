//TicTacToe Reducer
import { MOVE_ON_BOARD } from '../actions/actionTypes'

const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function calculateWinner(board) {
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }

    return null;
}

//the initial state of TicTacToe
let initialState = {
    board: new Array(9),
    winner: null,
    xIsNext: true,
    steps: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MOVE_ON_BOARD:
            let pos = action.row * 3 + action.col;
            //do nothing if game over
            if (state.winner || state.steps === 9 || state.board[pos]) {
                return state;
            }

            let newBoard = state.board.slice()
            newBoard[pos] = state.xIsNext ? 'X' : 'O'
            return {
                board: newBoard,
                winner: calculateWinner(newBoard),
                xIsNext: !state.xIsNext,
                steps: state.steps + 1
            }
        default:
            return state
    }
}
