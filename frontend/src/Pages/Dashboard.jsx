import { Users } from "../assets/Components/User"
import { Appbar } from "../assets/Components/AppBar"
import { Balance } from "../assets/Components/Balance"

export const Dashboard=()=>{


  return<>
  
    <Appbar/>
    <Balance value={"10000"}/>
    <Users/>
   
   
  </>
 
 

}