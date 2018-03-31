//action creators

import { MOVE_ON_BOARD } from './actionTypes'

/*
 * Action Creators.
 */

export const moveOnBoard = (row, col) => ({
    type: MOVE_ON_BOARD,
    row: row,
    col: col
})