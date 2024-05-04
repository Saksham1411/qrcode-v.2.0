import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, Navigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const HomePage = () => {
  const { user } = useContext(UserContext);
  console.log(user);
  // if (!user) {
  //   return <Navigate to={"/"} />;
  // }
  return (
    <>
      <Navbar className="top-6 bg-transparent w-fit" />

      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-4xl sm:text-3xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          {/* inner content */}
          <div className="flex gap-4">
            <Link className="border border-neutral-200 bg-gray-200 bg-opacity-20  p-4 rounded-xl hover:bg-opacity-10">
              Create a Event
            </Link>
            <Link className="border border-neutral-200 bg-gray-200 bg-opacity-20  p-4 rounded-xl hover:bg-opacity-10">
              Already have a event
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
