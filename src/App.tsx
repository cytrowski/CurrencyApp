import React, { FC, useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CurrencyExchangeComponent } from './components/CurrencyExchange/CurrencyExchangeComponent';
import ENTranslations from './helpers/translations/en';
import useAxiosClient, { RequestMethod } from './hooks/useAxiosClient';
import { CurrencyCode, currencyFromToDates } from './helpers/exchangeCurrency';

const App: FC = (): JSX.Element => {
  const [firstCurrencyInput, setFirstCurrencyInput] = useState<number>(0);
  const [secondCurrencyInput, setSecondCurrencyInput] = useState<number>(0);
  const [exchangePLNtoForeign, setExchangePLNtoForeign] = useState<number>(0);
  const [exchangeForeignToPLN, setExchangeForeignToPLN] = useState<number>(0);
  const { mainHeading, CurrencyFirst, CurrencySecond } = ENTranslations;
  const baseUrlUSD: string = currencyFromToDates(CurrencyCode.USD);
  const [USD, ErrorFetchUSD, isLoadingUSD] = useAxiosClient({
    baseUrl: baseUrlUSD,
    requestMethod: RequestMethod.GET
  });
  const fetchedUSD = USD?.data.rates[0].ask;

  useEffect(() => {
    if (!isLoadingUSD && firstCurrencyInput) {
      setExchangePLNtoForeign(firstCurrencyInput * fetchedUSD);
    }
  }, [firstCurrencyInput, isLoadingUSD, fetchedUSD]);

  useEffect(() => {
    if (!isLoadingUSD && secondCurrencyInput) {
      setExchangeForeignToPLN(secondCurrencyInput / fetchedUSD);
    }
  }, [isLoadingUSD, secondCurrencyInput, fetchedUSD]);

  const onFirstCurrencyChange = (value: number): void => {
    setSecondCurrencyInput(Math.round(value * 100) / 100);
  };

  const onSecondCurrencyChange = (value: number): void => {
    setFirstCurrencyInput(Math.round(value * 100) / 100);
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
            currencyFirstSignature={CurrencyFirst}
            currencySecondSignature={CurrencySecond}
            exchangeForeignToPLN={exchangeForeignToPLN}
            exchangePLNtoForeign={exchangePLNtoForeign}
          />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant='h1' textAlign='center'>
              {ErrorFetchUSD && ErrorFetchUSD}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
