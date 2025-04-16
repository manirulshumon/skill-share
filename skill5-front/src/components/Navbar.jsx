import React from 'react'
import { Link } from 'react-router-dom'
import Logo  from '../images/logo.png'

const Navbar = () => {
    return (
        <nav className="bg-teal-500 text-white p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                <img className='h-16 w-16 object-contain' src={Logo} alt="logo" />
                </Link>

                 {/* These Routes doesnot have page */}
                <div className="space-x-4">
                    <Link to="/login" className="hover:text-blue-200 transition-colors">
                        Login
                    </Link>
                    <Link to="/register" className="hover:text-blue-200 transition-colors">
                        Register
                    </Link>
                    <Link to="/create" className="hover:text-blue-200 transition-colors">
                        Create Post
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar