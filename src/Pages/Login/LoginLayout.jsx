import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContext } from '../../Context/UserContext';
import styles from './LoginLayout.module.css';

const LoginLayout = () => {
    const { login } = React.useContext(UserContext);
    if (login) return <Navigate to="/account" />;

    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Outlet />
            </div>
        </section>
    );
};

export default LoginLayout;
