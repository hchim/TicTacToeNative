import { connect } from 'react-redux';
import NavigatorWithState from '../components/Navigator';

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    }
};

const AppNavigator = connect(mapStateToProps)(NavigatorWithState);

export default AppNavigator;