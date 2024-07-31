"use client";
import React, { useState } from "react";
import FormContainer from "../ui/form-container/FormContainer";
import { Form } from "./LoginForm";
import Input from "../ui/input/Input";
import { FormHeading } from "../ui/formheading/FormHeading";
import Button from "../ui/button/Button";
import Link from "next/link";

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassowrd: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSignup = () => {};
  return (
    <FormContainer>
      <FormHeading />
      <Form>
        <Input
          placeholder="Full Name"
          name={"fullname"}
          value={signupData.fullname}
          onChange={handleChange}
          type="text"
        />
        <Input
          placeholder="Your Email"
          onChange={handleChange}
          type="email"
          value={signupData.email}
          name="email"
        />
        <Input
          placeholder="Password"
          onChange={handleChange}
          type="password"
          name="password"
          value={signupData.password}
        />
        <Input
          placeholder="Confirm Password"
          onChange={handleChange}
          type="password"
          name="confirmPassowrd"
          value={signupData.confirmPassowrd}
        />
        <Button variant="primary" onclick={handleSignup} className="form-btn">
          Signup
        </Button>
      </Form>
      <div className="flex flex-row text-xl items-center font-normal justify-center gap-1 w-full">
        <p className=" text-[#606060]">Already have an account?</p>
        <Link href={"/login"} className=" text-[#0054A1]">
          Login
        </Link>
      </div>
    </FormContainer>
  );
};

export default SignupForm;
