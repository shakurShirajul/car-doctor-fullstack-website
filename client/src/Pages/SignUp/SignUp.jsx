import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { ToastContainer } from 'react-toastify';
const SignUp = () => {
    const { signUp, updateUser, successToast, errorToast } = useContext(AuthContext);

    const handleForm = (event) => {
        console.log(event);

        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        console.log(name, email, password);

        signUp(email, password)
            .then((userCredential) => {
                updateUser(name)
                    .then(() => {
                        successToast('Registration Successful')
                        console.log(url);
                        data.target.reset();
                        navigateToHomePage();
                    }).catch((error) => {
                        errorToast(error.message)
                    })
            })
            .catch((error) => {
                const errorMessage = error.message;
                errorToast(error.message)
            })
    }
    return (
        <div>
            <div className='grid grid-cols-2 gap-16'>
                <div>
                    <img src={login} alt="" />
                </div>
                <div className='space-y-7 p-20 border rounded-xl'>
                    <h1 className='text-4xl font-semibold text-center'>Sign Up</h1>
                    <form onSubmit={handleForm} className='space-y-9'>
                        <label className='space-y-5'>
                            <p className='text-lg font-semibold'>Name</p>
                            <input
                                type="text" placeholder='Your Name ' name='name'
                                className='w-full border rounded-xl py-4 pl-6'
                            />
                        </label>
                        <label className='space-y-5'>
                            <p className='text-lg font-semibold'>Email</p>
                            <input type="email" placeholder='Your Email ' name='email'
                                className='w-full border rounded-xl py-4 pl-6'
                            />
                        </label>
                        <label className='space-y-5'>
                            <p className='text-lg font-semibold'>Confirm Password</p>
                            <input type="password" placeholder='Your password ' name='password'
                                className='w-full border rounded-xl py-4 pl-6'
                            />
                        </label>
                        <input type="submit" value="Sign Up"
                            className='cursor-pointer text-xl font-semibold bg-[#FF3811] text-white py-4 w-full rounded-xl' />
                    </form>
                    <div className='text-center font-medium text-lg space-y-8'>
                        {/* <p >Or Sign Up With</p> */}
                        {/* <div>
                            <ul className='flex gap-4 justify-center'>
                                <li><FaFacebook className='text-[#3B5998] h-[30px] w-[30px]' /></li>
                                <li><FaLinkedin className='text-[#0A66C2] h-[30px] w-[30px]' /></li>
                                <li><FcGoogle className='h-[30px] w-[30px]' /></li>
                            </ul>
                        </div> */}
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SignUp;