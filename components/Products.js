import React , {useContext} from 'react'
import {HeaderContext} from "./../contextApi/HeaderContext"
import Product from "./Product";

import CircularProgress from '@mui/material/CircularProgress';

import styles from  "../styles/Products.module.scss"

const products = () => {
  const value = useContext(HeaderContext);

  const products = value.products[0];
  return (
    <div className={styles.flex}>
      {products.length>0 ? products.map((product)=>{
        return(
          <Product product={product}/>
        )  
      })
      :<CircularProgress className={styles.loading}  />
    }
    </div>
  )
}

export default products