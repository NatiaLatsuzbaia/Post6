import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./navbar";


function Home() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    axios.get("https://apitest.reachstar.io/blog/list").then(function(response) {
      setBlogList(response.data);
    });
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <React.Fragment>
      <Navbar />
      <div className="blog-list">
        {blogList.map(blog => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))}
      </div>
      
    </React.Fragment>
  );
}

export default Home;

