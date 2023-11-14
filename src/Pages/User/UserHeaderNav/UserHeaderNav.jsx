import React from 'react';
import useMedia from '../../../Hooks/useMedia';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import MyPhotos from '../../../assets/feed.svg?react';
import Statisctics from '../../../assets/estatisticas.svg?react';
import AddPhoto from '../../../assets/adicionar.svg?react';
import LogOut from '../../../assets/sair.svg?react';
import styles from './UserHeaderNav.module.css';
import { UserContext } from '../../../Context/UserContext';

const UserHeaderNav = () => {
    const { userLogout } = React.useContext(UserContext);
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const mobile = useMedia('(max-width: 40rem');
    const navigate = useNavigate();
    const { pathname } = useLocation();

    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    function handleLogout() {
        userLogout();
        navigate('/login');
    }

    return (
        <>
            {mobile && (
                <button
                    aria-label="Menu"
                    className={`${styles.mobileButton} 
                    ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}
            <nav
                className={`${mobile ? styles.navMobile : styles.nav} 
            ${mobileMenu && styles.navMobileActive}`}
            >
                <NavLink to="/account" end>
                    <MyPhotos />
                    {mobile && 'Minhas fotos'}
                </NavLink>

                <NavLink to="/account/statistics">
                    <Statisctics />
                    {mobile && 'Estatísticas'}
                </NavLink>

                <NavLink to="/account/post">
                    <AddPhoto />
                    {mobile && 'Adicionar foto'}
                </NavLink>

                <button onClick={handleLogout}>
                    <LogOut />
                    {mobile && 'Sair'}
                </button>
            </nav>
        </>
    );
};

export default UserHeaderNav;
