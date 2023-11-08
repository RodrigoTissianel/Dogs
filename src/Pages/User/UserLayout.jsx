import { Outlet } from 'react-router-dom';
import ProtectedRoute from '../../Components/Helper/ProtectedRoute/ProtectedRoute';

const UserLayout = () => {
    return (
        <ProtectedRoute>
            <section className="container">
                <div>
                    <Outlet />
                </div>
            </section>
        </ProtectedRoute>
    );
};

export default UserLayout;
