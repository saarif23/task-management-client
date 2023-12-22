
import { Navigate, useLocation } from "react-router-dom";
import { ImSpinner3 } from "react-icons/im";

// import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <div className="animate-spin flex justify-center items-center min-h-screen text-4xl"><ImSpinner3 /></div>
    }
    if (user) {
        return children;
    } else {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};

// PrivateRoute.propTypes = {
//     children: PropTypes.node.isRequired
// }
export default PrivateRoute;