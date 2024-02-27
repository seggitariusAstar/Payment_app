import { useState } from "react"
import { BottomWarning } from "../assets/Components/BottomWarning"
import { Button } from "../assets/Components/Button"
import { Heading } from "../assets/Components/Heading"
import { InputBox } from "../assets/Components/InputBox"
import { SubHeading } from "../assets/Components/SubHeading"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export const Signin=()=>{
          const[username,setUserName]=useState("")
          const[password,setPassword]=useState("")
          const navigate=useNavigate()
        return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className=" rounded-lg bg-white w-80 text-center p-2 h-max px-4">
              <Heading label={"Sign in"}/>
              <SubHeading label={"Enter your credential to access your account"}/>
              <InputBox onChange={(e)=>{
                setUserName(e.target.value);
              }} placeholder={"harshtyagi@gmail.com"} label={"Email"}/>
              <InputBox onChange={(e)=>{
                setPassword(e.target.value)
              }} placeholder={"123232"} label={"Password"}/>
              <div className="pt-4">
                <Button  onClick={async ()=>{
                    const response= await axios.post("http://localhost:3000/api/v1/user/Signin",{
                      username:username,
                      password:password
                    })
                    localStorage.setItem("token",response.data.token)
                    navigate("/dashboard")
                }}label={"Sign in"}/>
              </div>
              <BottomWarning label={"Don't have an account"} buttonText={"Sign up"} to="/signup"/>
            </div>


        </div>


        </div>
  
  

}