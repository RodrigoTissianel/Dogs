import React from 'react';
import styles from './FeedPhotos.module.css';
import useFetch from '../../../Hooks/useFetch';
import { PHOTOS_GET } from '../../../Api';
import Error from '../../Helper/Error/Error';
import Loading from '../../Helper/Loading/Loading';
import FeedPhotosItem from '../FeedPhotosItem/FeedPhotosItem';

const FeedPhotos = ({ setModalPhoto, user, page, setInfinite }) => {
    const { data, error, loading, request } = useFetch();

    React.useEffect(() => {
        async function fetchPhotos() {
            const total = 6;
            const { url, options } = PHOTOS_GET({ page, total, user });
            const { response, json } = await request(url, options);
            if (response && response.ok && json.length < total) {
                setInfinite(false);
            }
            console.log('FeedPhotos', json);
        }
        fetchPhotos();
    }, [request, user, page, setInfinite]);

    if (error) return <Error error={error} />;
    if (loading) return <Loading />;
    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedPhotosItem
                        key={photo.id}
                        photo={photo}
                        setModalPhoto={setModalPhoto}
                    />
                ))}
            </ul>
        );
    else return null;
};

export default FeedPhotos;
