import React from 'react';


const InputColors = (InputComponent) => {
    const forwardRef = (props, ref) => {
        const onType = (event) => {
            const { value } = event.target;
            if (value === 'blue') {
                ref.current.style.backgroundColor = 'blue';
            } else if (value === 'red') {
                ref.current.style.backgroundColor = 'red';
            } else if (value === 'green') {
                ref.current.style.backgroundColor = 'green';
            } else {
                ref.current.style.backgroundColor = '#fff';
            }
        }
        return (
            <InputComponent forwardedRef={ref} onChange={onType} {...props} />
        );
    };
    return React.forwardRef(forwardRef);
};

export default InputColors;
