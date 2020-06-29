import React, {Component} from 'react';
import firebaseApp from './config/firebase'; 
import 'firebase/auth';
import uiConfig from './config/uiConfig'; 
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Login extends Component<any, any> {
    constructor(props: any) {
        super(props); 
        // this.login = this.login.bind(this); 
        // this.handleChange = this.handleChange.bind(this); 
        // this.signup = this.signup.bind(this); 
        this.state = {
            email: '',
            password: '',
            fireErrors: ''
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
                <form>
                    <label>Email Address</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="txtEmail" placeholder="Enter Email"></input>
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="txtPassword" placeholder="Password"></input>

                    <button type="submit" onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebaseApp.auth()}/>
                </form>
            </div>
        ); 
    }
}

export default Login; 