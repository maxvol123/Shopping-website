import { useProducts } from '../hooks/products';
import { Product } from './Product';
export function Goods() {
    
    const {products} = useProducts()
    return(
        <div className="flex flex-wrap">
        {products.map(product=><div className="w-[700px]"><Product product={product} key={product._id}/></div>)}
        </div>
    )
}