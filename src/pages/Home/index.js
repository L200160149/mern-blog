import React, { useEffect, useState } from "react";
import { Button, Gap } from "../../components";
import { BlogItem } from "../../components/moleculs";
import "./home.css";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { useSelector } from "react-redux";

const Home = () => {
  // state
  const [dataBlog, setDataBlog] = useState([]);

  // menggunakan selector karena akan menggunakan functional component
  const stateGlobal = useSelector(state => state)
  console.log('state global: ', stateGlobal)
  // get data from API using Axios
  useEffect(() => {
    Axios.get('http://localhost:4000/v1/blog/posts')
    .then(result => {
      // get array data
      const responseAPI = result.data;
      console.log('data API: ', responseAPI)

      setDataBlog(responseAPI.data)
    })
    .catch(err => {
      console.log('error: ', err)
    })
    // without [] it will inifinity loop
  }, [])
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
