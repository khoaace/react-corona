/**
 * Testpage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTemplate = state => state.template || initialState;

const makeSelect = () =>
  createSelector(
    selectTemplate,
    templateState => templateState.template,
  );


export { selectTemplate, makeSelect };
