import Header_foto from "./img/Header_main.png"
import Amazon from "./img/Amazon.png"
import HM from "./img/HM.png"
import Lacoste from "./img/Lacoste.png"
import OBEY from "./img/OBEY.png"
import Shopify from "./img/Shopify.png"
import Levis from "./img/Levis.png"
import Hoodies from "./img/Hoodies.png"
import Arrow from "./img/Arrow.png"
import Coats from "./img/Coats.png"
import Tees from "./img/Tees.png"
import One from "./img/One.png"
import Two from "./img/Two.png"
import Phone from "./img/Phone.png"
import Apple from "./img/Apple.png"
import Google from "./img/Google.png"
import {useEffect} from "react"
import axios from "./components/Axios"
import { useProducts } from './hooks/products';
import { Product } from "./components/Product"
function App() {
useEffect(()=>{
  axios.get("/posts")
},[])

const {products} = useProducts()
  return (
    <div className="App">
      <header className="">
        <main className="header_main flex m-5 rounded-3xl justify-between p-3 pb-0 pl-10 pr-40">
          <div className="text-6xl">
          <div className="font-bold white bg-white mb-1 w-44">LET’S</div>
          <div className="font-bold">EXPLORE</div>
          <div className="font-bold white yellow mb-1 w-64 mt-2">UNIQUE</div>
          <div className="font-bold mb-1">CLOTHES</div>
          <div className="text-xl mb-2 title">Live for Influential and Innovative fashion!</div>
          <div className="text-xl bg-black px-2 py-1 text-white text-center w-32 rounded cursor-pointer"><a href="/product"> Shop Now</a></div>
          </div>
          <img className="h-96 image" src={Header_foto} alt="" />
        </main>
        <footer className="yellow animation flex justify-between py-5 px-10 mt-16 scroll">
        <img src={HM} alt="" />
        <img src={OBEY} alt="" />
        <img src={Shopify} alt="" />
        <img src={Lacoste} alt="" />
        <img src={Levis} alt="" />
        <img src={Amazon} alt="" />
        </footer>
      </header>
      <main className="min-h-screen">
        <h1 className="font-bold text-4xl ml-5">NEW ARRIVALS</h1>
        <div className="flex mx-5 mt-3 justify-between flex-wrap arrivals">
          <div className="mb-7">
            <img className="foto" src={Hoodies} alt="" />
            <div className="flex justify-between">
            <div className="flex flex-col">
            <div className="">Hoodies & Sweetshirt</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-4 mt-4 mr-3" src={Arrow} alt="" /></div>
           </div>
           <div className="mb-7">
            <img className="foto" src={Coats} alt="" />
            <div className="flex justify-between">
            <div className="flex flex-col">
            <div className="">Coats & Parkas</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-4 mt-4 mr-3" src={Arrow} alt="" /></div>
           </div>
           <div className="mb-7">
            <img className="foto" src={Tees} alt="" />
            <div className="flex justify-between">
            <div className="flex flex-col">
            <div className="">Tees & T-Shirt</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-4 mt-4 mr-3" src={Arrow} alt="" /></div>
           </div>
        </div>
      </main>
      <main className="yellow text-center items-center pt-5 pb-10">
      <div className="font-bold white bg-white mb-2 px-3 w-64 text-6xl asd">PAYDAY</div>
      <div className="font-bold mb-5 px-3 mt-5 text-6xl">SALE NOW</div>
      <div className="text-xl">Spend minimal $100 get 30% off voucher code for your next purchase</div>
      <div className="font-bold px-3 mt-5 text-xl">1 June - 10 June 2021</div>
      <div className="text-xl mb-3">*Terms & Conditions apply</div>
      <div className="text-xl bg-black px-2 py-1 text-white text-center w-32 asd rounded cursor-pointer">Shop Now</div>
      </main>

      <main className="min-h-screen">
        <h1 className="font-bold text-4xl ml-5">Young’s Favourite</h1>
        <div className="flex mx-5 mt-3 justify-around flex-wrap">
          <div className="mb-7">
            <img className=" w-[100%]" src={Two} alt="" />
            <div className="flex justify-between">
            <div className="flex flex-col">
            <div className="">Trending on instagram</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-5 mr-3 mt-1" src={Arrow} alt="" />
            </div>
           </div>
           <div className="mb-7">
            <img className="w-[100%]" src={One} alt="" />
            <div className="flex justify-between">
            <div className="flex flex-col">
            <div className="">All Under $40</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-5 mr-3 mt-1" src={Arrow} alt="" />
            </div>
           </div>
           </div>
      </main>

      <main className="min-h-screen flex justify-around header_main m-5 rounded-3xl mb-0 flex-wrap">
      <div className="flex flex-col mt-auto mb-auto leading-none">
        <div className="font-bold text-5xl">DOWNLOAD APP &</div><br />
        <div className="font-bold text-5xl mb-5">GET THE VOUCHER!</div>
        <div className="flex gap-x-5">
          <img className="h-10 cursor-pointer"src={Apple} alt="" />
          <img className="h-10 cursor-pointer"src={Google} alt="" />
        </div>
      </div>
      <img className="max-h-screen" src={Phone} alt="" />
      </main>

      <div className="flex flex-wrap justify-center">
      {products.map(product=><Product product={product} key={product._id}/>)}
      </div>
    </div>
  );
}

export default App;
