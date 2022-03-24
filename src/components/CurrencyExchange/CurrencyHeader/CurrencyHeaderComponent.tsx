import React, { FC } from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import ENTranslations from '../../../helpers/translations/en';

export type CurrencyHeaderComponentProps = {
  firstCurrency: number;
  secondCurrency: number;
  textAlign?: 'left' | 'center';
  componentAlignCenter?: boolean;
};

export const CurrencyHeaderComponent: FC<CurrencyHeaderComponentProps> = ({
  firstCurrency,
  secondCurrency,
  textAlign,
  componentAlignCenter
}: CurrencyHeaderComponentProps): JSX.Element => {
  const { CurrencyFirst, CurrencyEquals, CurrencySecond } = ENTranslations;
  const isAllCurrencyHaveValue = firstCurrency && secondCurrency;
  const firstCurrencyEqualsText = isAllCurrencyHaveValue
    ? `${firstCurrency} ${CurrencyFirst} ${CurrencyEquals}`
    : '';
  const secondCurrencyEqualsText = isAllCurrencyHaveValue
    ? `${secondCurrency} ${CurrencySecond}`
    : '';

  return (
    <Box sx={{ alignSelf: componentAlignCenter ? 'center' : 'flex-start' }}>
      <Typography variant='body1' textAlign={textAlign}>
        {firstCurrencyEqualsText}
      </Typography>
      <Typography variant='h4' textAlign={textAlign || 'left'}>
        {secondCurrencyEqualsText}
      </Typography>
    </Box>
  );
};
