import React from 'react';
import LogoScapeSync from '../../assets/Logo/LogoWhite.png';
import PlayStoreButton from '../../assets/others/Play Store download button.png';
import AppleStoreButton from '../../assets/others/Apple Store download button.png';

const Footer = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-24 lg:py-28'>
            {/* Content goes here */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 py-8'>
                <div>
                    <img src={LogoScapeSync} alt="ScapeSync Logo" />
                </div>
                <div>
                    <p className='text-[#CFD8D6]'>Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.</p>
                </div>
                <div className='flex gap-4 '>
                    <img src={PlayStoreButton} alt="Download on Play Store" className='cursor-pointer' />
                    <img src={AppleStoreButton} alt="Download on Apple Store" className='cursor-pointer' />
                </div>
            </div>
            {/* Shape or Style */}

        </div >
    );
};

export default Footer;