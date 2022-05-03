import { useFetch } from './useFetch';

type Currency = 'usd';

interface Result {
  rates: { ask: number }[];
}

export const useQueryExchangeRates = (currency: Currency) => {
  const { data, isLoading, error } = useFetch<Result>(
    `http://api.nbp.pl/api/exchangerates/rates/c/${currency}/last?format=json`
  );

  const rate = data?.rates[0].ask;

  return { rate, isLoading, error };
};
