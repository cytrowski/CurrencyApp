import { FC, ReactNode } from 'react';
import { Box } from '@mui/system';

export type CurrencyFromComponentProps = {
  children?: ReactNode;
};

export const CurrencyFromComponent: FC<CurrencyFromComponentProps> = ({
  children
}: CurrencyFromComponentProps): JSX.Element => {
  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        backgroundColor: 'burlywood',
        padding: '1rem',
        border: '2px solid white'
      }}
      noValidate
      autoComplete='off'
    >
      {children}
    </Box>
  );
};
