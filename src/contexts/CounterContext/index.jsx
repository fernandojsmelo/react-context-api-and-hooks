import P from 'prop-types';
import { createContext, useContext, useState } from 'react';

export const initialState = {
  counter: 0,
  loading: false,
};

const Context = createContext();

export const CounterContextProvider = ({children}) => {
  const [state, dispatch] = useState(initialState)
  return <Context.Provider value={[state, dispatch]}>{ children }</Context.Provider>;
};

CounterContextProvider.prototype = {
  children: P.node.isRequired,
};

export const useCounterContext = () => {
  const context = useContext(Context);

  if (typeof context === 'undefined'){
    throw new Error("You Have to Use useCounterContext inside <CounterContextProvider />");
  }

  return [ ...context];
};
