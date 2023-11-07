import React from 'react';
import Dogs from '../../assets/dogs.svg?react';
import { UserContext } from '../../Context/UserContext';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const { data, userLogout } = React.useContext(UserContext);

    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to="/" className={styles.logo} aria-label="Dogs - Home">
                    <Dogs />
                </Link>

                {data ? (
                    <div>
                        <Link to="/account" className={styles.login}>
                            {data.nome}
                        </Link>
                        <button onClick={userLogout}>Sair</button>
                    </div>
                ) : (
                    <div>
                        <Link to="/login" className={styles.login}>
                            Login / Criar
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
