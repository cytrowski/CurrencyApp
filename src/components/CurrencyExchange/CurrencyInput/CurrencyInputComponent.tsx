import React, { ChangeEvent, FC } from 'react';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ENTranslations from '../../../helpers/translations/en';

export type CurrencyInputComponentProps = {
  currencyDescription: string;
  isColumn?: boolean;
  onChange?: (value: number) => void;
};

export const CurrencyInputComponent: FC<CurrencyInputComponentProps> = ({
  isColumn,
  onChange,
  currencyDescription
}: CurrencyInputComponentProps): JSX.Element => {
  const { CurrencyLabel } = ENTranslations;
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Number.parseInt(event.target.value);
    if (onChange) onChange(value);
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: isColumn ? 'column' : 'row', alignItems: 'center' }}>
      <TextField
        id='outlined-basic'
        label={CurrencyLabel}
        variant='outlined'
        type='number'
        onChange={handleChange}
      />
      <Typography variant='body1'>{currencyDescription}</Typography>
    </Box>
  );
};
