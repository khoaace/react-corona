/*
 * Login reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { loginAction } from './actions';

// The initial state of the App
export const initialState = {
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case loginAction.SUCCESS: {
        draft.user = action.payload.user;
        draft.loading = false;
        draft.error = false;
        break;
      }

    }
  });

export default loginReducer;
