import React from 'react';
import { User } from '../interfaces';
import { useRouter } from 'next/router'

const useAuth = () => {

    const router = useRouter()
    const [loading, setLoading] = React.useState<boolean>(false);

    const setEmailToLocalStorage = (email:string)=>{
        setLoading(true);
        // The timeout is for the requested 3 second loading in the document
        setTimeout(() => {
            setLoading(false)
            router.push("/panel")
        }, 3000);
        if (typeof window !== "undefined") {
            localStorage.setItem("user_email", email)
        }
    }

    const getUserData = ()=>{
        if (typeof window !== "undefined") {
            return localStorage.getItem("user_email")
        }
        return;
    }

    const isLoggedIn = ():boolean=>{
        if (typeof window !== "undefined") {
            return localStorage.getItem("user_email")?.length > 0;
        }
        return false;
    }
    

    const login = (email:string)=>{
        setEmailToLocalStorage(email)
    }

    const signup = (user:User)=>{
        setEmailToLocalStorage(user.email)
    }

    const logout = ()=>{
        if (typeof window !== "undefined") {
            localStorage.removeItem("user_email")
            router.push("/auth/login")
        }
    }

    return {
        login,
        signup,
        loading,
        getUserData,
        isLoggedIn,
        logout
  };
};

export default useAuth;