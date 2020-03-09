/**
 * Testpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducers';

const selectCorona = state => state.corona || initialState;

const makeSelectCorona = () =>
  createSelector(
    selectCorona,
    coronaState => coronaState.coronaList,
  );


export { selectCorona, makeSelectCorona };
