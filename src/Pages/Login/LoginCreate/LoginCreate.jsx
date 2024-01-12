import React from 'react';
import { USER_POST } from '../../../Api';
import Button from '../../../Components/Button/Button';
import Error from '../../../Components/Helper/Error/Error';
import Input from '../../../Components/Input/Input';
import { UserContext } from '../../../Context/UserContext';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import Head from '../../../Components/Helper/Head/Head';

const LoginCreate = () => {
    const username = useForm();
    const email = useForm('email');
    const password = useForm('password');
    const { loading, error, request } = useFetch();
    const { userLogin } = React.useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();
        const { url, options } = USER_POST({
            username: username.value,
            email: email.value,
            password: password.value,
        });
        const { response } = await request(url, options);
        if (response.ok) userLogin(username.value, password.value);
    }

    return (
        <section className="animeLeft">
            <Head title="Criar conta" />
            <h1 className="title">Cadastre-se</h1>
            <form onSubmit={handleSubmit}>
                <Input
                    label="Usuário"
                    type="text"
                    name="username"
                    {...username}
                />
                <Input label="Email" type="email" name="email" {...email} />
                <Input
                    label="Senha"
                    type="password"
                    name="password"
                    {...password}
                />
                {loading ? (
                    <Button disabled>Cadastrando...</Button>
                ) : (
                    <Button>Cadastrar</Button>
                )}

                <Error error={error} />
            </form>
        </section>
    );
};

export default LoginCreate;
