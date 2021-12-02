import { combineReducers } from 'redux';
import accountReducers from 'redux/account/account.reducer';
import userReducers from 'redux/user/user.reducer';
const rootReducers = combineReducers({
    accountReducers,
    userReducers
  });
  
  export default rootReducers;