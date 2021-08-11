import '../../Styles/Auth/Auth.scss';
import LoadingHorizontal from '../Misc/LoadingHorizontal';
import React,{ useRef,useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';
import {useDispatch} from 'react-redux';

function Auth() {
    const history = useHistory();
    const dispatch = useDispatch();
    // Toggle sign in/sign up
    const [login, setLogin] = useState(true);
    const [loading, setLoading] = useState(false);
    const [emailRef,userNameRef,passwordRef,repeatRef] = [useRef(),useRef(),useRef(),useRef()];
    const authFormSubmit = (event) => {
        event.preventDefault();
        const [emailInput,passwordInput] = [emailRef.current.value,passwordRef.current.value];
        // Check if passwors match
        if(!login) {
            if(passwordInput !== repeatRef.current.value) {
                alert('Passwords do not match!')
                return
            }
        } 
        setLoading(true);
    }
    return (
        <section className='auth'>
            <div className='auth-card box-shadow'>
                <h1 className='auth-title'>{login?'Sign In':'Sign Up'}</h1>
                <form action="" className={`auth-form ${login?'login':'signup'}`} onSubmit={authFormSubmit}>
                    <input type="email" className='authInput focus box-shadow'  ref={emailRef} placeholder='Email' required/>
                    {!login&& <input type="text" className='authInput focus box-shadow'  ref={userNameRef} placeholder='Username' required/>}
                    <input type="password" className='authInput focus box-shadow'  ref={passwordRef} placeholder='Password' required/>
                    {!login&& <input type="password"  className='authInput focus box-shadow'  ref={repeatRef} placeholder='Repeat Password' required/>}
                    {loading?<LoadingHorizontal />:<button className='auth-button hover button'>{login?'Sign In':'Sign Up'}</button>}
                </form>
                <button  className='auth-switch hover-filter' onClick={()=>setLogin(!login)}>{login?"Don't have an account?":'Use existing account'}</button>
            </div>
        </section>
    )
}

export default Auth