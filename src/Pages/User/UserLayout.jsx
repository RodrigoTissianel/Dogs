import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <section>
            <div>
                <Outlet />
            </div>
        </section>
    );
};

export default UserLayout;
