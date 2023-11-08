import React from 'react';
import { UserContext } from '../../../Context/UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { login } = React.useContext(UserContext);

    if (login) {
        return children;
    } else if (login === false) {
        return <Navigate to="/login" />;
    } else {
        return <p></p>;
    }
};

export default ProtectedRoute;
