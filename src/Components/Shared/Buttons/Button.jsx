import React from 'react';

const Button = ({ label, onClick, className, variant = "primary" }) => {
    const classes = {
        primary: 'bg-primary text-white hover:bg-primary-focus',
        outline: 'bg-transparent border border-primary text-primary hover:bg-primary hover:text-white',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };
    return (
        <button onClick={onClick} className={`rounded-sm md:rounded-md lg:rounded-lg cursor-pointer hover:scale-105 transition-all transform duration-300 font-public-sans md:font-semibold font-medium lg:font-bold ${classes[variant]} ${className}`}>
            {label}
        </button>
    );
};

export default Button;