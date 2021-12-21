import * as constants from './breadcrumbs.contant';

const initialState = {
    breadcrumbs: [],
};

export default function loading(state = initialState, action) {
  console.log('action.type==>', action.type);
}