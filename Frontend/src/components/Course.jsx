import React from 'react'
import list from "../../public/list.json"
import Card from './Card'
import { Link } from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
<div className='mt-28 items-center justify-center text-center'>
    <h1 className='text-2xl md:text-4xl'> we'r delighted to have you <span className='text-pink-500'>Here! :)</span></h1>
    <p className='mt-12'>Freebooks are a fantastic resource for avid readers and learners,
         offering access to a wide range of genres without any cost.
          They are easily accessible online through various platforms,
           making literature and knowledge available to everyone. 
           Freebooks support lifelong learning and can be a great way
            to explore new topics or dive into classic literature. 
            Many authors and publishers offer free books as a way 
            to promote their work and reach a broader audience.
            </p>
            <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
                Back
                </button>
            </Link>
</div>


<div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
{
    list.map((item)=>(
        <Card key={item.id} item={item}/>
    ))
}
</div>
    </div>
      
    </>
  )
}

export default Course
