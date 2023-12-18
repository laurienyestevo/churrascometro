import React, { useState } from "react";

const FormInput = ({
    type,
    id,
    placeholder,
    value,
    onChange,
    onBlur,
    isValid,
    errorMessage,
}) => {
    const [touched, setTouched] = useState(false);

    const handleBlur = () => {
        setTouched(true);
        onBlur && onBlur(id);
    };

    const getInputClassName = () => {
        return `input-form ${touched && !isValid ? "input-error" : ""}`;
    };

    const renderErrorMessage = () => {
        if (touched && !isValid) {
            return <p id={`invalid-${id}`}>{errorMessage}</p>;
        }
        return null;
    };

    return (
        <>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={getInputClassName()}
                value={value}
                onChange={(e) => onChange(id, e.target.value)}
                onBlur={handleBlur}
            />
            {renderErrorMessage()}
        </>
    );
};

export default FormInput;