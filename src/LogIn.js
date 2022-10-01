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
import { useState } from 'react';
import axios from 'axios';

function LogIn(){

    const navigate = useNavigate();
    const [id, SetId] = useState("");
    const [password, SetPassword] = useState("");

    const IdHandler = (e) => {
        SetId(e.target.value);
      };
    
      const passwordHandler = (e) => {
        SetPassword(e.target.value);
      };
    
      const submitHandler = (e) => {
        // e.preventDefault();
        // state에 저장한 값을 가져옵니다.
        console.log(id);
        console.log(password);
    
        let body = {
          id: id,
          password: password,
        };
    
        axios
          .post('http://localhost:3307/login', body)
          .then((res) => {
            
            console.log(res.data[0].USER_ID+ " res front");
            
            if(res.data[0].USER_ID === id){
                //alert(id + "님 로그인하셨습니다.");
               //navigate("/CardList");
            }
            

            
          })
          .catch((err)=>{
            console.log(err + " err front");
            console.log(err.message + " err front");
            console.log(err.code + " err front");
            alert(err + " err front");
          })
          ;
      };

    const pageSignUp = (e) =>{
        navigate("/SignUp");
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
                <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
                Sign In
            </Typography>
            </Box>
            
            <form //form의 submit은 기본 베이스가 리다이렉트로 누르면 그냥 새로고침이됨. 그래서 preventDefault로 막았던거 같음.
                onSubmit={submitHandler}
                style={{ display: "flex", flexDirection: "Column" }}
                >
                <label>ID</label>
                <input type="Id" required="true" value={id} onChange={IdHandler}></input>
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    required="true"
                    onChange={passwordHandler}
                ></input>
                <Button sx={{mt:1}} type="submit" variant="contained">Sign In</Button>
            </form>
            <Button sx={{mt:2}} color="secondary" onClick={pageSignUp} variant="contained">Sign Up</Button>
        </Container>
    )
}



export default LogIn;