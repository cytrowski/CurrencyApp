import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import ENTranslations from '../../helpers/translations/en';
import {
  CurrencyFromComponent,
  CurrencyFromComponentProps
} from './CurrencyForm/CurrencyFormComponent';
import {
  CurrencyHeaderComponent,
  CurrencyHeaderComponentProps
} from './CurrencyHeader/CurrencyHeaderComponent';
import {
  CurrencyInputComponent,
  CurrencyInputComponentProps
} from './CurrencyInput/CurrencyInputComponent';

type CurrencyExchangeComponentProps = {
  onFirstCurrencyChange: (value: number) => void;
  onSecondCurrencyChange: (value: number) => void;
  currencyFirst: string;
  currencySecond: string;
};

export const CurrencyExchangeComponent: FC<
  CurrencyExchangeComponentProps &
    CurrencyFromComponentProps &
    CurrencyHeaderComponentProps &
    Partial<CurrencyInputComponentProps>
> = ({
  firstCurrency,
  secondCurrency,
  onFirstCurrencyChange,
  onSecondCurrencyChange,
  isColumn,
  currencyFirst,
  currencySecond,
  componentAlignCenter
}: CurrencyExchangeComponentProps &
  Partial<CurrencyFromComponentProps> &
  CurrencyHeaderComponentProps &
  Partial<CurrencyInputComponentProps>): JSX.Element => {
  const { CurrencyExchangeHeading } = ENTranslations;

  return (
    <Box>
      <CurrencyFromComponent>
        <Typography variant='h4'>{CurrencyExchangeHeading}</Typography>
        <CurrencyHeaderComponent
          firstCurrency={firstCurrency}
          secondCurrency={secondCurrency}
          textAlign='left'
          componentAlignCenter={componentAlignCenter}
        />
        <CurrencyInputComponent
          currencyDescription={currencyFirst}
          isColumn={isColumn}
          onChange={onFirstCurrencyChange}
        />
        <CurrencyInputComponent
          currencyDescription={currencySecond}
          isColumn={isColumn}
          onChange={onSecondCurrencyChange}
        />
      </CurrencyFromComponent>
    </Box>
  );
};
