import Logo from "../img/Logo.png"
import { Modal } from "./Modal"
import { useState,useEffect} from "react"
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
    const [register,setRegister]=useState(false)
    const [login,setLogin]=useState(false)
    const [burger,setBurger]=useState(false)
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [Rname,setRname]=useState("")
    const [Remail,setREmail]=useState("")
    const [Rpassword,setRPassword]=useState("")
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
      return axios.post("http://localhost:777/login",{
        "email":email,
        "password":password
      }).then((res)=>{localStorage.setItem("Token",res.data.token)
      setSignup(false)
      me()
      })
    } 
    function Registration() {
      return axios.post("http://localhost:777/register",{
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
      return axios.get("http://localhost:777/me",{
        headers:{
          authorization:token!
        }
      }).then((res)=>{
        setLogin(true)
      }).catch(err => {
        console.log(1);
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
          <div className="">FASHION</div>
          <div className="">FAVOURITE</div>
          <div className="">LIFESTYLE</div>
        </div>
        {login ? (
        <button className="bg-black px-2 py-1 rounded text-white max-h-8"><a href="/me"> MY PROFILE</a></button>
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
        <button className="bg-black px-2 py-1 rounded text-white max-h-8"><a href="/me"> MY PROFILE</a></button>
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