import { put, takeLatest } from 'redux-saga/effects';
import { coronaAction } from './actions';
import { CORONA } from "./types";
import { push } from 'connected-react-router';
import createAction from 'utils/createSagaAction';

// import request from 'utils/request';
import { request } from 'utils/api';

export function* getListCorona(params) {
  let result = yield createAction(CORONA, 'https://webapi.dantri.com.vn/corona-info');
  yield put(coronaAction.success(result.data));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* coronaData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(coronaAction.REQUEST, getListCorona);
}
