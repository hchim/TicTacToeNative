import React from 'react';
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux';
import Navigator from './components/Navigator';

let store = createStore(reducers)

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigator />
            </Provider>
        );
    }
}