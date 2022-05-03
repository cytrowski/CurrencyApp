import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import ENTranslations from '../../helpers/translations/en';
import { CurrencyFrom } from './components/CurrencyForm';
import { CurrencyInput } from './components/CurrencyInput';

interface Props {
  rate: number;
}

export const CurrencyExchange = ({ rate }: Props) => {
  const { CurrencyExchangeHeading } = ENTranslations;

  const [firstCurrencyInput, setFirstCurrencyInput] = useState(0);
  const [secondCurrencyInput, setSecondCurrencyInput] = useState(0);
  const [exchangePLNtoForeign, setExchangePLNtoForeign] = useState(0);
  const [exchangeForeignToPLN, setExchangeForeignToPLN] = useState(0);
  const { CurrencyFirst, CurrencySecond } = ENTranslations;

  useEffect(() => {
    if (firstCurrencyInput) {
      setExchangePLNtoForeign(firstCurrencyInput * rate);
    }
  }, [firstCurrencyInput, rate]);

  useEffect(() => {
    if (secondCurrencyInput) {
      setExchangeForeignToPLN(secondCurrencyInput / rate);
    }
  }, [secondCurrencyInput, rate]);

  const onFirstCurrencyChange = (value: number): void => {
    setSecondCurrencyInput(Math.round(value * 100) / 100);
  };

  const onSecondCurrencyChange = (value: number): void => {
    setFirstCurrencyInput(Math.round(value * 100) / 100);
  };

  return (
    <Box>
      <CurrencyFrom>
        <Typography variant='h4'>{CurrencyExchangeHeading}</Typography>
        <CurrencyInput
          currencyDescription={CurrencyFirst}
          onChange={onFirstCurrencyChange}
          valueCalculated={exchangePLNtoForeign}
        />
        <CurrencyInput
          currencyDescription={CurrencySecond}
          onChange={onSecondCurrencyChange}
          valueCalculated={exchangeForeignToPLN}
        />
      </CurrencyFrom>
    </Box>
  );
};
