import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router'


const Login = () => {


  const [inputs, setinput] = useState({
    name: '',
    email: '',
    password: ''
  });

  const router = useRouter();

  const handleChange = (e) => {
    setinput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendRequest = async () => {
    // const res= await axios.post(`http://localhost:4000/api/user/${type}`, {
    //   email: inputs.email,
    //   password: inputs.password
    // }).catch((err) => {console.log(err)});

    const respone = await fetch('http://localhost:4000/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: inputs.email,
            password: inputs.password
        })
        });
    const res = await respone.json();
    if(res.status===400){
      alert(data.message);
        router.push("/");
    }else{
      return res;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      sendRequest()
      .then((data)=>{
            localStorage.setItem('Name', data.user.name);
            localStorage.setItem('token', data.token);
      
      })
      .then(()=>router.push("/main"));
  }
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box 
          display='flex' flexDirection="column" 
          alignItems="center" justifyContent={"center"}
          boxShadow="10px 10px 20px #ccc"
          padding={3}
          margin='auto'
          marginTop={5}
          borderRadius={5}
          maxWidth={400}
          >
          <Typography fontFamily={'ui-monospace'} variant='h2' padding={3} textAlign={'center'}>
            Login
          </Typography>

          <TextField name='email' onChange={handleChange} value={inputs.email} type='email' placeholder='Email'  margin='normal'/>
          <TextField name='password' onChange={handleChange} value={inputs.password} type='password' placeholder='Password' margin='normal'/>
          <Button 
            type='submit'
            variant ="contained" 
            sx={{borderRadius:3, marginTop:3}} 
            color='warning' 
            >
            Submit
            
            </Button>
          <Button 
            sx={{borderRadius:3,marginTop:3}} >
             <Link href={"/signup"}> Dont have an account? Signup</Link>
            </Button>
          
        </Box>
      </form>
    </div>
  )
}
export default Login;
