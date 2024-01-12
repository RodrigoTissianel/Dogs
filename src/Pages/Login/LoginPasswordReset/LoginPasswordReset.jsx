import React from 'react';
import Input from '../../../Components/Input/Input';
import useForm from '../../../Hooks/useForm';
import useFetch from '../../../Hooks/useFetch';
import Button from '../../../Components/Button/Button';
import Error from '../../../Components/Helper/Error/Error';
import { PASSWORD_RESET } from '../../../Api';
import { useNavigate } from 'react-router-dom';
import Head from '../../../Components/Helper/Head/Head';

const LoginPasswordReset = () => {
    const [login, setLogin] = React.useState('');
    const [key, setKey] = React.useState('');
    const { loading, error, request } = useFetch();
    const password = useForm('password');
    const navigate = useNavigate();

    React.useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');

        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);

    async function handleSubmit(event) {
        event.preventDefault();

        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login,
                key,
                password: password.value,
            });

            const { response } = await request(url, options);
            if (response.ok) navigate('/login');
        }
    }

    return (
        <section className="animeLeft">
            <Head title="Reset a senha" />
            <h1 className="title">Resete sua senha</h1>

            <form onSubmit={handleSubmit}>
                <Input
                    label="Nova senha:"
                    type="password"
                    name="password"
                    {...password}
                />

                {loading ? (
                    <Button disabled>Resetando...</Button>
                ) : (
                    <Button>Resetar senha</Button>
                )}

                <Error error={error} />
            </form>
        </section>
    );
};

export default LoginPasswordReset;
