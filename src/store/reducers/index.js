import {combineReducers} from 'redux';
// import {auth} from './authReducer';
// import authReducer from './authReducer`'
import auth from './authReducer';

// export default combineReducers({auth})
export default combineReducers({
    authReducer:auth
});