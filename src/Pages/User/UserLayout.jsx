import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../../Components/Helper/ProtectedRoute/ProtectedRoute';
import UserHeader from './UserHeader/UserHeader';

const UserLayout = () => {
    return (
        <ProtectedRoute>
            <section className="container">
                <UserHeader />
                <Outlet />
            </section>
        </ProtectedRoute>
    );
};

export default UserLayout;
