import React from "react";

import { LoginBg } from "../../assets";
import { Button, Input, Gap, Link } from "../../components";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} className="bg-image" alt="image-Bg" />
      </div>

      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" onClick={() => history.push("/")} />
        <Link
          title="Belum punya akun ? Register"
          onClick={() => history.push("/register")}
        />
      </div>
    </div>
  );
};

export default Login;
