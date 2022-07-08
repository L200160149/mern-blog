import React, { useState } from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./createBlog.css";
import { useHistory } from "react-router-dom";
import Axios from 'axios'

const CreateBlog = () => {
  // untuk crud
    // default boleh null atau string kosong
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('')
  const [image, setImage] = useState('')
  const [imagePreview, setImagePreview] = useState(null)

  const history = useHistory();

  const onSubmit = () => {
    console.log('title: ', title)
    console.log('body: ', body)
    console.log('image: ', image)

    // form untuk mengirim ke API
    const data = new FormData();
    data.append('title', title);
    data.append('body', body);
    data.append('image', image);

    // url, data, config
    Axios.post('http://localhost:4000/v1/blog/post', data, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res => {
      console.log('post success: ', res)
    })
    .catch(err => {
      console.log('err: ', err)
    })
  }

  const onImageUpload = (e) => {
    const file = e.target.files[0]
    setImage(file)
    setImagePreview(URL.createObjectURL(file))
  }

  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push("/")} />
      <p className="title">Content Create Blog</p>
      <Input label="Post Title" value={title} onChange={(e) => {setTitle(e.target.value)}} />
      <Upload className="upload" onChange={(e) => onImageUpload(e)} img={imagePreview} />
      <TextArea label="Post Body" value={body} onChange={(e) => setBody(e.target.value)} />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" onClick={onSubmit} />
      </div>
    </div>
  );
};

export default CreateBlog;
