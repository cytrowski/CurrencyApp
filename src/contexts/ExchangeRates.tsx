import { createContext, ReactNode, useContext } from 'react';

import useAxiosClient, { RequestMethod } from '../hooks/useAxiosClient';
import { CurrencyCode, currencyFromToDates } from '../helpers/exchangeCurrency';

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
  const baseUrlUSD: string = currencyFromToDates(CurrencyCode.USD);
  const [USD, errorFetchUSD, isLoadingUSD] = useAxiosClient({
    baseUrl: baseUrlUSD,
    requestMethod: RequestMethod.GET
  });

  const fetchedUSD: number | undefined = USD?.data.rates[0].ask;

  const value = {
    fetchedUSD,
    isLoadingUSD,
    errorFetchUSD
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
