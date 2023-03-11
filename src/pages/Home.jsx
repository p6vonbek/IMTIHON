import React from 'react'
import App from '../components/App'
import Test from '../components/Test'
import { Box } from '@mui/system'
import { Button, TextField } from '@mui/material'

const Home = () => {
  return (
    <div>
      <Test />
      <Box>
        <TextField/>
        <Button variant='contained'>bos</Button>
      </Box>
    </div>
  )
}

export default Home
