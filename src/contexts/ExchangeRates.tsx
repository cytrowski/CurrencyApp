import { createContext, ReactNode, useContext } from 'react';
import { useQueryExchangeRates } from '../hooks/useQueryExchangeRates';

interface ContextValue {
  fetchedUSD?: number;
  isLoadingUSD: boolean;
  errorFetchUSD?: string;
}

const Context = createContext<ContextValue | null>(null);

interface Props {
  children: ReactNode;
}

export const ExchangeRatesProvider = ({ children }: Props) => {
  const { rate, isLoading, error } = useQueryExchangeRates('usd');

  const fetchedUSD: number | undefined = rate;

  const value = {
    fetchedUSD,
    isLoadingUSD: isLoading,
    errorFetchUSD: error ? 'Problem fetching rates' : undefined
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useExchangeRates = () => {
  const value = useContext(Context);

  if (value === null) {
    throw new Error('Missing ExchangeRatesProvider');
  }

  return value;
};
