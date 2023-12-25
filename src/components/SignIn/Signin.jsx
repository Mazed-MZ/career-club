import React, { useContext, useState } from "react";
import "./Signin.css";
import app from "../Firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext, auth } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";

export default function Signin() {

    const { user, signinwithpass } = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/home';

    const handleEmailChange = (event) => {
        // console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        //prevent page refresh
        event.preventDefault();
        //collect data from input field
        const email = event.target.email.value;
        const password = event.target.password.value;
        //sign-in user in firebase
        signinwithpass(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate(from, { replace: true })
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <div className='bg-img'>
                <div className='content'>
                    <h2>SIGN IN</h2>
                    <form onSubmit={handleSubmit} action="">
                        <div className='field'>
                            <span className='fa fa-user'></span>
                            <input type="text" name="email" required placeholder='Type your email' id="" />
                        </div>
                        <div className='field space'>
                            <span className='fa fa-lock'></span>
                            <input className='pass' required name="password" placeholder='give your password' id="" />
                        </div>
                        <div className='field space'>
                            <input type="submit" value="Sign in" />
                        </div>
                        <div className='another-login'>
                            Or sign-in with
                        </div>
                        <div className='link-btn'>
                            <div className='fb-btn'>
                                <i className='fab fa-facebook-f'></i><span>Continue with Facebook</span>
                            </div>
                        </div>
                        <div className='link-btn'>
                            <div className='google-btn'>
                                <i className='fab fa-google'></i><span>Continue with Google</span>
                            </div>
                        </div>
                        <div className='text'>
                            <p>New in Career Club? <a href="/signup"> Register now</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
