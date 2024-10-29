import { useState } from "react";
import BlogList from "../BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: "My first blog", body: "lorem ipsum...", author: "Joe", id: 1 },
        { title: "Writing tips", body: "lorem ipsum...", author: "Matt", id: 2 },
        { title: "Show, don't tell", body: "lorem ipsum...", author: "Carl", id: 3 }
    ])
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title='All Blogs!'/>
        </div>
     );
}
 
export default Home;