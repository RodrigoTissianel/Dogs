import React from 'react';
import styles from './UserPhotoPost.module.css';
import { PHOTO_POST } from '../../../Api';
import Button from '../../../Components/Button/Button';
import Error from '../../../Components/Helper/Error/Error';
import Input from '../../../Components/Input/Input';
import useFetch from '../../../Hooks/useFetch';
import useForm from '../../../Hooks/useForm';
import { useNavigate } from 'react-router-dom';
import Head from '../../../Components/Helper/Head/Head';

const UserPhotoPost = () => {
    const [img, setImg] = React.useState({});
    const { data, loading, error, request } = useFetch();
    const name = useForm();
    const weight = useForm('number');
    const age = useForm('number');
    const navigate = useNavigate();

    React.useEffect(() => {
        if (data) {
            navigate('/account');
        }
    }, [data, navigate]);

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append('img', img.raw);
        formData.append('nome', name.value);
        formData.append('peso', weight.value);
        formData.append('idade', age.value);

        const token = window.localStorage.getItem('token');
        const { url, options } = PHOTO_POST(formData, token);
        request(url, options);
    }

    function handleImgChange({ target }) {
        setImg({
            preview: URL.createObjectURL(target.files[0]),
            raw: target.files[0],
        });
    }

    return (
        <section className={`${styles.photoPost} animeLeft`}>
            <Head title="Poste sua foto" />
            <form onSubmit={handleSubmit}>
                <Input label="Nome:" type="text" name="name" {...name} />
                <Input label="Peso:" type="number" name="weight" {...weight} />
                <Input label="Idade:" type="number" name="age" {...age} />
                <input
                    className={styles.file}
                    type="file"
                    name="img"
                    id="img"
                    onChange={handleImgChange}
                />
                {loading ? (
                    <Button disabled>Enviando...</Button>
                ) : (
                    <Button>Enviar</Button>
                )}

                {error && <Error error={error} />}
            </form>

            <div>
                {img.preview && (
                    <div
                        className={styles.preview}
                        style={{ backgroundImage: `url(${img.preview})` }}
                    ></div>
                )}
            </div>
        </section>
    );
};

export default UserPhotoPost;
