import { SET_LOADING } from '../constants';

export const loadingReducer = (state = {}, action) => {
    const { type, payload } = action;
    if (type === SET_LOADING) {
        return Object.assign({}, state, {
            // sets the loading boolean at this scope
            [`${payload.scope}Loading`]: payload.loading,
        });
    } else {
        return state;
    }
}