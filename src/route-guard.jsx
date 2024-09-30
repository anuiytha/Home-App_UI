import { Navigate } from "react-router-dom";
const PrivateRoute = ({ element }) => {
    console.log('called');
    return isAuthenticated() ? element : <Navigate to="/" replace />;
};

const isAuthenticated = () => {
    // Check if the user is authenticated (e.g., by checking if there's a token in localStorage)
    console.log('')
    return localStorage.getItem('token') !== null;
};

export default PrivateRoute;