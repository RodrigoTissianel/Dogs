import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <>
            <Header />
            <section className="App">
                <main className="AppBody">
                    <Outlet />
                </main>
            </section>
            <Footer />
        </>
    );
};

export default RootLayout;
