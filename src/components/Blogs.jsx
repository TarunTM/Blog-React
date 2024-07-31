import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card'

const Blogs = () => {

    const {posts,loading} = useContext(AppContext)
    console.log(posts);
  return (
    <div className='flex flex-col gap-y-10 my-24 '>
        {
            loading ? (<div className='mx-auto my-80 font-bold text-3xl '>Loading</div>) : 
                      (posts.length === 0 ? (<div className='flex items-center justify-center font-bold text-3xl'>No Post Found</div>) :
                                            (posts.map( (post) => (<Card key={post.id} post={post}/>) ))
                      )
        }
    </div>
  )
}

export default Blogs