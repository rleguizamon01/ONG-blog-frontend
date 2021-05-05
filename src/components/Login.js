import React, {useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Header from './Header'

const Login = () => {
    let history = useHistory();
    const [email,SetEmail]=useState("");
    const [password,SePassword]=useState("");

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history.push("/");
        }
    }, [])

    async function login(){
        const item={email,password};
        let result = await fetch("http://127.0.0.1:8000/api/login",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            }
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/");
    }

    return (
        <>
        <Header/>
            <div className="col-sm-10 offset-sm-5">
                <h1>Login</h1>
                <div className="my-2"><input type="email" value={email} onChange={(event)=>SetEmail(event.target.value)} className="form-controler" placeholder="email"/></div>
                <div className="my-2"><input type="password" value={password} onChange={(event)=>SePassword(event.target.value)} className="form-controler" placeholder="password"/></div>
                <Button onClick={login}>Ingresar</Button>
            </div>
        </>
    )
}

export default Login

