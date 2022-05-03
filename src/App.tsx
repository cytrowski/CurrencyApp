import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { CurrencyExchange } from './components/CurrencyExchange/CurrencyExchange';
import ENTranslations from './helpers/translations/en';
import { useExchangeRates } from './contexts/ExchangeRates';

const App = () => {
  const { mainHeading } = ENTranslations;
  const { fetchedUSD, isLoadingUSD, errorFetchUSD } = useExchangeRates();

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
        <Grid
          item
          xs={12}
          sx={{
            opacity: isLoadingUSD ? 0.5 : undefined,
            pointerEvents: isLoadingUSD ? 'none' : undefined
          }}
        >
          <CurrencyExchange rate={fetchedUSD} />
        </Grid>
        <Grid item xs={12}>
          <Box>
            <Typography variant='h1' textAlign='center'>
              {errorFetchUSD}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
