import React from 'react';
import { Navigator } from '../components/Navigator';
import { NavigationActions } from 'react-navigation';
const { NAVIGATE, BACK } = NavigationActions;

const initialState = Navigator.router.getStateForAction(
    Navigator.router.getActionForPathAndParams('Home')
);

export default (state = initialState, action) => {
    let nextState;
    switch (action.type) {
        case BACK:
            nextState = Navigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        case NAVIGATE:
            nextState = Navigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: action.screen }),
                state
            );
            break;
        default:
            nextState = Navigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
};
