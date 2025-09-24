import React from 'react';
import logoScapeSync from '../../assets/Logo/Logoblack.png';
import Button from '../Shared/Buttons/Button';

const Navbar = () => {
    return (
        <div>
           <nav className='flex justify-between items-center '>
                {/* Left Side */}
                <div>
                    <img src={logoScapeSync} alt="ScapeSync Logo" />
                </div>
                {/* Right Side */}
                <div>
                    <Button label="Login" variant="primary" className="px-4 py-2 rounded" onClick={() => console.log('Login clicked')} />
                </div>
           </nav>
        </div>
    );
};

export default Navbar;