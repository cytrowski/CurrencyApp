import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';
import ENTranslations from '../../helpers/translations/en';
import {
  CurrencyFromComponent,
  CurrencyFromComponentProps
} from './CurrencyForm/CurrencyFormComponent';
import {
  CurrencyInputComponent,
  CurrencyInputComponentProps
} from './CurrencyInput/CurrencyInputComponent';

type CurrencyExchangeComponentProps = {
  onFirstCurrencyChange: (value: number) => void;
  onSecondCurrencyChange: (value: number) => void;
  currencyFirstSignature: string;
  currencySecondSignature: string;
  exchangePLNtoForeign: number;
  exchangeForeignToPLN: number;
};

export const CurrencyExchangeComponent: FC<
  CurrencyExchangeComponentProps & CurrencyFromComponentProps & Partial<CurrencyInputComponentProps>
> = ({
  onFirstCurrencyChange,
  onSecondCurrencyChange,
  isColumn,
  currencyFirstSignature,
  currencySecondSignature,
  exchangePLNtoForeign,
  exchangeForeignToPLN
}: CurrencyExchangeComponentProps &
  Partial<CurrencyFromComponentProps> &
  Partial<CurrencyInputComponentProps>): JSX.Element => {
  const { CurrencyExchangeHeading } = ENTranslations;

  return (
    <Box>
      <CurrencyFromComponent>
        <Typography variant='h4'>{CurrencyExchangeHeading}</Typography>
        <CurrencyInputComponent
          currencyDescription={currencyFirstSignature}
          isColumn={isColumn}
          onChange={onFirstCurrencyChange}
          valueCalculated={exchangePLNtoForeign}
        />
        <CurrencyInputComponent
          currencyDescription={currencySecondSignature}
          isColumn={isColumn}
          onChange={onSecondCurrencyChange}
          valueCalculated={exchangeForeignToPLN}
        />
      </CurrencyFromComponent>
    </Box>
  );
};
