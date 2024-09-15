import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import SignInCard from './SignInCard';

export default function SignInSide() {
  return (
  <>
    <CssBaseline enableColorScheme />
          <Stack 
           direction={{ xs: 'column-reverse', md: 'row' }}
           sx={{
            justifyContent: 'center',
            gap: { xs: 6, sm: 12 },
            p: 2,
            m: 'auto',
            fontSize: {xs:20, sm:30},
            fontFamily:"sans-serif",
            fontWeight:"bold"
          }}
           >
            Ne⚔️Peek 
          </Stack>
          <Stack
            direction={{ xs: 'column-reverse', md: 'row' }}
            sx={{
              justifyContent: 'center',
              gap: { xs: 6, sm: 12 },
              p: 2,
              m: 'auto',
            }}
          >
            <SignInCard />
          </Stack>
    </>
  );
}
