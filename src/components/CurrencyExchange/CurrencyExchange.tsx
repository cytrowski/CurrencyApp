import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ENTranslations from '../../helpers/translations/en';
import { CurrencyFrom } from './components/CurrencyForm';
import { CurrencyInput } from './components/CurrencyInput';

interface Props {
  onFirstCurrencyChange: (value: number) => void;
  onSecondCurrencyChange: (value: number) => void;
  currencyFirstSignature: string;
  currencySecondSignature: string;
  exchangePLNtoForeign: number;
  exchangeForeignToPLN: number;
}

export const CurrencyExchange = ({
  onFirstCurrencyChange,
  onSecondCurrencyChange,
  currencyFirstSignature,
  currencySecondSignature,
  exchangePLNtoForeign,
  exchangeForeignToPLN
}: Props) => {
  const { CurrencyExchangeHeading } = ENTranslations;

  return (
    <Box>
      <CurrencyFrom>
        <Typography variant='h4'>{CurrencyExchangeHeading}</Typography>
        <CurrencyInput
          currencyDescription={currencyFirstSignature}
          onChange={onFirstCurrencyChange}
          valueCalculated={exchangePLNtoForeign}
        />
        <CurrencyInput
          currencyDescription={currencySecondSignature}
          onChange={onSecondCurrencyChange}
          valueCalculated={exchangeForeignToPLN}
        />
      </CurrencyFrom>
    </Box>
  );
};
