import React, { FormEventHandler } from "react";
import { useNavigate } from "react-router-dom";

import cls from "./login.module.scss";

const Login: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const data = { email, password };
    console.log("data = ", data);
  };

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Login Component</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            placeholder='Your Email'
            ref={emailRef}
          />
        </div>
        <div>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            placeholder='Your Password'
            ref={passwordRef}
          />
        </div>
        <Button />
      </form>
      <button
        onClick={() =>
          navigate("/register", { state: { name: "arslonbek", age: 20 } })
        }>
        to Register
      </button>
    </div>
  );
};
export default Login;

function Button() {
  return <button>Submit</button>;
}
