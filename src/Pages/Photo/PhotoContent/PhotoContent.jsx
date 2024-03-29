// import React from 'react';
import styles from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from '../PhotoComments/PhotoComments';
import { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';
import PhotoDelete from '../PhotoDelete/PhotoDelete';

const PhotoContent = ({ data, single }) => {
    const { comments, photo } = data;
    const user = useContext(UserContext);
    console.log(user.data);
    return (
        <div className={`${styles.photo} ${single ? styles.single : ''}`}>
            <div className={styles.img}>
                <img src={photo.src} alt={photo.title} />
            </div>

            <div className={styles.details}>
                <div>
                    <p className={styles.author}>
                        {user.data.username === photo.author ? (
                            <PhotoDelete id={photo.id} />
                        ) : (
                            <Link
                                to={`/profile/${photo.author}`}
                            >{`@${photo.author}`}</Link>
                        )}

                        <span className={styles.visualizacoes}>
                            {photo.acessos}
                        </span>
                    </p>

                    <h1 className="title">
                        <Link to={`photo/${photo.id}`}>{photo.title}</Link>
                    </h1>

                    <ul className={styles.attributes}>
                        <li>{photo.peso} kg</li>
                        <li>{photo.idade} anos</li>
                    </ul>
                </div>
            </div>
            <PhotoComments single={single} id={photo.id} comments={comments} />
        </div>
    );
};

export default PhotoContent;
