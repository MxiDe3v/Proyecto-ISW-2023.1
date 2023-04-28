import React, { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { TextField, Button, Card, Grid } from "@mui/material";
import ResponsiveAppBar from "../ResponsiveAppBar";


function Register() {
    const axios = require('axios')


    const [isChecked, setIsChecked] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        is_tutor: '', 
      });

    const checkHandler = () => {
        setIsChecked(!isChecked)
        if (!isChecked){ 
            formData.is_tutor= "true";
        } else {
            formData.is_tutor= "false";
        }
    }

    const [response, setResponse] = useState("");
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };


    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        alert("User registered succesfully")
        axios.post('http://localhost:8000/users', formData)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        sessionStorage.setItem('user', formData.username);
        navigate('/');
  };

  return (
    <>
        <ResponsiveAppBar/>
        <div className="login-wrapper">
        <h2>Register</h2>
            <form onSubmit={handleSubmit}> 
                <label>
                    <p>Username</p>
                    <input type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}/>
                </label>
                <label>
                    <p>Email</p>
                    <input type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" 
                            name="password"
                            value={formData.password}
                            onChange={handleChange}/>
                </label>
                <label>
                    <p>Es tutor?</p>
                    <input type="checkbox" 
                            id="checkbox" 
                            checked={isChecked}
                            onChange={checkHandler}
                    />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
             </form>
            {response && <p>{response}</p>}
         </div>
    </>
  )
}

export default Register;
