import React from 'react';
import styles from './PhotoCommentsForm.module.css';
import SendBtn from '../../../assets/enviar.svg?react';
import { COMMENT_POST } from '../../../Api';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../../Components/Helper/Error/Error';

const PhotoCommentsForm = ({ id, setComments, single }) => {
    const { error, request } = useFetch();
    const [comment, setComment] = React.useState('');

    async function handleSubmit(event) {
        const token = window.localStorage.getItem('token');
        event.preventDefault();
        const { url, options } = COMMENT_POST(id, { comment }, token);
        const { response, json } = await request(url, options);
        if (response.ok) {
            setComment('');
            setComments((comments) => [...comments, json]);
        }
    }

    return (
        <form
            className={`${styles.form} ${single ? styles.single : ''}`}
            onSubmit={handleSubmit}
        >
            <textarea
                className={styles.textarea}
                name="comment"
                id="comment"
                placeholder="Escreva um comentário..."
                value={comment}
                onChange={({ target }) => setComment(target.value)}
            />
            <button className={styles.button}>
                <SendBtn />
            </button>
            <Error error={error} />
        </form>
    );
};

export default PhotoCommentsForm;
