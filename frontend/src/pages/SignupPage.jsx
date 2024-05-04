import React, { useContext } from "react";
import { useState } from "react";
import Loader from "../components/ui/Loader";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast';

const SignupPage = () => {
  const [email, setEmail] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [navigate,setNavigate] = useState("");
  async function submitHandler(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post("/signin", { fullName:name, email, password });
      const data = await res.data.user;
      setNavigate("/login");
      
    } catch (error) {
      console.log(error.response.data.msg);
      toast.error(error.response.data.msg);
    }finally{
      setLoading(false);
    }
  }
  if(navigate){
    return <Navigate to={navigate}></Navigate>;
  }
  return (
    // <div className="bg-black h-screen w-screen flex justify-center items-center">
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex flex-col gap-2 font-mono pb-4 w-1/3 border rounded-lg z-20 bg-gray-50 shadow-md shadow-white">
        <div className="flex mb-3 border-b px-4 py-3">
          <span className="text-2xl m-auto font-bold font-mono">
            Create new account
          </span>
        </div>
        <form className="flex flex-col gap-6 p-4 pb-0" onSubmit={submitHandler}>
          <input
            type="name"
            placeholder="Full Name"
            className="border border-black rounded-md h-12 px-2 text-xl"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-black rounded-md h-12 px-2 text-xl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-black rounded-md h-12 px-2 text-xl"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="rounded-md h-12 w-1/2 py-2 text-xl bg-black outline-none text-white font-mono"
          >
            {loading ? <Loader /> : "Signup"}
          </button>
          <Link to={"/"} className=" underline">
            Already have a account
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
