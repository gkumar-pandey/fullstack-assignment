"use client";
import React, { useState } from "react";
import Input from "../ui/input/Input";

import Link from "next/link";
import FormContainer from "../ui/form-container/FormContainer";
import Button from "../ui/button/Button";
import { FormHeading } from "../ui/formheading/FormHeading";

interface FormPorps {
  children: React.ReactNode;
}

export const Form: React.FC<FormPorps> = ({ children }) => {
  return <form className="flex flex-col gap-6 ">{children}</form>;
};

const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleSubmit = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  return (
    <FormContainer>
      <FormHeading />
      <Form>
        <Input
          value={loginData.email}
          placeholder="Your email"
          type="email"
          name="email"
          onChange={handleChange}
        />

        <Input
          value={loginData.password}
          placeholder="Your password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Button variant="primary" className="form-btn" onclick={handleSubmit}>
          Login
        </Button>
      </Form>
      <div className="flex flex-row text-xl items-center font-normal justify-center gap-1 w-full">
        <p className=" text-[#606060]">Don&apos;t have an account?</p>
        <Link href={"/signup"} className=" text-[#0054A1]">
          New Account
        </Link>
      </div>
    </FormContainer>
  );
};

export default LoginForm;
