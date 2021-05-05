import React, {useState,useEffect} from 'react';
import { useHistory } from "react-router-dom";
import Header from './Header'

const Login = () => {
    let history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history.push("/");
        }
    }, [])


    return (
        <>
        <Header/>
        <div>
            <h1>Login Page</h1>
        </div>
        </>
    )
}

export default Login

