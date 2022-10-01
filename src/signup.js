import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {
    Link
  } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import { green, pink } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import KeyIcon from '@mui/icons-material/Key';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import { useState } from 'react';
import axios from 'axios';

function SignUp(){
    const [name, SetName] = useState("");
    const [id, SetId] = useState("");
    const [password, SetPassword] = useState("");

    const NameHandler = (e) => {
        SetName(e.target.value);
      };

    const IdHandler = (e) => {
        SetId(e.target.value);
      };
    
    const passwordHandler = (e) => {
        SetPassword(e.target.value);
      };

    const SaveInfo = () => {
        axios
        .post('http://localhost:3307/user', )
        .then((res) => {})
        .catch((err)=>{
            
          });
    }

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
                <KeyIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
                Sign Up
            </Typography>
            </Box>

            
            <div>
                <label>Name</label>
            </div> 
                <input type="Name" required="true" value={name} onChange={NameHandler}></input>
            <div>  
                <label>ID</label>
            </div>
                <input type="Id" required="true" value={id} onChange={IdHandler}></input>
            <div>
                <label>Password</label>
            </div> 
                <input
                    type="password"
                    value={password}
                    required="true"
                    onChange={passwordHandler}
                ></input>
               
            <div>
                <Button sx={{mt:2}} color="secondary" onClick={SaveInfo} variant="contained">Save</Button>
            </div>
            
        </Container>
    )
}

export default SignUp;