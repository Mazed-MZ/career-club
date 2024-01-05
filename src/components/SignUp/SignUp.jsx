import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { amber } from '@mui/material/colors';
import { blue } from '@mui/material/colors';
import { UserContext, auth } from '../providers/AuthProvider';
import './SignUp.css';
import { useNavigate } from 'react-router';

const provider = new GoogleAuthProvider();
const Fbprovider = new FacebookAuthProvider();

export default function SignUp() {

    const { googleSignin } = useContext(UserContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    console.log(from)

    const GoogleColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(amber[500]),
        backgroundColor: amber[500],
        '&:hover': {
            backgroundColor: amber[800],
        },
    }));

    const FacebookColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(blue[500]),
        backgroundColor: blue[500],
        '&:hover': {
            backgroundColor: blue[800],
        },
    }));

    const handleEmailChange = (event) => {
        // console.log(event.target.value)
    }

    const handleSubmit = (event) => {
        //prevent page refresh
        event.preventDefault();
        //collect data from input field
        const email = event.target.email.value;
        const password = event.target.password.value;
        //create user in firebase
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ..
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

    const handleFacebookSignin = () => {
        signInWithPopup(auth, Fbprovider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });
    }

    return (
        <div>
            <div className='bg-img'>
                <div className='content'>
                    <h2>Create Your Job Profile</h2>
                    <form onSubmit={handleSubmit} action="">
                        <div className='field space'>
                            <span className='fa fa-user'></span>
                            <input type="text" name="name" required placeholder='User name' id="" />
                        </div>
                        <div className='field space'>
                            <span className='fa fa-user'></span>
                            <input type="text" name="email" required placeholder='Type your email' id="" />
                        </div>
                        <div className='field space'>
                            <span className='fa fa-lock'></span>
                            <input className='pass' required name="password" placeholder='Set new Password' id="" />
                        </div>
                        <div className='field space'>
                            <input type="submit" value="SIGN UP" />
                        </div>
                        <div className='another-login'>
                            Or sign-up with
                        </div>
                        <div className='social-btn'>
                            <div className='link-btn'>
                                <div className='fb-signin'>
                                    <i className='fab fa-facebook-f'></i><FacebookColorButton variant="contained" onClick={handleFacebookSignin}>Continue with Facebook</FacebookColorButton>
                                </div>
                            </div>
                            <div className='link-btn'>
                                <div className='google-signin'>
                                    <i className='fab fa-google'></i><GoogleColorButton variant="contained" onClick={handleGoogleSignin}>Continue with Google</GoogleColorButton>
                                </div>
                            </div>
                        </div>
                        <div className='text'>
                            <p>Already have an account? <a href="/signin"> Log in</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
