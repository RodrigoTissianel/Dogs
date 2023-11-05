import React from 'react';
import { TOKEN_POST, USER_GET } from '../Api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

const UserStorage = ({ children }) => {
    const [data, setData] = React.useState('');
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();

    async function getUser(token) {
        const { url, options } = USER_GET(token);
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password) {
        try {
            setError(null);
            setLoading(true);
            const { url, options } = TOKEN_POST({ username, password });
            const tokenRes = await fetch(url, options);
            if (!tokenRes.ok) throw new Error(`Erro: ${tokenRes.statusText}`);
            const { token } = await tokenRes.json();
            window.localStorage.setItem('token', token);
            await getUser(token);
            navigate('/account');
        } catch (err) {
            setError(err.message);
            setLogin(false);
        } finally {
            setLoading(false);
        }
    }

    return (
        <UserContext.Provider
            value={{ userLogin, data, login, loading, error }}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserStorage;
