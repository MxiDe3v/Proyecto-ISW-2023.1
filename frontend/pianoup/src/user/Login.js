import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Card, Grid } from "@mui/material";
import ResponsiveAppBar from "../ResponsiveAppBar";
import './Login.css';

export default function Login() {
 // It will be very useful to create a function that sets the user in the sessionStorage
 return (
  <>
    <ResponsiveAppBar/>
    <div className="login-wrapper">
        <form>
            <label>
                <p>Username</p>
                <input type="text" />
            </label>
            <label>
                <p>Password</p>
                <input type="password" />
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
         </form>
     </div>
  </>
)
}
