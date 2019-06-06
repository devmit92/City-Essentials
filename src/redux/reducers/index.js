import { combineReducers } from 'redux';
import businesses from './businessesReducer';
import user from './userReducer';
import loginMode from './loginModeReducer';
import errors from './errorsReducer';

const rootReducer = combineReducers({
    businesses,
    user,
    loginMode,
    errors,
});

export default rootReducer;