import { useState } from "react"
import { IProduct } from "../models"
import { useProducts } from '../hooks/products';
interface ProductProps{
    product: IProduct
}
export function Product({product}:ProductProps) {
    const {products,addProduct} = useProducts()
    function AddToCart(id:any) {  
        let title = products.find(product => product._id === id)?.title
        let text = products.find(product => product._id === id)?.text
        let price = products.find(product => product._id === id)?.price
        let foto = products.find(product => product._id === id)?.foto_url
        let rating = products.find(product => product._id === id)?.rating


        if (localStorage.getItem("Cart")==null) {
            localStorage.setItem("Cart",JSON.stringify([]));
            let info = JSON.parse(localStorage.getItem("Cart")|| '{}')
            info.push({id:id,title:title,text:text,price:price,foto:foto,rating:rating,amount:amount})
            localStorage.setItem("Cart",JSON.stringify(info));

        }else{
        let info = JSON.parse(localStorage.getItem("Cart")|| '{}')
                for (let index = 0; index < info.length; index++) {
            if (id===info[index].id) {
                info[index].amount=info[index].amount+amount
                localStorage.setItem("Cart",JSON.stringify(info));
                return
            }
            
        }
        info.push({id:id,title:title,text:text,price:price,foto:foto,rating:rating,amount:amount})
        localStorage.setItem("Cart",JSON.stringify(info));
        }
    }
    const [amount, setAmount] = useState(1)
    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 last:mb-5 w-[700px]">
        <img src={product.foto_url} className="w-1/2 mb-3" alt="" />
        <a href={"/product/"+product._id} className=""><p className="hover:underline">{product.title}</p></a>
        <p className="text-xl text-green-600">{product.price}$</p>
        
        <div className="flex justify-between w-[100px] mb-2">
            <button className='' onClick={()=>{setAmount(amount+1)}}>+</button><div className="">{amount}</div><button onClick={()=>{if(amount<=1){}else{setAmount(amount-1)}}}>-</button>
            </div>
            <button className='bg-green-500 py-1 px-2 rounded' onClick={()=>{AddToCart(product._id); setAmount(1)}}>Add to cart</button>


        </div>
    )
}