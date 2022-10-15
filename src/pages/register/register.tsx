import React, { useState } from "react";
import registerCss from "./register.module.scss";
import { Link } from "react-router-dom";
import { TbLock } from "react-icons/tb";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";

interface RegisterProps {
  email?:String;
  username?:String;
  password?:String;

}

const Register: React.FC<RegisterProps> = () => {
  const [userRegister, setUserRegister] = useState({ username: "", password: "",email:"" });
  const [passwordShow, setPasswordShow] = useState(false);
  // ••••
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserRegister({ ...userRegister, [e.target.name]: e.target.value });
  };
  const showPsw = () => {
    setPasswordShow(!passwordShow);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(userRegister);

    setUserRegister({ username: "", password: "",email:"" });
  };
  return (
    <div className={registerCss.register_page}>
    <div className={registerCss.inner_box}>
      <p className={registerCss.text}>Sign In</p>
      <div className={registerCss.register_box}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <div className={registerCss.email}>
              <span>
                <AiOutlineUser />{" "}
              </span>
              <input
                type="email"
                name="email"
                value={userRegister.email || ""}
                onChange={handleChange}
                placeholder="Please enter here"
              />
            </div>
          </div>
          <div>
            <label>Username</label>
            <div className={registerCss.username}>
              <span>
                <AiOutlineUser />{" "}
              </span>
              <input
                type="text"
                name="username"
                value={userRegister.username || ""}
                onChange={handleChange}
                placeholder="Please enter here"
              />
            </div>
          </div>
          <div>
            <label>Password</label>
            <div className={registerCss.password}>
              <span>
                <TbLock />{" "}
              </span>
              <input
                type={passwordShow ? "text" : "password"}
                name="password"
                value={userRegister.password || ""}
                onChange={handleChange}
                placeholder="**************"
              />
              <span onClick={showPsw} className={registerCss.showPsw}>
                {passwordShow ? <AiFillEye /> : <AiFillEyeInvisible />}
              </span>
            </div>
          </div>
          <p className={registerCss.link}>
            <Link to="/login">don't have an account ?</Link>
          </p>

          <button className={registerCss.register_btn}>Register</button>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Register;
