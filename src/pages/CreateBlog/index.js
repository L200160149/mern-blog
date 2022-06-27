import React from "react";
import { Input, Button, Upload, TextArea, Gap, Link } from "../../components";
import "./createBlog.css";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <Link title="Kembali" onClick={() => history.push("/")} />
      <p className="title">Content Create Blog</p>
      <Input />
      <Upload className="upload" />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
