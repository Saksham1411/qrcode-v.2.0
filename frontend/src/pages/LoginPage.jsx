import React, { useContext } from "react";
import { useState } from "react";
import Loader from "../components/ui/Loader";
import { Link, Navigate } from "react-router-dom";
import axios from 'axios';
import { UserContext } from "../context/UserContext";
import toast from 'react-hot-toast';


const LoginPage = () => {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [navigate,setNavigate] = useState("");

    const { setUser } = useContext(UserContext);
    
  async function submitHandler(e) {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await axios.post("/login", { email, password });
      const data = await res.data;
      console.log(data);
      setUser(data);
      setNavigate('/home');
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
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
       {/* <div className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8"> */}
        
     
      <div className="flex flex-col gap-2 font-mono pb-4 w-1/3 border rounded-lg z-20 bg-white bg-opacity-70 shadow-md shadow-white">
        <div className="flex mb-3 border-b px-4 py-3">
          <span className="text-2xl m-auto font-bold font-mono">Login</span>
        </div>
        <form className="flex flex-col gap-6 p-4 pb-0" onSubmit={submitHandler}>
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
            {loading ? <Loader /> : "Login"}
          </button>
          <Link to={'/signin'} className=" underline">Create new Account</Link>
        </form>
      </div>
       {/* </div>  */}
    {/* // </div> */}
    </div>

  );
};

export default LoginPage;
