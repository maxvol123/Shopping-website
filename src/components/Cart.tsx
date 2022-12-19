import { useState, useEffect } from "react"

export function Cart() {
    const [total,setTotal]=useState(0)
    const [info,setInfo]=useState(JSON.parse(localStorage.getItem("Cart")|| "{}"))
    const [show,setShow]=useState(true)
    useEffect(()=>{ 
        let q = 0
    for (let i = 0; i < info.length; i++) {
        console.log((info[i].price*info[i].amount)+total);    
        q=info[i].price*info[i].amount+q
    }
    setTotal(q)
    if (localStorage.getItem("Cart")===null) {
        setShow(false)
    }
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
console.log(show);
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
        {show&&info.map((product:any)=><div className="max-w-[200px]"><div className='mr-5 max-w-[200px] hover:underline'><a href={"/product/"+product._id} className="w-[10px]"><img className='h-52' src={product.foto} alt="" />{product.title}</a></div><div className="text-green-600 font-bold">{product.price}$</div><div className="flex justify-between w-[100px] mb-2"><button className='' onClick={()=>Set(product.id)} >+</button><div className="">{product.amount}</div><button onClick={()=>Minus(product.id)}>-</button></div></div>)}
        </div>
        <button className="bg-red-600 px-2 py-1 rounded hover:bg-red-700 w-16 mt-5" onClick={()=>localStorage.removeItem("Cart")}><a href="/">CleanCart</a></button>
        <div className="text-3xl">Total: {total}</div>
        </>
    )
}