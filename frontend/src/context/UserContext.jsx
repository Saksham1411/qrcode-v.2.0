import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  console.log(user);
  useEffect(()=>{
    if(!user){
      axios.get('/profile').then(({data})=>{
        setUser(data);
        navigate('/home');
      }).catch(err=>{
        console.log(err);
      })
    }
  },[])
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}