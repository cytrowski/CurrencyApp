import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import ENTranslations from '../../helpers/translations/en';
import { CurrencyFrom } from './components/CurrencyForm';
import { CurrencyInput } from './components/CurrencyInput';

interface Props {
  rate?: number;
}

export const CurrencyExchange = ({ rate = 1 }: Props) => {
  const { CurrencyExchangeHeading } = ENTranslations;

  const [firstCurrencyInput, setFirstCurrencyInput] = useState(0);
  const [secondCurrencyInput, setSecondCurrencyInput] = useState(0);
  const { CurrencyFirst, CurrencySecond } = ENTranslations;

  const exchangePLNtoForeign = firstCurrencyInput * rate;
  const exchangeForeignToPLN = secondCurrencyInput / rate;

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
