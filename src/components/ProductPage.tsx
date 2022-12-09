import { useState } from 'react';
import { useProducts } from '../hooks/products';
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
    function AddToCart() {
        if (localStorage.getItem("Cart")==null) {
            localStorage.setItem("Cart",JSON.stringify([]));
            let info = JSON.parse(localStorage.getItem("Cart")|| '{}')
            info.push({id:id,title:title,text:text,price:price,foto:foto,rating:rating},amount)
            localStorage.setItem("Cart",JSON.stringify(info));
            console.log(info);

        }else{
        let info = JSON.parse(localStorage.getItem("Cart")|| '{}')
                for (let index = 0; index < info.length; index++) {
            if (id===info[index].id) {
                console.log(index);
                info[index+1]=info[index+1]+amount
                localStorage.setItem("Cart",JSON.stringify(info));
                return
            }
            
        }
        info.push({id:id,title:title,text:text,price:price,foto:foto,rating:rating},amount)
        localStorage.setItem("Cart",JSON.stringify(info));
        }
    }
    for (let index = 0; index < rating!; index++) {
        ystars+="★"
    }
    for (let index = 5-rating!; index > 0; index--) {
        bstars+="★"
    }
    console.log(ystars);
    console.log(bstars);
    
    return(
        <div className='flex flex-col items-center pb-10 max-h-[600px] flex-wrap'>
            <div className="flex flex-wrap justify-center">
            <img src={foto} alt="" className='h-[600px] mr-5'/>
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
            <button className='bg-green-500 py-1 px-2 rounded' onClick={()=>AddToCart()}>Add to cart</button>
            <div className="">{text}</div>
            <div className="">
                <div className="font-bold">Also Buy</div>
                <div className="flex overflow-hidden flex-wrap">
                {products.map(product=><div className='mr-5 max-w-[200px] hover:underline'><img className='h-52' src={product.foto_url} alt="" /> <a href={"/product/"+product._id} className="w-[10px]">{product.title}</a></div>)}
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}