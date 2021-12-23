import { combineReducers } from "redux";
import * as constants from './breadcrumbs.contant';
import { constants as loadingConstants } from "redux/loading";

const initialState = {
    breadcrumbs: [],
};

function breadcrumbStore(state = initialState, action) {
  switch (action.type) {
    case constants.BREADCRUMBS:
      return {
        ...state,
        breadcrumbs: action?.payload,
      };
    default:
      return state;
  }
}

export default combineReducers({ breadcrumbStore });