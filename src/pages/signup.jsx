import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom'
import SignIn from '../App  ';

const defaultTheme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
        >
          <Box
            sx={{
              
              
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '10%',
              
              h1: {
                fontFamily: 'Russo One, sans-serif',
                fontWeight: '400',
                fontStyle: 'normal',
                fontSize: '70px',
                color: '#2756BD',
              },
              span: {
                color: 'green',
              },

              '@media (max-width: 600px)': 
              {
                display: 'none',
              }
            }}
          

          >
            <h1>Haazri<span>.</span></h1>
            <p></p>

          </Box>

        </Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',

              fontStyle: 'normal',
                color: '#2756BD',

                span:
                {
                  color: 'green',
                },

            }}
          >
           
           <Typography component="h1" variant="h5" fontWeight={"400"} fontFamily={"Russo One"} fontSize={"30px"} >
              Sign Up<span>.</span>
            </Typography>
   
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              
            </Grid>
            <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, 
                    fontFamily: 'helvetica',
                    fontWeight: '400',
                  backgroundColor: '#2756BD',
                  }}
                >
                  Sign Up
                </Button>
              
            </Box>
           
          </Box>
          
        </Grid>
      </Grid>
      
    </ThemeProvider>




  );
}