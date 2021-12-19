import React, { useContext } from 'react';
import { Box, Button, Container, Grid } from '@mui/material';
import { Context } from '../../context/context';
import firebase from 'firebase';

const Auth = () => {
  const { auth } = useContext(Context);
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <Container>
      <Grid container alignItems={'center'} justifyContent={'center'}>
        <Grid className={'form'}>
          <Box p={5}>
            <Button onClick={login} variant={'outlined'}>
              Log in with google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Auth;
