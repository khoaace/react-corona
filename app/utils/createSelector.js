/**
 * Testpage selectors
 */

import { createSelector } from 'reselect';

const selectLoading = state => state.loading || initialState;
const selectError = state => state.error || initialState;

const makeSelectorLoading = (key) =>
createSelector(
  selectLoading,
  loadingState => loadingState[`${key}Loading`] || false,
);

const makeSelectorError = (key) =>
createSelector(
  selectError,
  errorState => errorState[`${key}Error`],
);

export { makeSelectorLoading, makeSelectorError };
