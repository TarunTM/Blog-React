import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = ({post}) => {
    
  return (
    <div className='w-11/12 max-w-2xl mx-auto '>
        <NavLink to={`/blog/${post.id}`}> <p className='font-bold text-lg cursor-pointer hover:underline'>{post.title}</p></NavLink>

        <p className='text-sm my-1'>By <span className='italic'>{post.author}</span> on 
        <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}> <span className='font-semibold underline cursor-pointer'>{post.category}</span> </NavLink></p>

        <p className='text-sm'>Posted on <span>{post.date}</span></p>
        <p className='mt-4 mb-2'>{post.content}</p>
        <div className='flex flex-wrap gap-x-2 items-center'>            
            {
                post.tags.map( (tag,index) => {
                                return <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`} ><span className='text-xs font-semibold underline text-blue-700 cursor-pointer' >{`#${tag} `}</span></NavLink>     
                             })
            }
        </div>
    </div>
  )
}

export default Card