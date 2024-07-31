import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1).replace("-"," ");

  return (
    <div>
        <Header/>
        <div className='mt-[100px] -mb-16 max-w-2xl mx-auto flex items-center space-x-2'>
            <button onClick={() => (navigation(-1))} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Back</button>
            <h2 className ='text-xl font-bold'>Blogs On <span className='underline'> {category}</span></h2>
        </div>

        <Blogs/>
        <Pagination/>
    </div>
  )
}

export default CategoryPage