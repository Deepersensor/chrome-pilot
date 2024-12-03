// src/components/Button.tsx
import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary' }) => {
    const buttonStyles = variant === 'primary'
        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded'
        : 'bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded';

    return (
        <button className={buttonStyles} onClick={onClick}>
            {children}
        </button>
    );
};


export default Button;
