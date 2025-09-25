import React from 'react';
import LogoScapeSync from '../../assets/Logo/LogoWhite.png';
import PlayStoreButton from '../../assets/others/Play Store download button.png';
import AppleStoreButton from '../../assets/others/Apple Store download button.png';
import vector2 from '../../assets/Vectors/Vector 2.png'
import vector3 from '../../assets/Vectors/Vector 3.png'
import vector4 from '../../assets/Vectors/Vector 4.png'
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { MdOutlineFacebook } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <div className='relative overflow-hidden max-w-7xl mx-auto px-4 md:px-6 lg:px-8'>
            {/* Content goes here */}
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-14 py-20 md:py-24 lg:py-28'>
                <div>
                    <img src={LogoScapeSync} alt="ScapeSync Logo" className='max-w-[200px] max-h-[76px]' />
                </div>
                <div>
                    <p className='text-[#CFD8D6]/70'>Your all-in-one platform for job scheduling, employee management, and client service built to keep your business running smoothly from anywhere.</p>
                </div>
                <div className='flex gap-3 md:gap-4 lg:gap-5 items-center justify-center'>
                    <img src={AppleStoreButton} alt="Download on Apple Store" className='cursor-pointer max-w-40 max-h-10' />
                    <img src={PlayStoreButton} alt="Download on Play Store" className='cursor-pointer max-w-40 max-h-10' />
                </div>
            </div>
            {/* Social Media Icons */}
            <div>
                <div className='flex gap-4 md:gap-6 lg:gap-8 items-center mb-6 md:mb-7 lg:mb-8'>
                    <FaYoutube size={24} className='text-white cursor-pointer' />
                    <FaTwitter size={24} className='text-white cursor-pointer' />
                    <MdOutlineFacebook size={24} className='text-white cursor-pointer' />
                    <AiOutlineInstagram size={24} className='text-white cursor-pointer' />
                </div>
                <div className='relative'>
                    <div className='border-t border-t-[#D7DAE0]/24 w-screen absolute top-0'></div>
                    <p className='text-[#E5E5E5]/24 text-sm py-[11px] '>&copy; 2021-2025, ScapeSync. All Rights Reserved.</p>
                </div>
            </div>
            {/* Shape or Style */}
            <div>
                <img src={vector3} alt="" className='absolute top-0 right-0 opacity-30' />
                <img src={vector2} alt="" className='absolute bottom-0 right-[200px] opacity-30' />
                <img src={vector4} alt="" className='absolute bottom-0 right-0 opacity-30' />
            </div>
        </div >
    );
};

export default Footer;