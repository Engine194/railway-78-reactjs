import React from 'react';

const TextInput = (props) => {

    const { inputClassName, changeInput, text } = props || {};

    const handleChangeInput = (event) => {
        const newVal = event.target.value;
        changeInput(newVal);
    };
    return (
        <fieldset className="">
            <input
                id="left"
                className={`${inputClassName} `}
                name="left"
                value={text}
                onChange={handleChangeInput}
            />
        </fieldset>
    );
};

export default TextInput;