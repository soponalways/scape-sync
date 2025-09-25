import React from 'react';
import logoScapeSync from '../../assets/Logo/Logoblack.png';
import Button from '../Shared/Buttons/Button';

const Navbar = () => {
    return (
        <div>
           <nav className='flex justify-between items-center py-3 md:py-4 lg:py-5 max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
                {/* Left Side */}
                <div>
                    <img src={logoScapeSync} alt="ScapeSync Logo" />
                </div>
                {/* Right Side */}
                <div>
                    <Button label="Get Started" variant="primary" className="px-4 py-2 rounded" />
                </div>
           </nav>
        </div>
    );
};

export default Navbar;