import { FaGithub } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import { axiosPublic } from "../../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";

const GithubSignIn = () => {

    const { githubLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"
    const handleGithubLogin = () => {
        githubLogin()
            .then((res) => {
                console.log(res.user);
                // const user = {
                //     name: res.user.displayName ? res.user.displayName : "Github Login User",
                //     image: res.user.photoURL,
                //     email: res.user.email ? res.user.email : "github@gmail.com",
                //     role: 'user'
                // }

                // axiosPublic.put(`/users/${user?.email}`, user)  //axiosPublic.put(`/users/${user?.email}`, user)
                //     .then(() => {
                //         toast.success("Github Sign In Success")
                //         navigate(from, { replace: true });

                //     })
                //     .catch(error => console.log(error))

            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div onClick={handleGithubLogin}>
            <FaGithub className='cursor-pointer' size={36} />
        </div>
    );
};

export default GithubSignIn;