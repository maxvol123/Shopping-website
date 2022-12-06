import { useState } from 'react';
import { useProducts } from '../hooks/products';
import { Product } from './Product';
export function ProductPage() {
    const {products,addProduct} = useProducts()
    let id = document.location.pathname.slice(9)
    let title = products.find(product => product._id === id)?.title
    let text = products.find(product => product._id === id)?.text
    let price = products.find(product => product._id === id)?.price
    let foto = products.find(product => product._id === id)?.foto_url
    let rating = products.find(product => product._id === id)?.rating
    const [amount, setAmount] = useState(1)
    let ystars=""
    let bstars=""
    for (let index = 0; index < rating!; index++) {
        ystars+="★"
    }
    for (let index = 5-rating!; index > 0; index--) {
        bstars+="★"
    }
    console.log(ystars);
    console.log(bstars);
    
    return(
        <div className='flex flex-col items-center pb-10'>
            <div className="flex ">
            <img src={foto} alt="" className='w-96 mr-5'/>
            <div className="">
            <div className="text-4xl">{title}</div>
            
            <div className="text-green-600 font-bold">{price} $</div>
            <div className="flex text-2xl flex-row">    
            <p className="text-yellow-400">{ystars}</p>
            <p className="">{bstars}</p>
            <div className="text-xl ml-3 mt-0.5">({rating})</div>
            </div>
            <div className="flex justify-between w-[100px] mb-2">
            <button className='' onClick={()=>{setAmount(amount+1)}}>+</button><div className="">{amount}</div><button onClick={()=>{if(amount<=1){}else{setAmount(amount-1)}}}>-</button>
            </div>
            <button className='bg-green-500 py-1 px-2 rounded'>Add to cart</button>
            <div className="">{text}</div>
            <div className="">
                <div className="font-bold">Also Buy</div>
            </div>
            </div>
            </div>
        </div>
    )
}