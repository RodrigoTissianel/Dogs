import { PASSWORD_LOST } from '../../../Api';
import Button from '../../../Components/Button/Button';
import Error from '../../../Components/Helper/Error/Error';
import Head from '../../../Components/Helper/Head/Head';
import Input from '../../../Components/Input/Input';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';

const LoginPasswordLost = () => {
    const login = useForm();
    const { data, loading, error, request } = useFetch();

    async function handleSubmit(e) {
        e.preventDefault();
        if (login.validate()) {
            const { url, options } = PASSWORD_LOST({
                login: login.value,
                url: window.location.href.replace('lost', 'reset'),
            });
            const { json } = await request(url, options);
            console.log(json);
        }
    }
    return (
        <section className="animeLeft">
            <Head title="Perdeu a senha?" />
            <h1 className="title">Perdeu a senha?</h1>
            {data ? (
                <p style={{ color: '#4c1' }}>{data}</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Usuário / Email"
                        type="text"
                        name="login"
                        {...login}
                    />
                    {loading ? (
                        <Button disabled>Enviando...</Button>
                    ) : (
                        <Button>Enviar</Button>
                    )}

                    <Error error={error} />
                </form>
            )}
        </section>
    );
};

export default LoginPasswordLost;
