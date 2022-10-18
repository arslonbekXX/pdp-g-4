import { AxiosResponse } from "axios";
import { http } from "../../services";
import React, { FormEventHandler } from "react";

import cls from "./register.module.scss";

interface IRegister {
  success: boolean;
}
const Register: React.FC = () => {
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  const onSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    const body = {
      email,
      password,
    };

    const { data }: AxiosResponse<IRegister> = await http.post(
      "/auth/sign-up",
      body
    );

    await http.get(`/auth/verification-email/${email}`);

    console.log("success = ", data.success);
  };

  return (
    <div className={cls.wrapper}>
      <h1 className={cls.title}>Register Component</h1>
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
        <button>Submit</button>;
      </form>
    </div>
  );
};
export default Register;
