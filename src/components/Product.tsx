import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps{
    product: IProduct
}
export function Product({product}:ProductProps) {
    const[details, setDetails]=useState(false)
    return(
        <div className="border py-2 px-4 rounded flex flex-col items-center mb-2 last:mb-5"
        >{product.title}
        <img src={product.foto_url} className="w-1/6 mb-3" alt="" />
        {/* <span className="text-green-700 font-semibold">{product.price}$</span> */}
        <button className="bg-yellow-400 py-2 px-4 border ease-in duration-300 roundedxxxx hover:bg-yellow-300 hover:py-2.5 hover:px-6 "
        onClick={
            ()=>{
                setDetails(prev=>!prev)
            }
        }
        >{details ? "Hide description": "Show description"}</button>

    { details&&<div className="">{product.text}</div>}
        </div>
    )
}