import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
    Link
  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { green, pink } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

function LogIn(){
    const navigate = useNavigate();
    return(
        <Container component="main" maxWidth="xs">
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{m:1, bgcolor: pink[900] }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
                Sign In
            </Typography>
            </Box>
            <form onSubmit={(event) => {
                navigate('/CardList')
                event.preventDefault();
            }}>
                <p><TextField 
                    label='Id' 
                    required
                    name='id'
                    fullWidth
                    autoComplete='id'
                    autoFocus
                    ></TextField></p>
                <p><TextField 
                    label='Password'
                    required 
                    fullWidth
                    type='password'
                    name='password'
                    autoComplete='current-password'
                    ></TextField></p>
                <Button type='submit'  variant='contained' sx={{mt:3}}>Sign In</Button>
            </form>
            
        </Container>
    )
}



export default LogIn;