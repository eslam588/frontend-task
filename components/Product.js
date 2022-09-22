import React from 'react'
import "../styles/Product.module.scss";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from  "../styles/Product.module.scss";
import {HeaderContext} from "./../contextApi/HeaderContext"
import {useContext} from "react";
import Link from "next/link";

const Product = ({product}) => {

  const value = useContext(HeaderContext);

  const addCart = value.addCart;

  return (
     <Card sx={{ width:300 , maxHeight:450  }} className={styles.card}>
      <Link href={`/products/${product.id}`}>
      <img src={product.image} width="250px" height="250px"/>
      </Link>
      <CardContent>
        <Typography gutterBottom variant="h9" component="div">
          {product.title.slice(0,30)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {product.category}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <div className={styles.prow}>
            <p>price : {product.price}$</p>
            {/* <p>countity :{product.rating.count}</p> */}
          </div> 
        </Typography>
      </CardContent>
      <CardActions className={styles.addcart}>
        <Button size="small" onClick={() => addCart(product.id)}>add to cart</Button>
      </CardActions>
    </Card>
  )
}

export default Product