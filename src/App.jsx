import { useContext, useEffect } from "react"
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import TagPage from "./pages/TagPage";
import CategoryPage from "./pages/CategoryPage";
import { AppContext } from "./context/AppContext"
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom"


function App() {
  
  const {fetchBlogPost} = useContext(AppContext);
  const [searchParams ,setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() =>{
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replace("-" ," ");
      fetchBlogPost(Number(page),tag);
    }

    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPost(Number(page),null,category);
    }
    else{
      fetchBlogPost(Number(page));
    }
    
  },[location.pathname,location.search]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/blog/:blogId" element={<BlogPage/>}></Route>
        <Route path="/tags/:tag" element={<TagPage/>}></Route>
        <Route path="/categories/:category" element={<CategoryPage/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
