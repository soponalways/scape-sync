import React from 'react';

const Button = ({ label, onClick, className, variant = "primary", }) => {
    const classes = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-500 text-white hover:bg-gray-600',
        danger: 'bg-red-500 text-white hover:bg-red-600',
    };
    return (
        <button onClick={onClick} className={` ${classes[variant]} ${className}`}>
            {label}
        </button>
    );
};

export default Button;