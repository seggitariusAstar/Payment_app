import { Heading } from "../assets/Components/Heading"
import { SubHeading } from "../assets/Components/SubHeading"
import { InputBox } from "../assets/Components/InputBox"
import { Button } from "../assets/Components/Button"
import { BottomWarning } from "../assets/Components/BottomWarning"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export const Signup = () => {
    const navigate=useNavigate()
    const[firstname,setFirstName]=useState("");
    const[lastname,setLastName]=useState("");
    const[username,setUserName]=useState("");
    const[password,setPassword]=useState("")
    return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={(e)=>{
            setFirstName(e.target.value)
        }}placeholder="John" label={"First Name"} />
        <InputBox onChange={(e)=>{
            setLastName(e.target.value)
        }} placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={(e)=>{
            setUserName(e.target.value)
        }} placeholder="harshtyagi@gmail.com.com" label={"Email"} />
        <InputBox onChange={(e)=>{
            setPassword(e.target.value)
        }}placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async ()=>{
          const response= await axios.post("https://payment-web-app-backend.onrender.com/api/v1/user/Signup",{
               username,
               firstname,
               lastname,
               password

           })
           localStorage.setItem("token",response.data.token)
              navigate("/dashboard")     
  
          }}
            label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
}    
