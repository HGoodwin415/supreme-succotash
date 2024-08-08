import {useState} from "react"; 
import {validateEmail} from "../Utils"; 
import NavBar from "./Navbar";
import MenuItemCards from "./MenuItemCards";
import { Link } from "react-router-dom";

 
const PasswordErrorMessage = () => { 
 return ( 
   <p className="FieldError">Password should have at least 8 characters</p> 
 ); 
}; 
 
function Login() { 
 const [email, setEmail] = useState(""); 
 const [password, setPassword] = useState({ 
   value: "", 
   isTouched: false, 
 }); 
 const [role, setRole] = useState("role"); 

 const getIsFormValid = () => { 
   return ( 
     
     validateEmail(email) && 
     password.value.length >= 8 && 
     role !== "role" 
   ); 
 }; 
 
 const clearForm = () => { 
   
   setEmail(""); 
   setPassword({ 
     value: "", 
     isTouched: false, 
   }); 
   setRole("role"); 
 }; 
 
 const handleSubmit = (e) => { 
   e.preventDefault(); 
   alert("Login successful!"); 
   clearForm(); 
 }; 
 
 return ( 
   <div className="Login"> 
   <NavBar/>
     <form onSubmit={handleSubmit}> 
       <fieldset> 
         <h2>Login to Your Account</h2> 
          <div className="Field"> 
           <label> 
             Email address <sup>*</sup> 
           </label> 
           <input 
             value={email} 
             onChange={(e) => { 
               setEmail(e.target.value); 
             }} 
             placeholder="Email address" 
           /> 
         </div> 
         <div className="Field"> 
           <label> 
             Password <sup>*</sup> 
           </label> 
           <input 
             value={password.value} 
             type="password" 
             onChange={(e) => { 
               setPassword({ ...password, value: e.target.value }); 
             }} 
             onBlur={() => { 
               setPassword({ ...password, isTouched: true }); 
             }} 
             placeholder="Password" 
           /> 
           {password.isTouched && password.value.length < 8 ? ( 
             <PasswordErrorMessage /> 
           ) : null} 
         </div> 
         
         <Link to="/orderOnline">< button type="submit" onClick={MenuItemCards()} disabled={getIsFormValid}>
            
           Login
         </button></Link> 
         </fieldset> 
         <Link to="/signUp"><button type='onClick'>Create Account</button></Link>
     </form> 
    
   </div> 
 ); 
} 

export default Login; 