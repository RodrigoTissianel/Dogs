import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import UserStorage from '../Context/UserContext';
import '../App.css';

const RootLayout = () => {
    return (
        <>
            <Header />
            <UserStorage>
                <section className="App">
                    <main className="AppBody">
                        <Outlet />
                    </main>
                </section>
            </UserStorage>
            <Footer />
        </>
    );
};

export default RootLayout;
