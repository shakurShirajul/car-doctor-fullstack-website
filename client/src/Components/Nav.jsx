import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'

const Nav = () => {
    return (
        <div className="container mx-auto">
            <div className="navbar bg-base-100 mb-14">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li><Link>About</Link></li>
                            <li><Link>Services</Link></li>
                            <li><Link>Blog</Link></li>
                            <li><Link>Contact</Link></li>
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl">
                        <img src={logo} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg font-semibold text-[#444444]">
                        <li><Link>Home</Link></li>
                        <li><Link>About</Link></li>
                        <li><Link>Services</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Contact</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;