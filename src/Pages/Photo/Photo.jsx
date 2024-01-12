import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../Api';
import Error from '../../Components/Helper/Error/Error';
import Loading from '../../Components/Helper/Loading/Loading';
import PhotoContent from './PhotoContent/PhotoContent';

const Photo = () => {
    const { id } = useParams();
    const { data, loading, error, request } = useFetch();

    React.useEffect(() => {
        const { url, options } = PHOTO_GET(id);
        request(url, options);
    }, [request, id]);

    if (error) return <Error />;
    if (loading) return <Loading />;
    if (data)
        return (
            <section className="container mainContainer">
                <PhotoContent single={true} data={data} />
            </section>
        );
};

export default Photo;
