/*
 * Template
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import { coronaAction } from './actions';

// The initial state of the App
export const initialState = {
  coronaList: {}
};

/* eslint-disable default-case, no-param-reassign */
const coronaReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case coronaAction.SUCCESS: {
        draft.coronaList = action.payload;
        break;
      }
    }
  });

export default coronaReducer;
