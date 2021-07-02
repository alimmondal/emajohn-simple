import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initializeLoginFramework = () => {
    // firebase.initializeApp(firebaseConfig);
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
     }
}


export const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
        .then(res => {
            const { displayName, photoURL, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true,
            }
            setUserToken();
            return signedInUser;
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })
}

const setUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
        sessionStorage.setItem('token', idToken);
      }).catch(function(error) {
        // Handle error
      });
}

// Fb Sign In handler 
export const handleFbSignIn = () => {
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(fbProvider).then((result) => {
            var credential = result.credential;
            var user = result.user;
            user.success = true;
            return user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, errorMessage, email, credential)
        });
}


export const handleGoogleSignOut = () => {
    return firebase.auth().signOut()
        .then(res => {
            const signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                error: '',
                success: '',
            }
            return signedOutUser;
        }).catch((error) => {
            console.log(error);
        });
}


export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            updateUserName(name);
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}

export const signInWithEmailAndPassword = (email, password) => {
     return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        })
        .catch((error) => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}


//update user info
const updateUserName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
      
    }).then(() => {
      console.log('Update user name')
    }).catch((error) => {
      console.log(error);
    });
  }