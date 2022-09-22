import React from 'react'
import styles from "../../styles/ProductDetails.module.scss";
import { HeaderContext } from '../../contextApi/HeaderContext';
import {useContext} from "react";

const product = (props) => {
  const {product} = props
  const value = useContext(HeaderContext);

  return (
    <div className={styles.productdetails}>
       <img src={product.image} heigt="200px" width="400px"/>
       <div className={styles.productdescription}>
           <p>name :{product.title}</p>
           <p> description : {product.description}</p>
           <p>category : {product.category}</p>
           <p>price : {product.price}$</p>
           <button onClick={()=>value.addCart(product.id) }>add to cart</button>

       </div>
    </div>
  )
}

export default product


export async function getServerSideProps(context){
  const res= await fetch(`https://fakestoreapi.com/products/${context.params.id}`);
  const data= await res.json();
  return{
    props:{
      product:data
    }
  }
}