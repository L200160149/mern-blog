import React, { useEffect, useState } from "react";
import { Button, Gap } from "../../components";
import { BlogItem } from "../../components/moleculs";
import "./home.css";
import { useHistory } from "react-router-dom";
import Axios from "axios";
// penerapan dispatch konsepnya sama seperti state lokal tapi penggunaanya/datanya secara global
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  // state lokal
  // const [dataBlog, setDataBlog] = useState([]);

  // menggunakan selector karena akan menggunakan functional component
  const {dataBlogs, name} = useSelector(state => state)
  console.log('data blog global: ', dataBlogs)

  // untuk pengkondisian dari store (diterapkan sebelum pemanggilan API)
  const dispatch = useDispatch();
  // get data from API using Axios
  useEffect(() => {
    // penerapan dispatch
    setTimeout(() => {
      dispatch({type: 'UPDATE_NAME'})
    }, 3000)
    
    Axios.get('http://localhost:4000/v1/blog/posts')
    .then(result => {
      // get array data
      const responseAPI = result.data;
      console.log('data API: ', responseAPI)
      
      // // state lokal
      // setDataBlog(responseAPI.data)

      // penerapan dispatch
      dispatch({type: 'UPDATE_DATA_BLOG', payload: responseAPI.data})
    })
    .catch(err => {
      console.log('error: ', err)
    })
    // without [] it will inifinity loop
  }, [dispatch])
  const history = useHistory();
  return (
    <div className="home-page-wrapper">
      <div className="create-wrapper">
        <Button
          title="create blog"
          onClick={() => history.push("/create-blog")}
        />
      </div>
    <p>{name}</p>
      <Gap height={20} />

      <div className="content-wrapper">
        {dataBlogs.map(blog => {
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
