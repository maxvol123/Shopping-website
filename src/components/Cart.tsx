import { useState, useEffect } from "react"

export function Cart() {
    const [total,setTotal]=useState(0)
    const [info,setInfo]=useState(JSON.parse(localStorage.getItem("Cart")|| "{}"))
    useEffect(()=>{ 
        let q = 0
    for (let i = 0; i < info.length; i++) {
        q=info[i].price*info[i].amount+q
    }
    setTotal(q)
}, [])
function Set(id:any) {
    let info = JSON.parse(localStorage.getItem("Cart")|| '{}')
    let index = info.findIndex((a:any) => a.id == id)
    info[index].amount=info[index].amount+1
    localStorage.setItem("Cart",JSON.stringify(info));
    info = JSON.parse(localStorage.getItem("Cart")|| '{}')
    let q = 0
    for (let i = 0; i < info.length; i++) {
        q=info[i].price*info[i].amount+q
    }
    setInfo(info)
    setTotal(q)
}
function Minus(id:any) {
    let info = JSON.parse(localStorage.getItem("Cart")|| '{}')
    let index = info.findIndex((a:any) => a.id == id)
    if (info[index].amount<=1) {
        
    }else{
    info[index].amount=info[index].amount-1
    localStorage.setItem("Cart",JSON.stringify(info));
    info = JSON.parse(localStorage.getItem("Cart")|| '{}')
    let q = 0
    for (let i = 0; i < info.length; i++) {
        q=info[i].price*info[i].amount+q
    }
    setInfo(info)
    setTotal(q)}
}
    return(
        <>
        <div className="">
            <div className="text-5xl text-center">CART</div>
            <div className="flex justify-center">
            <div className="flex flex-col  mt-5">
        {localStorage.getItem("Cart")&&info.map((product:any)=><div className="mb-5 flex"><div className='mr-5 h-1/2 hover:underline'><img className='h-52' src={product.foto} alt="" /></div><div><a href={"/product/"+product._id} className="w-[10px]">{product.title}</a><div className="text-green-600 font-bold">{product.price}$</div><div className="flex justify-between w-[100px] mb-2"><button className='' onClick={()=>Set(product.id)} >+</button><div className="">{product.amount}</div><button onClick={()=>Minus(product.id)}>-</button></div><div className="w-1/3">{product.text}</div></div></div>)}
        </div>
        </div>
        </div>
        <a className=" hover:underline" onClick={()=>localStorage.removeItem("Cart")} href="/cart">CleanCart</a>
        <div className="text-3xl">Total: {total}</div>
        </>
    )
}