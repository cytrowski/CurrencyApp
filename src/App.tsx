import React, { FC, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CurrencyExchangeComponent } from './components/CurrencyExchange/CurrencyExchangeComponent';
import ENTranslations from './helpers/translations/en';

const App: FC = (): JSX.Element => {
  const [firstCurrency, setFirstCurrency] = useState<number>(0);
  const [secondCurrency, setSecondCurrency] = useState<number>(0);
  // const [exchange, setExchange] = useState<number>(0); TODO Add business logic
  const { mainHeading, CurrencyFirst, CurrencySecond } = ENTranslations;

  const onFirstCurrencyChange = (value: number): void => {
    setFirstCurrency(value);
  };

  const onSecondCurrencyChange = (value: number): void => {
    setSecondCurrency(value);
  };

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2} direction='column' alignItems='center' justifyContent='center'>
        <Grid item xs={12}>
          <Box>
            <Typography variant='h1' textAlign='center'>
              {mainHeading}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <CurrencyExchangeComponent
            onSecondCurrencyChange={onSecondCurrencyChange}
            onFirstCurrencyChange={onFirstCurrencyChange}
            firstCurrency={firstCurrency}
            secondCurrency={secondCurrency}
            currencyFirst={CurrencyFirst}
            currencySecond={CurrencySecond}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
