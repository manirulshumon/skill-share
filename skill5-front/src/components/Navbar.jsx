import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../images/logo.png'


const Navbar = () => {

    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="bg-teal-500 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    <img className='h-16 w-16 object-contain' src={Logo} alt="logo" />
                </Link>

                <div className="flex items-center space-x-4">
                    {isLoggedIn ? (
                        <>
                            <Link
                                to="/create"
                                className="px-3 py-2 rounded-md text-lg font-medium text-gray-100 hover:bg-teal-600"
                            >
                                Create Post
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="px-3 py-2 rounded-md text-lg font-medium text-red-600 hover:bg-teal-600"
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/login"
                                className="px-3 py-2 rounded-md text-lg font-medium text-gray-100 hover:bg-teal-600"
                            >
                                Login
                            </Link>
                            <Link
                                to="/register"
                                className="px-3 py-2 rounded-md text-lg font-medium text-gray-100 hover:bg-teal-600"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    )
}

export default Navbar