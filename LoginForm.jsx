import React from 'react'
import {Box} from '@mui/system';
import {TextField} from '@mui/material';
import {Button }from '@mui/material'

function LoginForm() {
  return (
      <Box
      component="form"
      sx={{
       display: 'flex', flexDirection: 'column', flexGrow: '1'
      }}
      noValidate
      autoComplete="off"
    >
     <TextField label="Username"></TextField>
    <TextField label="Password"></TextField>
    <Button variant="contained">Login</Button>
      
    </Box>
  )
}
export default LoginForm