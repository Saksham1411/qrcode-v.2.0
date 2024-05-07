import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import toast from 'react-hot-toast'
import axios from 'axios';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setUser} = useContext(UserContext);
    const logout = async()=>{
        try {
            setLoading(true);
            const res = await axios.post('/logout');
            setUser(null);
        } catch (error) {
            toast.error(error.msg);
        }finally{
            setLoading(false);
        }
    }
    return {loading,logout};
}

export default useLogout