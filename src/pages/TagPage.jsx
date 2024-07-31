import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';
import Header from '../components/Header';

const TagPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1).replace("-"," ");

  return (
    <div >
        <Header/>
        <div className='mt-[100px] -mb-16 max-w-2xl mx-auto flex items-center space-x-2'>
            <button onClick={()=> (navigation(-1))} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Back</button>
            <h2 className ='text-xl font-bold'>Blogs Tagged <span className='underline text-blue-700'> #{tag} </span></h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default TagPage