//action creators

import { MOVE_ON_BOARD, NAV_TO_SCREEN } from './actionTypes'
import { NavigationActions } from 'react-navigation';
const { NAVIGATE, BACK } = NavigationActions;

/*
 * Action Creators.
 */

export const moveOnBoard = (row, col) => ({
    type: MOVE_ON_BOARD,
    row: row,
    col: col
})

export const navigateToScreen = (screen) => ({
    type: NAVIGATE,
    screen: screen
})

export const navigateBack = (screen) => ({
    type: BACK
})