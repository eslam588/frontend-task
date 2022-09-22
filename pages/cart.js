import React , {useContext,useState} from 'react'
import Head from "next/head"
import {HeaderContext} from '../contextApi/HeaderContext';
import styles from "../styles/Cart.module.scss";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const cart = () => {
  const value = useContext(HeaderContext);
  const  {deleteItem , increment, decrement,totalPriceForItems} = value;
  const cartitems = value.cart[0];
  
  return (
    <>
       <Head>
          <title>Cart page</title>
          <meta name="description" content="Cart" />
        </Head>
       <div >
        {
          cartitems.length > 0 ? cartitems.map((item, index) => (
            <>
              <div className={styles.cartItem} key={index}>
                <img src={item.image} width="100px" height="100px" />
                <p>{item.title.slice(0,20)}</p>
                <p>Quantity
                  <p>
                    <button onClick={()=>decrement(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={()=>increment(item.id)}>+</button>
                  </p>
                </p>
                <p>total price:{item.price*item.qty}</p>
                <button onClick={()=> deleteItem(item.id)}>
                   <DeleteForeverIcon/>
                </button>
             </div>  
             </> 
          )) : <p className={styles.pemptycart}>no products in cart</p>
        }
        <div className={styles.total}>
         <p>totalprice : {totalPriceForItems()} $</p> 
         <p>totalitems : {cartitems.length} items</p>
        </div>
       </div>
    </>
    
  )
}

export default cart