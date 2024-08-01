import React from 'react'
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <>
    <div className='h-screen flex items-center justify-center'> 
    <div className='max-w-screen-4xl container mx-auto m md:px-20 px-4 '>
<div className='mt-28 items-center justify-Center text-center'>
    <h1 className='text-2xl md:text-4xl'> Contact <span className='text-pink-500'>Us:)</span></h1>
    
    <div className='mt-4 space-y-2'>
                    <span className='mt-4 '>Name</span>
                    <br/>
                    <input
                    type="text"
                    placeholder= "Enter your Fullname"
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                    {...register("email", { required: true })}
                    />
                   <br />
                  {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>

    <div className='mt-4 space-y-2'>
                    <span>Email</span>
                    <br/>
                    <input
                    type="email"
                    placeholder= "Enter your mail"
                    className='w-80 px-3 py-1 border rounded-md outline-none'
                   {...register("email", { required: true })}
                    />
                   <br />
                  {errors.mail && <span className='text-sm text-red-500'>This field is required</span>}
     </div>

     <div className='mt-4 space-y-2'>
                    <span>Message</span>
                    <br/>
                    <textarea className="textarea textarea-bordered w-80" placeholder="Type your message">
                    </textarea>
                   <br />
                  {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
     </div>


    <button className="bg-pink-500 text-white rounded-md px-3 py-1 mt-4 hover:bg-pink-700 duration-200">
                Submit
              </button>     
           
</div>
    </div>
      </div>
    </>
  )
}

export default Contact
