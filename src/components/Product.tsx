import { useState } from "react"
import { IProduct } from "../models"

interface ProductProps{
    product: IProduct
}
export function Product({product}:ProductProps) {
    return(
        <a href="/" className="border py-2 px-4 rounded flex flex-col items-center mb-2 last:mb-5 w-[700px]">
        <img src={product.foto_url} className="w-1/2 mb-3" alt="" />
        <p className="hover:underline">{product.title}</p>
        </a>
    )
}