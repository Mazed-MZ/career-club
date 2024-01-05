import React, { useContext, useState } from "react";
import "./Signin.css";
import app from "../Firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";
import { UserContext, auth } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router";

const provider = new GoogleAuthProvider();

export default function Signin() {

    const { user, signinwithpass, googleSignin } = useContext(UserContext);

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';

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

    const handleGoogleSignin = () => {
        googleSignin(provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate(from, { replace: true });
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
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
                            <div className='google-btn' onClick={handleGoogleSignin}>
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
