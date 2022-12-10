import { useState, useEffect } from "react"

export function Cart() {
    let info = JSON.parse(localStorage.getItem("Cart")|| '{}')
    const [total,setTotal]=useState(0)
    useEffect(()=>{ 
        let q = 0
    for (let i = 0; i < info.length; i++) {
        console.log(total);
        console.log((info[i].price*info[i].amount)+total);
        
        q=info[i].price*info[i].amount+q
        console.log(q);
    }
    setTotal(q)
}, [])
    return(
        <>
        <div className="">
            <div className="text-5xl text-center">CART</div>
        {info.map((product:any)=><div className="max-w-[200px]"><div className='mr-5 max-w-[200px] hover:underline'><a href={"/product/"+product._id} className="w-[10px]"><img className='h-52' src={product.foto} alt="" />{product.title}</a></div><div className="text-green-600 font-bold">{product.price}$</div><div className="flex justify-between w-[100px] mb-2"><button className='' >+</button><div className="">{product.amount}</div><button>-</button></div></div>)}
        </div>
        <div className="text-3xl">Total: {total}</div>
        </>
    )
}