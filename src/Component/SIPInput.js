import { Box, Button, TextField, Typography, InputLabel } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { PieChart } from './PieChart';




const SIPinput = () => {


  const [inputs, setinput] = useState({
    sipamount:"",
    sipduration:"",
    sipinterest:"" 
  });
  const [data, setData] = useState({
    totalInvestment:0, 
    totalReturn: 0,
     returnOnInvestment: 0
    })
const [isCalculated, setIsCalculated] = useState(false);
  const handleChange = (e) => {
    setinput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const sendRequest = async () => {
    const respone = await fetch('http://localhost:4000/api/sip/sipcalculator', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sipamount: inputs.sipamount,
            sipduration: inputs.sipduration,
            sipinterest: inputs.sipinterest
        })
        });
    const res = await respone.json();
    if(res.status===400){
        alert(res.message);
    }else{
        return res;
        }

   
  };

  const handleSubmit = (e) => {
    e.preventDefault();


      sendRequest()
      .then((data)=>{
            setData({
              totalInvestment: data.totalInvestment,
              totalReturn: data.totalReturn,
              returnOnInvestment: data.returnOnInvestment
            })
            setIsCalculated(true);
            
      })
    };
 
  return (
    <div>
      {!isCalculated&&<form onSubmit={handleSubmit}>
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
          <Typography fontFamily={'ui-monospace'} variant='h4' padding={3} textAlign={'center'}>
            SIP Calculator
          </Typography>
         <InputLabel sx={{marginTop:3}}>SIP Amount</InputLabel>
        <TextField name='sipamount' onChange={handleChange} value={inputs.sipamount} type='text' placeholder='1200'  margin='normal'/>
         <InputLabel sx={{marginTop:3}}>SIP Duration(in Year)</InputLabel>
        <TextField name='sipduration' onChange={handleChange} value={inputs.sipduration} type='text' placeholder='2' margin='normal'/>
        <InputLabel sx={{marginTop:3}}>SIP Interest (in % p.a)</InputLabel>
        <TextField name='sipinterest' onChange={handleChange} value={inputs.sipinterest} type='text' placeholder='12' margin='normal'/>
          <Button 
            type='submit'
            variant ="contained" 
            sx={{borderRadius:3, marginTop:3}} 
            color='warning' >
            Calculate</Button>
          
        </Box>
      </form>}
      {isCalculated&&<PieChart
        totalInvestment={data.totalInvestment}
        totalReturn={data.totalReturn}
        returnOnInvestment={data.returnOnInvestment}
        setIsCalculated={setIsCalculated}
        />}

    </div>
  )
}
export default SIPinput;

