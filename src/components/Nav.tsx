import Logo from "../img/Logo.png"
import { Modal } from "./Modal"
import { useState,useEffect, Children } from "react"
import Cart from "../img/Cart.png"
import axios from "axios"
export function Nav() {
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
    const [login,setLogin]=useState(false)
    const [burger,setBurger]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const notDefoult = async(event: React.FormEvent)=>{
      event.preventDefault()
  }
  const changeEmail= (event: React.ChangeEvent<HTMLInputElement>)=>{
    setEmail(event.target.value)
    }
    const changePassword= (event: React.ChangeEvent<HTMLInputElement>)=>{
      setPassword(event.target.value)
      }
      useEffect(()=>{
      if (localStorage.getItem("Token")) {
        setLogin(true)
      }  
      })

    function Login() {
      return axios.post("http://localhost:777/login",{
        "email":email,
        "password":password
      }).then((res)=>{localStorage.setItem("Token",res.data.token)
      setSignup(false)
      setLogin(true)
      })
    }
    return(
        <>
        {signup&&<Modal title="SIGN UP" setSignup={setSignup}>
      <form onSubmit={notDefoult} action="" className="flex flex-col gap-y-1">
      <input type="text" placeholder="Enter email" onChange={changeEmail} value={email}  />
      <input type="password" placeholder="Enter password" onChange={changePassword} value={password} />
      <button className="bg-blue-600 px-2 py-1 rounded hover:bg-blue-500 w-16 " onClick={()=>Login()}>Login</button>
      </form>
      <button className="bg-red-600 px-2 py-1 rounded hover:bg-red-700 w-16 mt-5" onClick={()=>{setSignup(false);}}>Close</button>
      </Modal>}

      {burger&&<Modal title="Menu" setSignup={setSignup}>
        <div className="flex flex-col text-center mt-5">
          <a href="/" className="">HOME</a>
          <div className="">FASHION</div>
          <div className="">FAVOURITE</div>
          <div className="">LIFESTYLE</div>
        </div>
        {login ? (
        <button className="bg-black px-2 py-1 rounded text-white max-h-8">MY PROFILE</button>
        ) : (
        <button className="bg-black px-2 py-1 rounded text-white max-h-8" onClick={()=>{setSignup(true); setBurger(false); a()}}>SIGN UP</button>
      )}
      </Modal>}


      
        <nav className="flex justify-between p-2">
          <div className=""><img src={Logo} alt="" /></div>
        <div className="flex space-x-3 cursor-pointer navigation">          
        <a href="/" className="">HOME</a>
          <div className="">FASHION</div>
          <div className="">FAVOURITE</div>
          <div className="">LIFESTYLE</div>
          {login ? (
        <button className="bg-black px-2 py-1 rounded text-white max-h-8">MY PROFILE</button>
        ) : (
        <button className="bg-black px-2 py-1 rounded text-white max-h-8" onClick={()=>setSignup(true)}>SIGN UP</button>
      )}
            <a href="/cart"><img src={Cart} alt="" className="h-7" /></a>
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