import React from 'react';
import { useState } from 'react';
import {AppBar, Button, Toolbar,Box, Typography, Tabs,Tab} from "@mui/material";
import Link from 'next/link';
import { useRouter } from 'next/router'

export const Navbar = () => {
 
  const [value, setValue] = useState();
  const router = useRouter();

  return (
    <AppBar 
      position="sticky"
      sx={{background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,120,100,1) 35%, rgba(0,212,255,1) 100%)"}}    
      >
        <Toolbar>
            <Typography fontFamily={'cursive'} variant="h4">SIP Calculator</Typography>


            <Box  display='flex' marginLeft="auto">
              {/* <Typography marginTop={2} fontFamily={'sans-serif'} >{localStorage.getItem('Name')}</Typography> */}
              <Button 
                onClick={() =>{
                    localStorage.clear();
                    router.push('/');
                }
                }
                variant='contained' 
                sx={{margin:1,borderRadius: 5}} 
                color="warning">
                Logout
              </Button>
            </Box>
        </Toolbar>
    </AppBar>
  );
}