import { ChangeEvent, useEffect, useState } from 'react';
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ENTranslations from '../../../helpers/translations/en';

interface Props {
  currencyDescription: string;
  isColumn?: boolean;
  onChange?: (value: number) => void;
  valueCalculated: number;
}

export const CurrencyInput = ({ onChange, currencyDescription, valueCalculated }: Props) => {
  const [val, setVal] = useState<string>('');
  const { CurrencyLabel } = ENTranslations;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    if (onChange) {
      onChange(Number(value));
    }
    setVal(value);
  };

  useEffect(() => {
    setVal(String(valueCalculated));
  }, [valueCalculated]);

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        id='outlined-basic'
        label={CurrencyLabel}
        variant='standard'
        onChange={handleChange}
        value={val}
      />
      <Typography variant='body1'>{currencyDescription}</Typography>
    </Box>
  );
};
