import { put, takeLatest } from 'redux-saga/effects';
import {  } from './actions';
import {  } from "./types";
import { push } from 'connected-react-router';

// import request from 'utils/request';
import createAction from 'utils/createSagaAction';
// let result = yield createAction(LOGIN, 'https://kace-server.glitch.me/api/login', { username, password }, 'POST');

export function* template(params) {
 
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* templateData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(loginAction.REQUEST, template);
}
