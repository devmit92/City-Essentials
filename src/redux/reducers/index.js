import { combineReducers } from 'redux';
import businesses from './businessesReducer';
import user from './userReducer';
import loginMode from './loginModeReducer';
import errors from './errorsReducer';
import community from './communityReducer';

const rootReducer = combineReducers({
    businesses,
    user,
    loginMode,
    errors,
    community,
});

export default rootReducer;