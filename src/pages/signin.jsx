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
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import SignUp from './signup';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
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
                        {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}

                        <Typography component="h1" variant="h5" fontWeight={"400"} fontFamily={"Russo One"} fontSize={"30px"} >
                            Sign In<span>.</span>
                        </Typography>

                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{
                                    mt: 3, mb: 2,
                                    fontFamily: 'helvetica',
                                    fontWeight: '400',
                                    backgroundColor: '#2756BD',
                                }}
                            >
                                Sign In
                            </Button>

                            <Grid container
                                sx={
                                    {

                                    }
                                }>
                                
                                <Grid item>
                                    <Link to="/signup" variant="body2" style={{
                                        textDecoration: 'none',
                                        fontSize: '14px',
                                        fontFamily: 'helvetica',
                                        fontWeight: '400',
                                        color: '#2756BD',

                                    }}
                                    >

                                        Don't have an account?{" Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            {/* <Copyright sx={{ mt: 5 }} /> */}
                        </Box>

                    </Box>



                </Grid>
            </Grid>

        </ThemeProvider>






    );
}