import { useProducts } from '../hooks/products';
export function ProductPage() {
    const {products,addProduct} = useProducts()
    let id = document.location.pathname.slice(9)
    let title = products.find(product => product._id === id)?.title
    let text = products.find(product => product._id === id)?.text
    let price = products.find(product => product._id === id)?.price
    let foto = products.find(product => product._id === id)?.foto_url
    
    return(
        <div className='flex flex-col items-center pb-10'>
            <div className="text-4xl">{title}</div>
            <img src={foto} alt="" className='w-1/3'/>
            <div className="text-green-600 font-bold">{price} $</div>
            <div className="">{text}</div>
            <button className='bg-green-500 py-1 px-2 rounded'>Add to cart</button>
        </div>
    )
}