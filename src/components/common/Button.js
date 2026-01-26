import React from 'react';

function Button({ children, variant = 'primary', onClick, className = '' }) {
    const baseStyles = 'px-6 py-3 rounded-md font-semibold transition-all duration-300';

    const variants = {
        primary: 'bg-[#2F7C6E] hover:bg-[#256358] text-white',
        secondary: 'bg-[#F1F9F6] hover:bg-[#e6f4ef] text-[#212529] border border-[#ADB5BD]',
    };

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
