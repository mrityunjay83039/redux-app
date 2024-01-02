import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';

function Products() {

    const [products, setProducts] = useState([]);

    const dispatch = useDispatch();

    let handleAdd = (product)=>{
        dispatch(add(product));
    }

    useEffect(()=>{
        const getProducts = async ()=>{
            const res = await axios.get('https://fakestoreapi.com/products')
            setProducts(res.data)
            console.log(res.data)
        }
        getProducts();
    },[])

    

    return (
        <div className='productsWrapper'>
            {
                products.map((product)=>{
                    return <div className='card'>
                        <img src={product.image} alt=''/>
                        <h6>{product.title}</h6>
                        <h5>{product.price}</h5>

                        <button onClick={()=>handleAdd(product)} className='btn'>Add to cart</button>
                    </div>
                })
            }
        </div>
        
    )
}

export default Products