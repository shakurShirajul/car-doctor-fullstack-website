import { Link, useLocation, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { ToastContainer } from 'react-toastify';
// import {AuthContext}
const Login = () => {
    const { signIn, googleSignIn, successToast, errorToast } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const navigateToHomePage = () => {
        setTimeout(() => {
            navigate(location?.state ? location.state : "/");
        }, 2000);
    }

    const handleGoogleLogIn = () => {
        googleSignIn();
    }
    const handleForm = (event) => {
        event.preventDefault()
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
            .then((userCredential) => {
                successToast("Login Successful");
                navigateToHomePage();
            })
            .catch((error) => {
                errorToast('You have entered an invalid username or password');
                console.log(error.code, error.message);
            })
    }

    return (
        <div>
            <div>
                <div className='grid grid-cols-2 gap-16'>
                    <div>
                        <img src={login} alt="" />
                    </div>
                    <div className='space-y-7 p-20 border rounded-xl'>
                        <h1 className='text-4xl font-semibold text-center'>Login</h1>
                        <form onSubmit={handleForm} className='space-y-9'>
                            <label className='space-y-5'>
                                <p className='text-lg font-semibold'>Email</p>
                                <input type="email" placeholder='Your Email '
                                    name='email'
                                    className='w-full border rounded-xl py-4 pl-6'
                                />
                            </label>
                            <label className='space-y-5'>
                                <p className='text-lg font-semibold'>Confirm Password</p>
                                <input type="password"
                                    name='password'
                                    placeholder='Your password '
                                    className='w-full border rounded-xl py-4 pl-6'
                                />
                            </label>
                            <input type="submit" value="Login"
                                className='cursor-pointer text-xl font-semibold bg-[#FF3811] text-white py-4 w-full rounded-xl' />
                        </form>
                        <div className='text-center font-medium text-lg space-y-8'>
                            <p >Or Sign Up With</p>
                            <div>
                                <ul className='flex gap-4 justify-center'>
                                    <li><FaFacebook className='text-[#3B5998] h-[30px] w-[30px]' /></li>
                                    <li><FaLinkedin className='text-[#0A66C2] h-[30px] w-[30px]' /></li>
                                    <li><button onClick={handleGoogleLogIn}><FcGoogle className='h-[30px] w-[30px]' /></button></li>
                                </ul>
                            </div>
                            <p>
                                Have an account?
                                <Link to="/signup"> Sign In</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;