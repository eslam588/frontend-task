import { useState , useEffect} from "react";
import {HeaderContext} from './../contextApi/HeaderContext';

const ContextWrapper = (props) => {
    const [products , setProducts] = useState([]);

    // fetch data from server
    const  getallproducts = async () => {
        const products = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => json);
        setProducts(products)
    }
    
    useEffect(() => {
        getallproducts();
     },[])

    
  
    const [cart , setCart]= useState([]);


    // add to cart ..............................................

    const addCart = (id) => {
        const check = cart.every(item => {
            return item.id !== id
        })
        if(check){
            const updateddata = products.map((product) => true &&  {...product , qty: 1} )
            const data = updateddata.filter(product =>{
                return product.id === id
            })
        setCart([...cart , ...data])
        }
        else{
            alert("the product has been added to cart");
        }
    }

    // update count increment   .......................................

     const increment = (id) => {
        let itemscart = cart.map(item => {
            if (item.id === id) {
                item = { ...item, qty :  item.qty+1  }

            }
            return item;
        })
        setCart(itemscart);
      }

      // update count decrement   .......................................

     const decrement = (id) => {
        let itemscart = cart.map(item => {
            if (item.id === id) {
                if (item.qty > 1) {
                    item = { ...item, qty : item.qty-1  }
                }
            }
            return item;
        })
        setCart(itemscart);

    }
   // delete from cart ......................................
    const deleteItem = (id) => {
        let itemscart = cart.filter(item => item.id !== id)
        setCart(itemscart);
    }


    const totalPriceForItems = () =>{
        const total = cart.reduce((prev, item)=>{
            return prev + (item.price * item.qty)
        },0)
        return total ;
    }
    



    //  all data to passes all components ........................
   

    useEffect(() =>{
        const dataCart = JSON.parse(localStorage.getItem('dataCart')) 
        if(dataCart) setCart(dataCart)
    },[])


    useEffect(() =>{
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])
  

    const value = {
        products : [products,setProducts],
        cart : [cart,setCart],
        addCart : addCart,
        deleteItem: deleteItem,
        increment:increment,
        decrement:decrement,
        totalPriceForItems,
        totalPriceForItems
    }

    return (
        <>
        <HeaderContext.Provider value={value}>
           {props.children}
        </HeaderContext.Provider>
        </>
    )
}
export default  ContextWrapper;



// export async function getStaticProps() {
//     const products = await fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => json);
// return {
//   props : {
//     products : products
//   }
// }
// }