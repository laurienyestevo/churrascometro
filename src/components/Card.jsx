import React, { useState } from "react";

const Button = ({ className, onClick, children }) => (
    <button className={className} onClick={onClick}>
        {children}
    </button>
);

const Input = ({ label, id, onValueChange }) => {
    const [value, setValue] = useState(0);

    const handleDecrement = () => {
        setValue((prevValue) => Math.max(0, prevValue - 1));
        onValueChange(value - 1);
    };

    const handleIncrement = () => {
        setValue((prevValue) => prevValue + 1);
        onValueChange(value + 1);
    };

    return (
        <div className="input-group">
            <label htmlFor={id}>{label}</label>
            <input
                type="number"
                id={id}
                value={value}
                className="input-valid"
                readOnly
            />
            <div className="button-group">
                <Button
                    className="input-group__button--small"
                    onClick={handleDecrement}
                >
                    -
                </Button>
                <Button
                    className="input-group__button--small"
                    onClick={handleIncrement}
                >
                    +
                </Button>
            </div>
        </div>
    );
};

export default Input;