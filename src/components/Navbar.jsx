import { Box, Button } from '@mui/material'
import { NavLink, Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const active = ({ isActive }) => {
    return isActive
      ? { color: 'black', fontSize: '26px' }
      : { color: 'blue', textDecoration: 'none', fontSize: '20px' }
  }
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 99,
        width: '100%',
        height: '64px',
        background: '#0d0c0c9f',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <NavLink style={active} to='/'>
        home
      </NavLink>
      <NavLink style={active} to='/users'>
        users
      </NavLink>
      <NavLink style={active} to='/about'>
        about
      </NavLink>
      <NavLink style={active} to='/contact'>
        contact
      </NavLink>
      <Button variant='contained'>login</Button>
    </Box>
  )
}
export default Navbar
