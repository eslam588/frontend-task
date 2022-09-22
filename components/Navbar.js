import React,{useContext} from 'react'
import Link from "next/link"
import {HeaderContext} from "./../contextApi/HeaderContext"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import styles from "../styles/Navbar.module.scss";


const Navbar = () => {

  const value = useContext(HeaderContext);
  const cart = value.cart[0].length ;

  console.log(cart);



  return (
    <div>     
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                   <Link href="/">Home</Link>
              </Typography>
              <Button color="inherit" className={styles.cartbutton}>
                  <Link href="/cart">
                     <ShoppingCartIcon/>
                  </Link>
                  <span>{cart? cart : 0}</span>
              </Button>
            </Toolbar>
          </AppBar>
        </Box>
    </div>
   
    
   

  
  )
}

export default Navbar