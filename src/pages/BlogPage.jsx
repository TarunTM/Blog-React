import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { titleBaseUrl } from '../baseUrl'
import Card from '../components/Card'

const BlogPage = () => {

    const [blog ,setBlog] = useState();
    const [relatedBlogs,setRelatedBlogs] = useState([]);
    const {setLoading ,loading} = useContext(AppContext);
    const navigation = useNavigate();
    const location = useLocation();
    
    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        let url = `${titleBaseUrl}?blogId=${blogId}`;
        try{
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error fetching blog id");
            setBlog();
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(() =>{
        if(blogId){
            fetchRelatedBlogs();
        }  
    },[location.pathname]);

  return (
    <div>
        <Header/>
        <div >
            <div className='mt-[100px] mb-6 max-w-2xl mx-auto'>
                <button onClick={() => navigation(-1)} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Back</button>
            </div>
            
                            
            {
                loading ? (<div className='my-80 mx-auto text-center font-bold text-3xl '>Loading</div>) : blog ?
                 (<div >
                    <Card post={blog}/>
                    <h2 className='max-w-2xl mx-auto mt-12 font-bold text-3xl mb-8'>Related Blogs</h2>
                    <div className='flex flex-col gap-y-10 my-4'>
                        {
                            relatedBlogs.map( (post) => (<Card key={post.id} post={post}/>) )
                        }
                    </div>
                    
                 </div>) :
                 (<div>
                    <p className='flex items-center justify-center font-bold text-3xl'>No Post Found</p>
                 </div>)
            }
        </div>
        


    </div>
  )
}

export default BlogPage