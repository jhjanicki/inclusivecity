import { createContext, useCallback } from 'react';
import { useURLState } from './hooks/useURLState';

export const URLStateContext = createContext();

const urlStateConfig = {
  language: {
    defaultValue: 'dutch',
    parse: (d) => d,
    stringify: (d) => d,
  },
};

const urlStateReducer = (state, action) => {
  switch (action.type) {
    case 'setLanguage':
      return { ...state, language: action.language };
    default:
      throw new Error();
  }
};

export const URLStateProvider = ({ children }) => {
  const [urlState, urlDispatch] = useURLState(urlStateConfig, urlStateReducer);

  const { language } = urlState;
  const setLanguage = useCallback(
    (event) => {
      urlDispatch({ type: 'setLanguage', language: event.target.id });
    },
    [urlDispatch]
  );

  const value = { language, setLanguage };
  return (
    <URLStateContext.Provider value={value}>
      {children}
    </URLStateContext.Provider>
  );
};
