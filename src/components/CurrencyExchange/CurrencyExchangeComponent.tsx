import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ENTranslations from '../../helpers/translations/en';
import { CurrencyFromComponent } from './CurrencyForm/CurrencyFormComponent';
import { CurrencyInputComponent } from './CurrencyInput/CurrencyInputComponent';

type CurrencyExchangeComponentProps = {
  onFirstCurrencyChange: (value: number) => void;
  onSecondCurrencyChange: (value: number) => void;
  currencyFirstSignature: string;
  currencySecondSignature: string;
  exchangePLNtoForeign: number;
  exchangeForeignToPLN: number;
};

export const CurrencyExchangeComponent = ({
  onFirstCurrencyChange,
  onSecondCurrencyChange,
  currencyFirstSignature,
  currencySecondSignature,
  exchangePLNtoForeign,
  exchangeForeignToPLN
}: CurrencyExchangeComponentProps) => {
  const { CurrencyExchangeHeading } = ENTranslations;

  return (
    <Box>
      <CurrencyFromComponent>
        <Typography variant='h4'>{CurrencyExchangeHeading}</Typography>
        <CurrencyInputComponent
          currencyDescription={currencyFirstSignature}
          onChange={onFirstCurrencyChange}
          valueCalculated={exchangePLNtoForeign}
        />
        <CurrencyInputComponent
          currencyDescription={currencySecondSignature}
          onChange={onSecondCurrencyChange}
          valueCalculated={exchangeForeignToPLN}
        />
      </CurrencyFromComponent>
    </Box>
  );
};
