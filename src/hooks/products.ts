import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IProduct } from '../models';
export function useProducts() {

const [products, Setproducts] = useState<IProduct[]>([])

function addProduct(product:IProduct) {
  Setproducts(prev=>[...prev, product])
}

async function fetchProducts() {
  try {
    const response = await axios.get<IProduct[]>('https://backend-bfwe.onrender.com/posts') 
    Setproducts(response.data) 
  } catch (e) {
    const error = e as AxiosError
  }

}
useEffect(()=>{
  fetchProducts()
},[])
return{products,addProduct}
}