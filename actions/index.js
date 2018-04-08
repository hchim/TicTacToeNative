//action creators

import { MOVE_ON_BOARD, NAV_TO_SCREEN } from './actionTypes'

/*
 * Action Creators.
 */

export const moveOnBoard = (row, col) => ({
    type: MOVE_ON_BOARD,
    row: row,
    col: col
})