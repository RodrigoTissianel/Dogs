import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <section>
            <div>
                <Outlet />
            </div>
        </section>
    );
};

export default LoginLayout;
