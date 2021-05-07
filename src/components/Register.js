import React, {useState,useEffect} from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import Header from './Header'

const Register = () => {
    const [first_name,SetFirst_name]=useState("");
    const [last_name,SetLast_name]=useState("");
    const [email,SetEmail]=useState("");
    const [password,SePassword]=useState("");
    let history = useHistory();

    useEffect(() => {
        if(localStorage.getItem('user-info'))
        {
            history.push("/");
        }
    }, [])

    async function register(){
        const item={first_name,last_name,email,password};
        let result = await fetch("http://127.0.0.1:8000/api/register",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
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
                <h1>Register</h1>
                <div className="my-2"><input type="text" value={first_name} onChange={(event)=>SetFirst_name(event.target.value)} className="form-controler" placeholder="first_name"/></div>
                <div className="my-2"><input type="text" value={last_name} onChange={(event)=>SetLast_name(event.target.value)} className="form-controler" placeholder="last_name"/></div>
                <div className="my-2"><input type="email" value={email} onChange={(event)=>SetEmail(event.target.value)} className="form-controler" placeholder="email"/></div>
                <div className="my-2"><input type="password" value={password} onChange={(event)=>SePassword(event.target.value)} className="form-controler" placeholder="password"/></div>
                <Button onClick={register}>Registrarse</Button>
            </div>
        </>
    )
}

export default Register
