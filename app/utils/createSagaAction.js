import { setLoading, setError } from 'containers/App/actions';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/api';

export default function* createSagaAction(type = '', url = '', payload = {} , method = 'GET') {
    try {
        yield put(setLoading(type, true));
        const result = yield call(request, url, payload, method);
        yield put(setLoading(type, false));
        return result;
    } catch (err) {
        yield put(setLoading(type, false));
        yield put(setError(type, err));
        throw err;
    }
}