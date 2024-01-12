import React from 'react';
import styles from './LoginForm.module.css';
import stylesBtn from '../../../Components/Button/Button.module.css';
import Input from '../../../Components/Input/Input';
import useForm from '../../../Hooks/useForm';
import Button from '../../../Components/Button/Button';
import { UserContext } from '../../../Context/UserContext';
import Error from '../../../Components/Helper/Error/Error';
import { Link } from 'react-router-dom';
import Head from '../../../Components/Helper/Head/Head';

const LoginForm = () => {
    const username = useForm();
    const password = useForm();

    const { userLogin, error, loading } = React.useContext(UserContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section className="animeLet">
            <Head title="Login" />
            <h1 className="title">Login</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input
                    label="Usuário:"
                    type="text"
                    name="username"
                    {...username}
                />

                <Input
                    label="Senha:"
                    type="password"
                    name="password"
                    {...password}
                />

                {loading ? (
                    <Button disabled>Entrando...</Button>
                ) : (
                    <Button>Entrar</Button>
                )}

                <Error error={error && 'Dados incorretos'} />
            </form>

            <Link to="/login/lost" className={styles.perdeu}>
                Perdeu a senha?
            </Link>

            <div className={styles.cadastro}>
                <h2 className={styles.subtitle}>Cadastre-se</h2>
                <p>Ainda não possui conta? Cadastre-se no site</p>
                <Link to="/login/create" className={stylesBtn.button}>
                    Cadastrar
                </Link>
            </div>
        </section>
    );
};

export default LoginForm;
