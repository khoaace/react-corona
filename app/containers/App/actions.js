import { SET_LOADING, SET_ERROR } from '../../constants';

export const setLoading = (scope, loading) => {
    return {
      type: SET_LOADING,
      payload: {
        scope,
        loading,
      },
    };
}

export const setError = (scope, error) => {
  return {
    type: SET_ERROR,
    payload: {
      scope,
      error,
    },
  };
}