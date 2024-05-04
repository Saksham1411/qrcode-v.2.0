import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import axios from 'axios';
import { Toaster } from "react-hot-toast";
import HomePage from "./pages/HomePage";


function App() {
  axios.defaults.baseURL = import.meta.env.VITE_BACKEND;
  axios.defaults.withCredentials = true;
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/signin" element={<SignupPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App
