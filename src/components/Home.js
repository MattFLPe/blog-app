import { useState } from "react";
import BlogList from "../BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first blog", body: "lorem ipsum...", author: "Joe", id: 1 },
        { title: "Promises - Asynchronous JS", body: "lorem ipsum...", author: "Matt", category: "JavaScript", id: 2 },
        { title: "Java", body: "lorem ipsum...", author: "Carl", category: "literature", id: 3 },
        { title: "Props - ReactJS", body: "lorem ipsum...", author: "Matt", category: "ReactJS", id: 4 },
    ])
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs'/>
            <BlogList blogs={blogs.filter((blog) => blog.category === 'JavaScript')} title='JavaScript Blogs'/>
        </div>
     );
}
 
export default Home;