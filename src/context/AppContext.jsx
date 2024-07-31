import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl'
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null);
    const navigation = useNavigate();

    async function fetchBlogPost (page=1 , tag=null , category){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`; 

        if(tag){
            url += `&tag=${tag}`;
        }
        if(category){
            url += `&category=${category}`;
        }
        
    
        try{
            const result = await fetch(url);
            const data = await result.json();
            
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error){
            console.log("Error in Fetching data ");
            setPage(1);
            setPosts({});
            setTotalPages(null); 
        }
        setLoading(false);
    }

    function handlePageChange(page){
        navigation({search: `page=${page}`});
        setPage(page);
        
    }


    const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPost,
        handlePageChange,
    };

    return(
        <AppContext.Provider value= {value}>
            {children}
        </AppContext.Provider>
    );
}
