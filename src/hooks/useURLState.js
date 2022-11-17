// This module supports for stateful URLs with multiple query parameters.
// From https://github.com/stamen/pleth/blob/master/packages/examples/src/pleth/useURLState.js
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

export const useURLState = (urlStateConfig, reducer) => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const query = queryString.parse(search);

  const urlState = Object.keys(urlStateConfig).reduce((accumulator, key) => {
    const { defaultValue, parse } = urlStateConfig[key];
    const value = query[key];
    return {
      ...accumulator,
      [key]: value === undefined ? defaultValue : parse(value),
    };
  }, {});

  const urlDispatch = useCallback(
    (action) =>
      navigate({
        search: queryString.stringify(reducer(urlState, action)),
      }),
    [navigate, urlState, reducer]
  );

  return [urlState, urlDispatch];
};
