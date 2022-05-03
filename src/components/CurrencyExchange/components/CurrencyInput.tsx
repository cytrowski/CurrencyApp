import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

interface Props {
  currencyDescription: string;
  onChange?: (value: number) => void;
  valueCalculated: number;
}

export const CurrencyInput = ({ onChange, currencyDescription, valueCalculated }: Props) => {
  const [val, setVal] = useState<string>('');
  const [formatError, setFormatError] = useState(false);

  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;

    setFormatError(Number(value).toString() !== value);

    if (onChange) {
      onChange(Number(value));
    }
    setVal(value);
  }, []);

  useEffect(() => {
    setVal(String(valueCalculated));
  }, [valueCalculated]);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <TextField
          id='outlined-basic'
          label={currencyDescription}
          variant='standard'
          onChange={handleChange}
          value={val}
          error={formatError}
        />
      </Box>
    </>
  );
};
