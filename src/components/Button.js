import React from "react";

const Button = ({ color, type, buttonText, operator }) => {
    return (
        <button className={ color } type={type} data-operator={ operator }>
            { buttonText }
        </button>
    );
}

export default Button;