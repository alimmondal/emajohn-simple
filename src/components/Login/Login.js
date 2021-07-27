import React, { useContext } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleGoogleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
firebase.initializeApp(firebaseConfig)


const Login = () => {

  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
  });

  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        handleResponse(res, true);
      })
  }

  //Fb Sign In handler 
//   const handleFbSignIn = () => {
//     const fbProvider = new firebase.auth.FacebookAuthProvider();
//     firebase
//         .auth()
//         .signInWithPopup(fbProvider)
//         .then((result) => {
//             var credential = result.credential;
//             var user = result.user;
//             var accessToken = credential.accessToken;
//             console.log(user)
//             history.replace(from);
//         })
//         .catch((error) => {
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             var email = error.email;
//             var credential = error.credential;
//         });
// }


  const fbSignIn = () => {
    handleFbSignIn()
      .then((res) => {
        handleResponse(res, true);
      })
  }

  const googleSignOut = () => {
    handleGoogleSignOut()
      .then(res => {
        handleResponse(res, false);
      })
  }

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  }


  //created user with email and password
  const handleBlur = (event) => {
    let isFieldValid = true;
    console.log(event.target.name, event.target.value)
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }
  //
  const handleSubmit = (e) => {
    // console.log(user.email, user.password);
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }

    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
    }
    e.preventDefault();
  }




  return (
    <div style={{textAlign:'center'}}>
      {
        user.isSignedIn ? <button onClick={googleSignOut}>Sign Out</button> :
          <button onClick={googleSignIn}>Sign In With Google</button>
      }
      <br />
      <button onClick={fbSignIn}>Sign In Using Facebook</button>

      {
        user.isSignedIn && <div>
          <p>Welcome {user.name}</p>
          <p>Your email: {user.email}</p>
          <img src={user.photo} alt="" />
        </div>
      }

      <h1>Our own authentication</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email} </p>
      <p>Password: {user.password}</p>

      <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
      <label htmlFor="newUser">New User Sign Up</label>

      <form onSubmit={handleSubmit}>
        {newUser && <input onBlur={handleBlur} type="text" name="name" placeholder="Your Name" id="" />
        }
        <br />
        <input type="email" onBlur={handleBlur} name="email" placeholder="your email address" id="" required />
        <br />
        <input type="password" onBlur={handleBlur} name="password" placeholder="Password" id="" required />
        <br />
        <input type="submit" value={newUser ? 'Sign Up' : 'Sign In'} />
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {user.success && <p style={{ color: 'green' }}>User {newUser ? ' created' : 'logged in'} successfully</p>}


    </div>
  );
};

export default Login;