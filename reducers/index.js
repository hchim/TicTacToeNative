import { combineReducers } from 'redux';
import game from './gameReducer';
import nav from './navReducer';

const AppReducer = combineReducers({
    game, nav
});

export default AppReducer;
