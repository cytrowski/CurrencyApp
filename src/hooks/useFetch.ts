import { useEffect, useReducer } from 'react';

type FetchParams = Parameters<typeof window.fetch>;
type Url = FetchParams[0];
type Options = FetchParams[1];

type Idle = { data: undefined; isLoading: false; error: false };
type Success<T> = { data: T; isLoading: false; error: false };
type Pending = { data: undefined; isLoading: true; error: false };
type Fail = { data: undefined; isLoading: false; error: true };

type Result<T> = Idle | Success<T> | Pending | Fail;

const initialState: Idle = {
  data: undefined,
  isLoading: false,
  error: false
};

type Reducer<T> = (state: Result<T>, action: Action<T>) => Result<T>;
function reducer<T>(state: Result<T> = initialState, action: Action<T>): Result<T> {
  if (action.type === 'start-loading') {
    return {
      data: undefined,
      isLoading: true,
      error: false
    };
  }
  if (action.type === 'success-loading') {
    return {
      data: action.data,
      isLoading: false,
      error: false
    };
  }
  if (action.type === 'fail-loading') {
    return {
      data: undefined,
      isLoading: false,
      error: true
    };
  }
  return state;
}

type StartLoading = { type: 'start-loading' };
type SuccessLoading<T> = { type: 'success-loading'; data: T };
type FailLoading = { type: 'fail-loading' };

type Action<T> = StartLoading | SuccessLoading<T> | FailLoading;

export const useFetch = <T>(url: Url, options?: Options): Result<T> => {
  const [state, dispatch] = useReducer<Reducer<T>>(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'start-loading' });
    const controller = new AbortController();
    const signal = controller.signal;

    fetch(url, { ...options, signal })
      .then<T>((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error('Server response is not ok');
      })
      .then((data) => dispatch({ type: 'success-loading', data }))
      .catch(() => dispatch({ type: 'fail-loading' }));

    return () => {
      controller.abort();
    };
  }, [url, options]);

  return state;
};
