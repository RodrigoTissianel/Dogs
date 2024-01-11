import React from 'react';
import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../../Components/Helper/ProtectedRoute/ProtectedRoute';
import UserHeader from './UserHeader/UserHeader';
import { UserContext } from '../../Context/UserContext';

const UserLayout = () => {
    const { data } = React.useContext(UserContext);
    return (
        <ProtectedRoute>
            <section className="container">
                <UserHeader />
                <Outlet context={data.id} />
            </section>
        </ProtectedRoute>
    );
};

export default UserLayout;
