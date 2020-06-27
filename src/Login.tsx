import React, {Component} from 'react';
import firebaseApp from './config/firebase'
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class Login extends Component<any, any> {
    constructor(props: any) {
        super(props); 
        this.login = this.login.bind(this); 
        this.handleChange = this.handleChange.bind(this); 
        this.signup = this.signup.bind(this); 
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault(); 
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u) => {
            console.log("success"); 
        })
        .catch((error) => {
            console.log(error); 
        }); 
    }

    signup(e) {
        e.preventDefault(); 
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) => {
            console.log(error); 
        }); 
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    // uiConfig = { 
    //     signInFlow: 'popup', 
    //     // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    //     signInOptions: [
    //         // Leave the lines as is for the providers you want to offer your users.
    //         provider: firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,            
    //     ],
    //     callbacks: { 
    //       // Avoid redirects after sign-in. 
    //       signInSuccessWithAuthResult: () => false 
    //     } 
    // }; 

    render() {
        return(
            <div>
                <form>
                    <label>Email Address</label>
                    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="txtEmail" placeholder="Enter Email"></input>
                    <label>Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="txtPassword" placeholder="Password"></input>

                    <button type="submit" onClick={this.login}>Login</button>
                    <button onClick={this.signup}>Signup</button>
                </form>
            </div>
        ); 
    }
}

export default Login; 