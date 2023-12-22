import { FaGoogle } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const GoogleSignIn = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleGoogleLogin = () => {
        googleSignIn()
            .then((res) => {
                console.log(res.user);
                const user = {
                    name: res.user.displayName,
                    image: res.user.photoURL,
                    email: res.user.email,
                }

                axiosPublic.put(`/users/${user?.email}`, user)
                    .then(() => {
                        toast.success("Google Sign In Success")
                        navigate(from, { replace: true });
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <button onClick={handleGoogleLogin}>
                <FaGoogle className='cursor-pointer' size={36} />
            </button>
        </div>
    );
};

export default GoogleSignIn;