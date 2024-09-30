import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './login.module.css'


const Login = ({ onTokenReceived }) => {
    const [Chef_Id, setChef_Id] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    /*   const { setToken } = useToken(""); */ // Access setToken from context

    const handleSubmit = async (e) => {
        console.log("Inside handleSubmit");
        e.preventDefault()
        try {
            const response = await axios.get(
                `http://localhost:5000/api/v1/Chef_Info/login?Chef_Id=${Chef_Id}&password=${password}`
            );
            console.log("response", response)

            const token = response.data.token;
            sessionStorage.setItem("role", response.data.data.role)
            localStorage.setItem('token', token);
            localStorage.setItem("Chef_Id", Chef_Id)
            localStorage.setItem("Chef_Name", response.data.data.Chef_Name)

            if (!response.data.data.error) {
                console.log('Login successful');
                //sessionStorage.setItem('auth',token);
                navigate('/home');
                onTokenReceived(token); // Store token in context
                window.location.reload()
            } else {
                console.log('Login failed');
                setMessage('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Login error:', error);
            //setMessage('An error occurred during login. Please try again.');
            setMessage('Invalid Credentials. Please try again.');
        }
    };

    return (
        <div className={classes.loginblock}>
            <form onSubmit={handleSubmit}>
                <div className={classes.logincontainer}>
                    <h1>Login</h1>
                    <input
                        type="text" required
                        className={classes.formcontrol}
                        placeholder="Chef_Id"
                        value={Chef_Id}
                        onChange={(e) => setChef_Id(e.target.value)}
                    />
                    <input
                        type="password" required
                        className={classes.formcontrol}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className={classes.buttoncontainer}>
                        <button className="btn btn-secondary" type='submit'>
                            Login
                        </button>
                    </div>
                    {message && <p className={classes.errormessage}>{message}</p>}
                </div>
            </form>
        </div>
    );
};

export default Login;


