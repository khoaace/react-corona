import { call, put, select, takeLatest } from 'redux-saga/effects';
import { loginAction } from './actions';
import { setLoading, setError } from 'containers/App/actions';
import { LOGIN } from "./types";
import { push } from 'connected-react-router';

// import request from 'utils/request';
import { request } from 'utils/api';
import Auth from 'utils/auth';
import createAction from 'utils/createSagaAction';

export function* login(params) {
  try {
    const { username = '', password = '' } = params.payload;
    let result = yield createAction(LOGIN, 'https://kace-server.glitch.me/api/login', { username, password }, 'POST');
    
    Auth.authenticateUser(result.sessionToken, result);
    yield put(loginAction.success({ user: result}));
    yield put(push('/'));
  } catch (err) {
    
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* loginData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(loginAction.REQUEST, login);
}
