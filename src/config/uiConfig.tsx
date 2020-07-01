import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const uiConfig = {
  signInFlow: "popup",
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export default uiConfig;
