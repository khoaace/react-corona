import { SET_ERROR } from '../constants';

export const errorReducer = (state = {}, action) => {
    const { type, payload } = action;
    if (type === SET_ERROR) {
        return Object.assign({}, state, {
            // sets the loading boolean at this scope
            [`${payload.scope}Error`]: payload.error,
        });
    } else {
        return state;
    }
}