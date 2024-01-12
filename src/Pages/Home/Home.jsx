import Feed from '../../Components/Feed/Feed';
import Head from '../../Components/Helper/Head/Head';

const Home = () => {
    return (
        <div>
            <Head
                title="Fotos"
                description="Home de site Dogs, com o feed de fotos"
            />
            <Feed />
        </div>
    );
};

export default Home;
