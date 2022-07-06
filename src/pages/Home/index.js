import React, { useEffect, useState } from "react";
import { Button, Gap } from "../../components";
import { BlogItem } from "../../components/moleculs";
import "./home.css";
import { useHistory } from "react-router-dom";
import Axios from "axios";

const Home = () => {
  // state
  const [dataBlog, setDataBlog] = useState([]);
  // get data from API using Axios
  useEffect(() => {
    Axios.get('http://localhost:4000/v1/blog/posts')
    .then(result => {
      // get array data
      console.log('data API: ', result.data)
      const responseAPI = result.data;

      setDataBlog(responseAPI.data)
    })
    .catch(err => {
      console.log('error: ', err)
    })
  })
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>

      <Gap height={20} />

      <div className="content-wrapper">
        {dataBlog.map(blog => {
          return <BlogItem 
          key={blog._id} 
          image={`http://localhost:4000/${blog.image}`}
          title={blog.title}
          body={blog.body}
          date={blog.date} />
        })}
      </div>

      <div className="pagination">
        <Button title="Previous" />
        <Gap width={20} />
        <Button title="Next" />
      </div>

      <Gap height={20} />
    </div>
  );
};

export default Home;
