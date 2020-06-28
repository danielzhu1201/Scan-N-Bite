import React, {Component} from 'react';
import firebaseApp from './config/firebase'

class Home extends Component<any, any> {
    constructor(props: any) {
        super(props); 
        this.logout = this.logout.bind(this); 
    }

    logout() {
        firebaseApp.auth().signOut(); 
    }

    render() {
        return(
           <div>
            <h1>Your are Home</h1>
            <button onClick={this.logout}>Logout</button>
           </div>
        ); 
    }
}

export default Home; 