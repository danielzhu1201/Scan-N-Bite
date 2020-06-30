import React, {Component} from 'react';
import firebaseApp from '../config/firebase'; 
import 'firebase/auth';
import uiConfig from '../config/uiConfig'; 
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import TextField from '@material-ui/core/TextField';

import modules from '../components/styles/Login.module.css'

class Login extends Component<any, any> {
    constructor(props: any) {
        super(props); 
        // this.login = this.login.bind(this); 
        // this.handleChange = this.handleChange.bind(this); 
        // this.signup = this.signup.bind(this); 
        this.state = {
            email: '',
            password: '',
            fireErrors: '',
            imageURL: '/Fruits.jpg',
        }
    }

    login = (e) => {
        e.preventDefault(); 
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
            console.log("success"); 
        })
        .catch((error) => {
            this.setState({fireErrors: error.message})  
        }); 
    }

    signup = (e) => {
        e.preventDefault(); 
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            this.setState({fireErrors: error.message})  
        }); 
    }

    handleChange = e => {
        this.setState({[e.target.name]: e.target.value}); 
    }

    render() {
        let errorNotification = this.state.fireErrors ? (<div>{this.state.fireErrors}</div>) : null; 

        return(
            <div>
                {errorNotification}
                <div>
                    <img
                        className={modules.loginImg}
                        src={process.env.PUBLIC_URL + this.state.imageURL}
                        />
                    <p className={modules.loginTitle}><span>Sign In for a Mobile</span><span>Dining Experience!</span></p>
                </div>
                <form>
                    <div>
                        <input className={modules.loginInputEmail} value={this.state.email} onChange={this.handleChange} type="email" name="email" id="txtEmail" placeholder="Email"></input>
                    </div>
                    <div>
                        <input className={modules.loginInputPassword} value={this.state.password} onChange={this.handleChange} type="password" name="password" id="txtPassword" placeholder="Password"></input>
                    </div>
                    <div>
                        <p className={modules.loginNote}>We will sign up for you if you’re a first-time user!</p>
                    </div>
                    <button type="submit" onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()}/>
                </form>
            </div>
        ); 
    }
}

export default Login; 