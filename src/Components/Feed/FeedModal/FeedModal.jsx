import React from 'react';
import styles from './FeedModal.module.css';
import { PHOTO_GET } from '../../../Api';
import useFetch from '../../../Hooks/useFetch';
import Error from '../../Helper/Error/Error';
import Loading from '../../Helper/Loading/Loading';
import PhotoContent from '../../../Pages/Photo/PhotoContent/PhotoContent';

const FeedModal = ({ photo, setModalPhoto }) => {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id);
        request(url, options);
    }, [request, photo]);

    function handleOutsideClick(event) {
        if (event.target === event.currentTarget) {
            setModalPhoto(null);
        }
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error error={error} />}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    );
};

export default FeedModal;
