import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast';

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout=()=>
    {
      try
      {
         //state change kr rhe hai//
         setAuthUser({
         ...authUser,
         user:null
         })
         localStorage.removeItem("Users");
         toast.success("Logout successfully");
         //document.getElementById("my_modal_3").close();
         setTimeout(()=>{
           window.location.reload();
          // localStorage.setItem("Users", JSON.stringify(res.data.user));
         },1000)
        // window.location.reload();
      }
      catch(error)
      {
         toast.error("Error:" + error.message);
         setTimeout(()=>{},2000);
      }
    }
  return (
    <div>
        <button className='px-3 py-2 bg-red-500 text-white rounded-md coursor-pointer'
        onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout