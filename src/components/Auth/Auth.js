import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getAuth, signInWithRedirect, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, signInWithPopup } from "firebase/auth";
import './Auth.css';
import { TextField } from "@material-ui/core"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa"

const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [error, setError] = useState("");
    const [disable, setDisable] = useState(true);
    const history = useHistory(); 

    const onChange = (event) => {
        const {target: {name, value}} = event;
        if (name === "email") {
            setEmail(value)
        } else if (name==="password") {
            setPassword(value)
        }

        if (email && password) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }
    
    const onSubmit = async(event) => {
        event.preventDefault();
        let auth = getAuth();
        try {
            let data;
            if(newAccount){
                data = await createUserWithEmailAndPassword(auth, email, password)
            } else {
                data = await signInWithEmailAndPassword(auth, email, password)
            }
            console.log(data)
            history.push('/')
        } catch (error) {
            setError(error.message)
        }
    }

    const toggleAccount = () => {
        setNewAccount(prev => !prev);
    }

    const onSocialClick = async (event) => {
        let {target:{name}} = event;
        const auth = getAuth();
        let provider;
        if(name === "google") {
            provider = new GoogleAuthProvider();
        } else if (name === "facebook") {
            provider = new FacebookAuthProvider();
        } 
        else if(name === "github") {
            provider = new GithubAuthProvider();
        }
        await signInWithPopup(auth, provider).then(res=>{
            history.push("/")
        }).catch(err=>{
            console.log(error)
        });
    }

    return (
        <div className="auth__container">
            <div className="login__logo__container">
                <span style={{fontSize: '30px'}}>Log In</span>
            </div>
            <hr className="hr--small"/>
            <div className="login__container">
                <form onSubmit={onSubmit} className="form__container">
                    <TextField InputLabelProps={{style: {fontSize: 12, fontFamily: 'Arapey, sans-serif'}}} className="form__input" label="Email Address" name="email" type="text" placeholder="Email" value={email} onChange={onChange} required/>
                    <TextField InputLabelProps={{style: {fontSize: 12, fontFamily: 'Arapey, sans-serif'}}} className="form__input" label="Password" name="password" type="password" placeholder="Password" value={password} onChange={onChange} required />
                    <input onChange={onChange} disabled={disable} className="submit__input" type="submit" value={newAccount ? "CREATE ACCOUNT" : "SIGN IN"} />
                </form>
                
                <div className="divider">
                    <hr className="divider__show"/>
                    <span>OR</span>
                    <hr className="divider__show"/>
                </div>

                <div className="social__auth__container">
                    <button className="social__button" onClick={onSocialClick} name="google"><FcGoogle className="button__logo" size={18}/>Continue with Google</button>
                    <button className="social__button" onClick={onSocialClick} name="facebook"><FaFacebook className="button__logo" style={{ color: "#3b5998" }} size={18} />Continue with Facebook</button>
                    <button className="social__button" onClick={onSocialClick} name="github"><FaGithub className="button__logo" style={{ color: "#171515" }} size={18} />Continue with Github</button>
                </div>
            
                <div className="toggle__sign">
                    <p>Don't have an account?</p>
                    <p className="toggle__sign__p" onClick={toggleAccount}>{!newAccount ? "Sign Up" : "Sign In"}</p>
                </div>
            </div>

            <span className="security">
                Secure Login with reCAPTCHA subject to Google <a href="https://policies.google.com/terms?hl=en">Terms</a> & <a href="https://policies.google.com/privacy?hl=en">Privacy</a>
            </span>
            {error}
        </div>
    )
}

export default Auth
