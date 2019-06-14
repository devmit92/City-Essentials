import { combineReducers } from 'redux';
import businesses from './businessesReducer';
import user from './userReducer';
import loginMode from './loginModeReducer';
import errors from './errorsReducer';
import community from './communityReducer';
import topFive from './topFiveReducer';

const rootReducer = combineReducers({
    businesses,
    user,
    loginMode,
    errors,
    community,
    topFive,
});

export default rootReducer;