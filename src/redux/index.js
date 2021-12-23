import { combineReducers } from 'redux';
import accountReducers from 'redux/account/account.reducer';
import userReducers from 'redux/user/user.reducer';
import breadcrumbReducers from 'redux/breadcrumb/breadcrumbs.reducer'
const rootReducers = combineReducers({
    accountReducers,
    userReducers,
    breadcrumbReducers
  });
  
  export default rootReducers;