import React from 'react';

const types = {
    email: {
        Regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Preencha um email inválido',
    },
    password: {
        Regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
        message:
            'A senha deve conter no mínimo 8 caracteres, com pelo menos um maiúsculo e um dígito numérico',
    },
};
// se o campo está vazio
// se o valor está de acordo com o regex
const useForm = (type) => {
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError('Preencha o campo com um valor');
            return false;
        } else if (types[type] && !types[type].Regex.test(value)) {
            setError(types[type].message);
            return false;
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({ target }) {
        if (error) validate(target.value);
        setValue(target.value);
        console.log(target.value);
    }

    return {
        value,
        setValue,
        error,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
    };
};

export default useForm;
