import React, { useEffect, useState } from "react";
import { Button, Gap } from "../../components";
import { BlogItem } from "../../components/moleculs";
import "./home.css";
import { useHistory } from "react-router-dom";
import Axios from "axios";
// penerapan dispatch konsepnya sama seperti state lokal tapi penggunaanya/datanya secara global
import { useDispatch, useSelector } from "react-redux";
import { setDataBlog } from "../../config/redux/action";

const Home = () => {

  // untuk pagination
  const [counter, setCounter] = useState(1);

  // // state lokal
  // const [dataBlog, setDataBlog] = useState([]);

  // menggunakan selector karena akan menggunakan functional component
  // const {dataBlogs, name} = useSelector(state => state)
    // spesifikasikan state (HomeReducer atau GlobalReducer)
  const {dataBlog, page} = useSelector(state => state.homeReducer)
  console.log('page: ', page)
  // untuk pengkondisian dari store (diterapkan sebelum pemanggilan API)
  const dispatch = useDispatch();

  // console.log('data blog global: ', dataBlogs)

  // get data from API using Axios
  useEffect(() => {
    // // penerapan dispatch
    // setTimeout(() => {
    //   // dispatch({type: 'UPDATE_NAME'})
    // }, 3000)
    
    // dipindah ke mode async ke action
        // Axios.get('http://localhost:4000/v1/blog/posts')
        // .then(result => {
        //   // get array data
        //   const responseAPI = result.data;
        //   console.log('data API: ', responseAPI)
          
        //   // // // state lokal
        //   // setDataBlog(responseAPI.data)

        //   // penerapan dispatch
        //   dispatch(setDataBlog(responseAPI.data))
        // })
        // .catch(err => {
        //   console.log('error: ', err)
        // })
          // memanggil page menggunakan counter
        dispatch(setDataBlog(counter))
    // dipindah ke mode async ke action

    // without [] it will inifinity loop
  }, [counter, dispatch])
  
  const history = useHistory();

  const previous = () => {
    setCounter(counter <= 1 ? 1 : counter - 1)
    console.log(counter)
  }
  const next = () => {
    setCounter(counter === page.totalPage ? page.totalPage : counter + 1)
    console.log(counter)
  }

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
          date={blog.date}
          _id={blog._id} />
        })}
      </div>

      <div className="pagination">
        <Button title="Previous" onClick={previous} />
        <Gap width={20} />
        <p className="text-page">{page.currentPage} / {page.totalPage}</p>
        <Gap width={20} />
        <Button title="Next" onClick={next} />
      </div>

      <Gap height={20} />
    </div>
  );
};

export default Home;
