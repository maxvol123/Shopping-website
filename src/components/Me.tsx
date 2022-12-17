import { useEffect, useState } from "react"
import axios from "axios"
export function Me() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
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
            setName(res.data.fullname)
            setEmail(res.data.email)
          }) 
          }}

    return(
        <>
        <div className="font-semibold text-3xl">Hello {name} !</div>
        <div className="">Your email {email}</div>
        </>
    )
}