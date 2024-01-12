import React from 'react';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../../Components/Helper/ProtectedRoute/ProtectedRoute';
import UserHeader from './UserHeader/UserHeader';
import { UserContext } from '../../Context/UserContext';
import Head from '../../Components/Helper/Head/Head';

const UserLayout = () => {
    const { data } = React.useContext(UserContext);
    return (
        <ProtectedRoute>
            <section className="container">
                <Head title="Minha conta" />
                <UserHeader />
                <Outlet context={data.id} />
            </section>
        </ProtectedRoute>
    );
};

export default UserLayout;
