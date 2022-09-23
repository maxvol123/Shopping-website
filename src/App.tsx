import Logo from "./img/Logo.png"
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
function App() {
  return (
    <div className="App">
      <header className="min-h-screen">
        <nav className="flex justify-between p-2">
          <div className=""><img src={Logo} alt="" /></div>
        <div className="flex space-x-3 cursor-pointer">          
          <div className="">CATALOG</div>
          <div className="">FASHION</div>
          <div className="">FAVOURITE</div>
          <div className="">LIFESTYLE</div>
          <button className="bg-black px-2 py-1 rounded text-white max-h-8">SIGN UP</button>
          </div>
        </nav>
        <main className="header_main flex m-5 rounded-3xl justify-between p-3 pb-0 pl-10 pr-40">
          <div className="text-6xl">
          <div className="font-bold white bg-white mb-1 w-44">LET’S</div>
          <div className="font-bold">EXPLORE</div>
          <div className="font-bold white yellow mb-1 w-64 mt-2">UNIQUE</div>
          <div className="font-bold mb-1">CLOTHES</div>
          <div className="text-xl mb-2">Live for Influential and Innovative fashion!</div>
          <div className="text-xl bg-black px-2 py-1 text-white text-center w-32 rounded cursor-pointer">Shop Now</div>
          </div>
          <img className="h-96" src={Header_foto} alt="" />
        </main>
        <footer className="yellow flex justify-between py-5 px-10 mt-16 scroll">
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
        <div className="flex mx-5 mt-3 justify-between flex-wrap">
          <div className="mb-7">
            <img className="foto" src={Hoodies} alt="" />
            <div className="flex flex-col">
            <div className="">Hoodies & Sweetshirt</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-4 ml-80 -mt-9" src={Arrow} alt="" />
           </div>
           <div className="mb-7">
            <img className="foto" src={Coats} alt="" />
            <div className="flex flex-col">
            <div className="">Coats & Parkas</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-4 ml-80 -mt-9" src={Arrow} alt="" />
           </div>
           <div className="mb-7">
            <img className="foto" src={Tees} alt="" />
            <div className="flex flex-col">
            <div className="">Tees & T-Shirt</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-4 ml-80 -mt-9" src={Arrow} alt="" />
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
            <img className="foto" src={Two} alt="" />
            <div className="flex flex-col">
            <div className="">Trending on instagram</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-4 ml-80 -mt-9" src={Arrow} alt="" />
           </div>
           <div className="mb-7">
            <img className="foto" src={One} alt="" />
            <div className="flex flex-col">
            <div className="">All Under $40</div>
            <div className="">Explore Now!</div>
            </div>
            <img className="arrow h-4 ml-80 -mt-9" src={Arrow} alt="" />
           </div>
           </div>
      </main>


    </div>
  );
}

export default App;
