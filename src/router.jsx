import { createBrowserRouter } from 'react-router-dom';
import RootLayout from './Pages/RootLayout';
import Home from './Pages/Home/Home';
import LoginLayout from './Pages/Login/LoginLayout';
import LoginForm from './Pages/Login/LoginForm/LoginForm';
import LoginCreate from './Pages/Login/LoginCreate/LoginCreate';
import LoginPasswordLost from './Pages/Login/LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from './Pages/Login/LoginPasswordReset/LoginPasswordReset';
import UserLayout from './Pages/User/UserLayout';
import Feed from './Components/Feed/Feed';
import UserPhotoPost from './Pages/User/UserPhotoPost/UserPhotoPost';
import UserStats from './Pages/User/UserStats/UserStats';
import Photo from './Pages/Photo/Photo';
import UserProfile from './Pages/User/UserProfile/UserProfile';
import NotFound from './Pages/NotFound/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'login',
                element: <LoginLayout />,
                children: [
                    {
                        index: true,
                        element: <LoginForm />,
                    },
                    {
                        path: 'create',
                        element: <LoginCreate />,
                    },
                    {
                        path: 'lost',
                        element: <LoginPasswordLost />,
                    },
                    {
                        path: 'reset',
                        element: <LoginPasswordReset />,
                    },
                    {
                        path: '*',
                        element: <NotFound />,
                    },
                ],
            },
            {
                path: 'account',
                element: <UserLayout />,
                children: [
                    {
                        index: true,
                        element: <Feed />,
                    },
                    {
                        path: 'post',
                        element: <UserPhotoPost />,
                    },
                    {
                        path: 'statistics',
                        element: <UserStats />,
                    },
                    {
                        path: '*',
                        element: <NotFound />,
                    },
                ],
            },
            {
                path: 'photo/:id',
                element: <Photo />,
            },
            {
                path: 'profile/:user',
                element: <UserProfile />,
            },
            {
                path: '*',
                element: <NotFound />,
            },
        ],
    },
]);

export default router;
