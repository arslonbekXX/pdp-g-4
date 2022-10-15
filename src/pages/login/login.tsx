import React, { useState } from "react";
import loginCss from "./login.module.scss";
import { Link } from "react-router-dom";
import { TbLock } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

interface LoginProps {
  username?: String;
  password?: String;
}

const Login: React.FC<LoginProps> = () => {
  const [userLogin, setUserLogin] = useState({ username: "", password: "" });
  const [passwordShow, setPasswordShow] = useState(false);
  // ••••
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value });
  };
  const showPsw = () => {
    setPasswordShow(!passwordShow);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userLogin);

    setUserLogin({ username: "", password: "" });
  };
  return (
    <div className={loginCss.login_page}>
      <div className={loginCss.inner_box}>
        <p className={loginCss.text}>Sign In</p>
        <div className={loginCss.login_box}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <div className={loginCss.username}>
                <span>
                  <AiOutlineUser />{" "}
                </span>
                <input
                  type="text"
                  name="username"
                  value={userLogin.username || ""}
                  onChange={handleChange}
                  placeholder="Please enter here"
                />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div className={loginCss.password}>
                <span>
                  <TbLock />{" "}
                </span>
                <input
                  type={passwordShow ? "text" : "password"}
                  name="password"
                  value={userLogin.password || ""}
                  onChange={handleChange}
                  placeholder="**************"
                />
                <span onClick={showPsw} className={loginCss.showPsw}>
                  {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
                </span>
              </div>
            </div>
            <p className={loginCss.link}>
              <Link to="">need help logged in ?</Link>
            </p>

            <button className={loginCss.login_btn}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
