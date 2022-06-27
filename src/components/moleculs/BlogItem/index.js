import React from "react";
import { RegisterBg } from "../../../assets";
import "./blogItem.css";
import { useHistory } from "react-router-dom";
import { Button, Gap } from "../../atoms";

function BlogItem() {
  const history = useHistory();
  return (
    <div className="blog-item">
      <img className="image-thumb" src={RegisterBg} alt="post" />
      <div className="content-detail">
        <p className="title">Title Blog</p>
        <p className="author">Author</p>
        <p className="body">Lorem ipsum</p>

        <Gap height={20} />

        <Button
          title="View Detail"
          onClick={() => history.push("/detail-blog")}
        />
      </div>
    </div>
  );
}

export default BlogItem;
