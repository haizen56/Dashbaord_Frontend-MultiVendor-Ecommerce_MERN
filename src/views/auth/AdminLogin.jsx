
 
 import React,{useEffect, useState} from 'react';
import {PropagateLoader} from "react-spinners"
import  toast from "react-hot-toast";
 import { admin_login, messageClear } from '../../store/Reducers/authReducer'
 import { useDispatch,useSelector } from 'react-redux'
 import {useNavigate} from 'react-router-dom';
 
 
 const AdminLogin = () => {
 
  const navigate = useNavigate()

  
  const disptach = useDispatch()
  const {loader,errorMessage,successMessage} = useSelector(state=>state.auth)
   const  [state, setState] = useState({
   
     email: '',
     password: '',
   
 
   })
   const inputHandler =(e)=>{
     setState({
     ...state,
       [e.target.name]: e.target.value
     })
   }
 
 const submit = (e) => {
 e.preventDefault()
//  console.log(state);
disptach(admin_login(state))
 }
 
 const overrideStyle ={
  display:"flex",
  margin:"0 auto",
  height :"24px",
  justifyContent:"center",
  alignItems:"center"
 }


 
 useEffect(()=>{
if(errorMessage){
  toast.error(errorMessage)
  disptach(messageClear())
}
if(successMessage){
  toast.success(successMessage)
  disptach(messageClear())
  navigate('/')
}
 },[errorMessage,successMessage])
 
 
   return (
     <>
     
<div>


<div className=' min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
<div className='text-white mr-52 bg-[#283046]
 flex  justify-center items-center
  w-[350px] glow-effect h-[350px]
   rounded-full animate-bounce
    hover:text-orange-400  
    hover:animate-spin 
    hover:cursor-pointer '>Admin DashBoard Login
<br/>
<img className='w-[100px] h-[90px]' src='http://localhost:3000/images/logo.png' alt='not found'/>        

</div>
<div className='animate-spin hover:animate-none'></div>
       <div className='w-[350px] mr-52  text-[#d0d2d6] p-2'>
 
         <div className='bg-[#283046] p-5 rounded-md'>
        <div className='h-[100px] flex justify-center items-center'>
        <div className='w-[100px] h-[100px] rounded-full glow-effect'>
             <img className='w-[60px] h-[60px] mt-5 ml-4 justify-center flex items-center ' src='http://localhost:3000/images/logo.png' alt='not found'/>        
        </div>
        </div>           
            
 
 
           <form onSubmit={submit} >
         
 
 
             <div className='flex flex-col w-full gap-1 mb-3'>
               <label htmlFor='email'>Email</label>
               <input onChange={inputHandler} value={state.email} className='px-3 py-2 outline-none border border-slate-700 
             bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
                 type='text' name='email' placeholder='Enter your Email' id='email' required />
             </div>
 
             <div className='flex flex-col w-full gap-1 mb-5'>
               <label htmlFor='password'>Password</label>
               <input onChange={inputHandler} value={state.password} className='px-3 py-2 outline-none border border-slate-700 
               bg-transparent rounded-md text-[#d0d2d6] focus:border-indigo-500 overflow-hidden'
                 type='password' name='password' placeholder='Enter your password' id='password' required />
             </div>
           
             <button disabled={loader ? true : false} className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white 
             rounded-md px-7 py-2 mb-3 '> 
             
             {
                loader ? <PropagateLoader  color='#fff' overrideStyle={overrideStyle} /> : "Login" 
             }

             </button>
             
           </form>
 
 
         </div>
 
       </div>
     </div>
</div>

    
     </>
   )
 }
 
 export default AdminLogin  
 
