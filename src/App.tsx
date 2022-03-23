import React, { FC } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ENTranslations } from './helpers/translations/en';

const App: FC = (): JSX.Element => {
  const { mainHeading } = ENTranslations;

  return (
    <Container maxWidth='xl'>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <Typography variant='h1' textAlign='center'>
              {mainHeading}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box></Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
