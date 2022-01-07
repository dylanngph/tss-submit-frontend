import { fork, all } from "redux-saga/effects";
import Accounts from "sagas/account";
import Users from "sagas/user";

function* rootSagas() {
  yield all([
    /* Accounts saga */
    ...Accounts.map((saga) => fork(saga)),

    /* Users saga */
    ...Users.map((saga) => fork(saga)),
  ]);
}

export default rootSagas;
