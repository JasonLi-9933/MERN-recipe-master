import React from 'react';

const Button = ({color, text, clickHandler, isDisabled}) => {
    const buttonStyle = isDisabled ? `h-1/4 opacity-50 text-non px-8 py-2 rounded ${color} text-blue-50 max-w-max shadow-sm hover:shadow-lg sm:w-1/6 md:w-1/4`
                                   : `h-1/4 text-non px-8 py-2 rounded ${color} text-blue-50 max-w-max shadow-sm hover:shadow-lg`;

    return (
        <button
            onClick={clickHandler}
            className={buttonStyle}>
                {text}
        </button>
    );
}

export default Button;