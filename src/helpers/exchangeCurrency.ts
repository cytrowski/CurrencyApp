export enum CurrencyCode {
  USD = 'usd',
  EURO = 'eur'
}

export const currencyFromToDates = (code: CurrencyCode): string => {
  return `http://api.nbp.pl/api/exchangerates/rates/c/${code}/last?format=json`;
};
