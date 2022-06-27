import React from "react";
import { RegisterBg } from "../../assets";
import "./detailBlog.css";
import { useHistory } from "react-router-dom";
import { Gap, Link } from "../../components";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={RegisterBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date</p>
      <p className="blod-body">Content</p>

      <Gap height={20} />

      <Link title="Kembali" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
