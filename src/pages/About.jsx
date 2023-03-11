import { Button, Link as A } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <Box sx={{ marginTop: '50px' }}>
        <Button color='secondary' variant='contained'>
        contacts
        </Button>
        <Button color='error' variant='contained'>
        location
        </Button>
        <Button color='success' variant='contained'>
        address
        </Button>
      </Box>
      <Outlet />
    </div>
  )
}

export default About
