import Link from "next/link";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import google from "../../public/google.png";
import facebook from "../../public/facebook.png";
import Image from "next/image";

const Login = ({ closePopUp }) => {
  let [name, setName] = useState();
  let [nameErr, setNameErr] = useState();

  let [email, setEmail] = useState();
  let [emailErr, setEmailErr] = useState();

  let [password, setPassword] = useState();
  let [passwordErr, setPasswordErr] = useState();
  let [passwordEye, setPasswordEye] = useState(false);

  let manageName = (element) => {
    let nameCheck = element.target.value;
    setName(nameCheck);
    setNameErr("");
  };

  let manageEmail = (element) => {
    let emailCheck = element.target.value;
    setEmail(emailCheck);
    setEmailErr("");
  };

  let managePassword = (element) => {
    let passwordCheck = element.target.value;
    setPassword(passwordCheck);
    setPasswordErr("");
  };

  let manageSubmit = () => {
    if (!name) {
      setNameErr("Name field is required");
    }
    if (!email) {
      setEmailErr("Email field is required");
    }
    if (!password) {
      setPasswordErr("Password is required");
    } else if (!/^(?=.*[0-9])/.test(password)) {
      setPasswordErr("Password must contain one digit from 1 to 9");
    } else if (!/^(?=.*[a-z])/.test(password)) {
      setPasswordErr("At least one lowercase letter is required");
    } else if (!/^(?=.*[A-Z])/.test(password)) {
      setPasswordErr("At least one uppercase letter is required");
    } else if (!/^(?=.*\W)/.test(password)) {
      setPasswordErr("At least one special character is required");
    } else if (!/^(?!.* )/.test(password)) {
      setPasswordErr("Password contain no space");
    } else if (!/^.{8,16}$/.test(password)) {
      setPasswordErr("Password must be 8-16 characters long.");
    }
  };
  return (
    <div className="bg-white py-10 px-8 rounded shadow-lg relative">
      <h2 className="text-[32px] font-semibold text-center">Login</h2>
      <button
        onClick={closePopUp}
        className="absolute top-[5%] right-[4%] text-black font-bold text-lg"
      >
        ✕
      </button>
      <div className="form mt-0 md:mt-7 w-full flex items-center justify-center flex-col gap-4">
        <div className="w-full flex flex-col gap-3 relative">
          <label htmlFor="name" className="w-full text-[18px] text-darkBlue">
            Full name
          </label>
          <input
            onChange={manageName}
            placeholder="Enter your name"
            value={name}
            className="border border-[#C5C5C5] outline-none bg-transparent rounded-lg py-2 md:py-3 px-4 w-full text-[18px] font-[400] placeholder:text-[#A6A6A6]"
            type="text"
            id="name"
          />
          <p className="text-sm text-red absolute left-0 top-[103%]">
            {nameErr}
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 relative">
          <label htmlFor="email" className="w-full text-[18px] text-darkBlue">
            Email Address
          </label>
          <input
            onChange={manageEmail}
            value={email}
            placeholder="Enter your email"
            className="border border-[#C5C5C5] outline-none bg-transparent rounded-lg py-2 md:py-3 px-4 w-full text-[18px] font-[400] placeholder:text-[#A6A6A6]"
            type="email"
            id="email"
          />
          <p className="text-sm text-red absolute left-0 top-[103%]">
            {emailErr}
          </p>
        </div>
        <div className="w-full flex flex-col gap-3 relative">
          <label
            htmlFor="password"
            className="w-full text-[18px] text-darkBlue"
          >
            Password
          </label>
          <input
            onChange={managePassword}
            placeholder="Enter your password"
            value={password}
            className="border border-[#C5C5C5] outline-none bg-transparent rounded-lg py-2 md:py-3 px-4 w-full text-[18px] font-[400] placeholder:text-[#A6A6A6]"
            type={passwordEye ? "text" : "password"}
            id="password"
          />
          <p className="text-sm text-red absolute left-0 top-[103%]">
            {passwordErr}
          </p>
          <FaEye
            onClick={() => {
              setPasswordEye(!passwordEye);
            }}
            className={`absolute right-5 top-[65%] text-[#868686] text-xl ${
              passwordEye ? "opacity-100" : "opacity-0"
            }`}
          />
          <FaEyeSlash
            onClick={() => {
              setPasswordEye(!passwordEye);
            }}
            className={`absolute right-5 top-[65%] text-[#868686]  text-xl ${
              passwordEye ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <input type="checkbox" name="remember" id="remember" />
            <label className="text-darkBlue text-base" htmlFor="remember">
              Remember me
            </label>
          </div>
          <Link href="/">Forgot Password</Link>
        </div>
        <button
          onClick={manageSubmit}
          className="bg-orange md:w-[414px] py-4 rounded-lg text-white font-bold text-xl"
          type="submit"
        >
          Login
        </button>
        <div className="">
          <h2 className="text-[18px] text-darkBlue font-bold">
            Or Sign in with
          </h2>
        </div>
        <div className="btnDiv flex gap-4">
          <div className="btn w-[199px] py-2 border-[#D9D9D9] border rounded-lg flex items-center justify-center">
            <Link href="/" className="flex gap-2">
              <Image src={google} alt="google" />
              <span>Google</span>
            </Link>
          </div>
          <div className="btn w-[199px] py-2 border-[#D9D9D9] border rounded-lg flex items-center justify-center">
            <Link href="/" className="flex gap-2">
              <Image src={facebook} alt="google" />
              <span>Facebook</span>
            </Link>
          </div>
        </div>
        <div className="font-semibold">
          Don’t have an account?{" "}
          <Link href="/" className="text-orange">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
