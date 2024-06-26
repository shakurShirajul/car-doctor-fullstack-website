import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GithubAuthProvider, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const signIn = (email, password) => {
        setLoader(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const signUp = (email, password) => {
        setLoader(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const githubSignIn = () => {
        setLoader(true);
        const githubProvider = new GithubAuthProvider();
        githubProvider.addScope("read:user");
        githubProvider.addScope("user:email");
        return signInWithPopup(auth, githubProvider);
    }
    const googleSignIn = () => {
        setLoader(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }
    const updateUser = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
        })
    }
    const logOut = () => {
        setLoader(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("Changed");
            setUser(currentUser);
            setLoader(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    // Toast Design

    const updateToast = (toastMessage) => {
        toast.info(toastMessage, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const successToast = (toastMessage) => {
        toast.success(toastMessage, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const errorToast = (toastMessage) => {
        toast.error(toastMessage, {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const authInfo = {
        user,
        setUser,
        loader,
        setLoader,
        signIn,
        signUp,
        updateUser,
        githubSignIn,
        googleSignIn,
        logOut,
        updateToast,
        successToast,
        errorToast
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProviders;