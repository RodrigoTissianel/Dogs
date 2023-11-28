import { PHOTO_DELETE } from '../../../Api';
import useFetch from '../../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

const PhotoDelete = ({ id }) => {
    const { loading, request } = useFetch();

    async function handleDelete() {
        const confirm = window.confirm(
            'Tem certeza que deseja deletar essa foto?'
        );
        const token = window.localStorage.getItem('token');

        if (confirm) {
            const { url, options } = PHOTO_DELETE(id, token);
            const { response } = await request(url, options);
            if (response.ok) window.location.reload();
        }
    }
    return (
        <>
            {loading ? (
                <button className={styles.delete} disabled>
                    Deletando
                </button>
            ) : (
                <button className={styles.delete} onClick={handleDelete}>
                    Deletar
                </button>
            )}
        </>
    );
};

export default PhotoDelete;
