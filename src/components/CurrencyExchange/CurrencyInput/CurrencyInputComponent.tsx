import { ChangeEvent, useEffect, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ENTranslations from '../../../helpers/translations/en';

export type CurrencyInputComponentProps = {
  currencyDescription: string;
  isColumn?: boolean;
  onChange?: (value: number) => void;
  valueCalculated: number;
};

export const CurrencyInputComponent = ({
  onChange,
  currencyDescription,
  valueCalculated
}: CurrencyInputComponentProps) => {
  const [val, setVal] = useState<number>();
  const { CurrencyLabel } = ENTranslations;
  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = Number.parseInt(event.target.value);
    if (onChange) onChange(value);
    setVal(value);
  };

  useEffect(() => {
    setVal(valueCalculated);
  }, [valueCalculated]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        id='outlined-basic'
        label={CurrencyLabel}
        variant='standard'
        type='number'
        onChange={handleChange}
        value={val}
      />
      <Typography variant='body1'>{currencyDescription}</Typography>
    </Box>
  );
};
