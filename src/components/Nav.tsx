import Logo from "../img/Logo.png"
import { Modal } from "./Modal"
import { useState,useEffect} from "react"
import Cart from "../img/Cart.png"
import axios from "axios"
export function Nav() {
  const [total,setTotal]=useState(0)
  const [info,setInfo]=useState(JSON.parse(localStorage.getItem("Cart")|| "{}"))
  const [show,setShow]=useState(true)
  useEffect(()=>{ 
      let q = 0
  for (let i = 0; i < info.length; i++) {
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
    function a() {
        if(document.querySelector(".one")?.classList.contains("one")){
        document.querySelector(".one")?.classList.add("first")
        document.querySelector(".two")?.classList.add("second")
        document.querySelector(".three")?.classList.add("third")
        document.querySelector(".one")?.classList.remove("one")
        document.querySelector(".two")?.classList.remove("two")
        document.querySelector(".three")?.classList.remove("three")
        setBurger(true)
      }else{
        document.querySelector(".first")?.classList.add("one")
        document.querySelector(".second")?.classList.add("two")
        document.querySelector(".third")?.classList.add("three")
        document.querySelector(".first")?.classList.remove("first")
        document.querySelector(".second")?.classList.remove("second")
        document.querySelector(".third")?.classList.remove("third")
        setBurger(false)
      }
      }
    const [signup,setSignup]=useState(false)
    const [register,setRegister]=useState(false)
    const [login,setLogin]=useState(false)
    const [burger,setBurger]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [Rname,setRname]=useState("")
    const [Remail,setREmail]=useState("")
    const [Rpassword,setRPassword]=useState("")
    const [cart,setCart]=useState(false)
    const notDefoult = async(event: React.FormEvent)=>{
      event.preventDefault()
  }
  const changeEmail= (event: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
    }
    const changePassword= (event: React.ChangeEvent<HTMLInputElement>)=>{
      setPassword(event.target.value)
      }
      const changeREmail= (event: React.ChangeEvent<HTMLInputElement>)=>{
        setREmail(event.target.value)
        }
        const changeRPassword= (event: React.ChangeEvent<HTMLInputElement>)=>{
          setRPassword(event.target.value)
          }
          const changeRName= (event: React.ChangeEvent<HTMLInputElement>)=>{
            setRname(event.target.value)
            }
    function Login() {
      return axios.post("https://backend-bfwe.onrender.com/login",{
        "email":email,
        "password":password
      }).then((res)=>{localStorage.setItem("Token",res.data.token)
      setSignup(false)
      me()
      })
    } 
    function Registration() {
      return axios.post("https://backend-bfwe.onrender.com/register",{
        "fullname":Rname,
        "email":Remail,
        "password":Rpassword,
      }).then((res)=>{localStorage.setItem("Token",res.data.token)
      setRegister(false)
      me()
      })
    } 
    useEffect(()=>{
    me() 
    })
    function me() {
      let token = localStorage.getItem("Token") 
      if (token) {
      return axios.get("https://backend-bfwe.onrender.com/me",{
        headers:{
          authorization:token!
        }
      }).then((res)=>{
        setLogin(true)
      }).catch(err => {
    })
    }else{
      setLogin(false)
      localStorage.removeItem("Token")
    }   
      }
    return(
        <>
        {signup&&<Modal title="LOGIN" setSignup={setSignup}>
      <form onSubmit={notDefoult} action="" className="flex flex-col gap-y-1">
      <input type="text" placeholder="Enter email" onChange={changeEmail} value={email}  />
      <input type="password" placeholder="Enter password" onChange={changePassword} value={password} />
      <button className="bg-blue-600 px-2 py-1 rounded hover:bg-blue-500 w-16 " onClick={()=>Login()}>Login</button>
      </form>
      <div className="flex justify-between">
      <button className="bg-blue-600 px-2 py-1 rounded hover:bg-blue-500 w-16 mt-5" onClick={()=>{setRegister(true);setSignup(false)}}>SignUp</button>
      <button className="bg-red-600 px-2 py-1 rounded hover:bg-red-700 w-16 mt-5" onClick={()=>{setSignup(false);}}>Close</button>
      </div>
      </Modal>}
      {register&&<Modal title="SIGN UP" setSignup={setSignup}>
      <form onSubmit={notDefoult} action="" className="flex flex-col gap-y-1">
      <input type="text" placeholder="Enter full name" onChange={changeRName} value={Rname}  />
      <input type="text" placeholder="Enter email" onChange={changeREmail} value={Remail}  />
      <input type="password" placeholder="Enter password" onChange={changeRPassword} value={Rpassword} />
      <button className="bg-blue-600 px-2 py-1 rounded hover:bg-blue-500 w-16 " onClick={()=>Registration()}>Register</button>
      </form>
      <div className="flex justify-between">
      <button className="bg-blue-600 px-2 py-1 rounded hover:bg-blue-500 w-16 mt-5" onClick={()=>{setRegister(true);setSignup(false)}}>SignUp</button>
      <button className="bg-red-600 px-2 py-1 rounded hover:bg-red-700 w-16 mt-5" onClick={()=>{setSignup(false);}}>Close</button>
      </div>
      </Modal>}
      {burger&&<Modal title="Menu" setSignup={setSignup}>
        <div className="flex flex-col text-center mt-5">
          <a href="/" className="">HOME</a>
          <a href="/product" className="">SHOP NOW</a>
          <div className="">FAVOURITE</div>
          <div className="">LIFESTYLE</div>
        </div>
        <div className=""></div>
        {login ? (
        <div className="flex"><button className="bg-black px-2 py-1 rounded text-white max-h-8 mr-5"><a href="/me"> MY PROFILE</a></button>
        <a href="/cart"><img src={Cart} alt="" className="h-7" /></a>
        </div>
        ) : (
        <div className="flex">
        <button className="bg-black px-2 py-1 rounded text-white max-h-8 mr-5" onClick={()=>{setSignup(true); setBurger(false); a()}}>SIGN UP</button>
        <a href="/cart"><img src={Cart} alt="" className="h-7" /></a>
        </div>  
      )}
      </Modal>}
        <nav className="flex justify-between p-2">
          <div className=""><img src={Logo} alt="" /></div>
        <div className="flex space-x-3 cursor-pointer navigation mr-5">          
        <a href="/" className="">HOME</a>
        <a href="/product" className="">SHOP NOW</a>
          <div className="">FAVOURITE</div>
          <div className="">LIFESTYLE</div>
          {login ? (
        <button className="bg-black px-2 py-1 rounded text-white max-h-8"><a href="/me"> MY PROFILE</a></button>
        ) : (
        <button className="bg-black px-2 py-1 rounded text-white max-h-8" onClick={()=>setSignup(true)}>SIGN UP</button>
      )}
            <a href="/cart"><img src={Cart} alt="" className="h-7" onMouseEnter={()=>setCart(true)}/></a>
            <div className="flex p-3 bg-white absolute mt-7 right-0 flex-wrap">
            {cart&&localStorage.getItem("Cart")&&info.map((product: any) => <div onMouseEnter={()=>setCart(true)} onMouseLeave={()=>setCart(false)}  className="max-w-[200px]"><div className='mr-5 max-w-[200px] hover:underline'><a href={"/product/" + product._id} className="w-[10px]"><img className='h-52' src={product.foto} alt="" />{product.title}</a></div><div className="text-green-600 font-bold">{product.price}$</div><div className="flex justify-between w-[100px] mb-2"><button className='' onClick={() => Set(product.id)}>+</button><div className="">{product.amount}</div><button onClick={() => Minus(product.id)}>-</button></div></div>)}            
            </div>
          </div>
          <div className="display mt-5 z-40" onClick={()=>{a();setSignup(false)}}>
            <div className="w-6 h-1 bg-gray-700 rounded mb-1 one"></div>
            <div className="w-6 h-1 bg-gray-700 rounded mb-1 two"></div>
            <div className="w-6 h-1 bg-gray-700 rounded mb-1 three"></div>
          </div>
        </nav>
        </>
    )
}