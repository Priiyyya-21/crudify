import React from 'react'
import { AppBar,Box, Button, Toolbar } from '@mui/material'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <AppBar sx={{ p: "0 5%" }}>
      <Toolbar  sx={{ justifyContent:"space-between" }}>
        <h3>SolveSpot</h3>
        <Box sx={{display:"flex",alignItems:"center",gap:3}}>
        <Button>  <Link style={{color:"#fff" ,textDecoration:"none"}} to={"/"}> Home </Link></Button>
        <Button> <Link style={{color:"#fff" ,textDecoration:"none"}} to={"/Login"}> Login  </Link></Button>
        <Button> <Link style={{color:"#fff" ,textDecoration:"none"}}to={"/Register"}>Register </Link></Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar