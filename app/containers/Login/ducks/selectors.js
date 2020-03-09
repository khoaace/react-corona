/**
 * Testpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducers';
import { LOGIN } from './types';

const selectLogin = state => state.login || initialState;

export { selectLogin };
