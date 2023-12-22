import { FaFacebook, FaGithub } from 'react-icons/fa';
import img from '../assets/banner.jpg'
import HorizontalLine from '../Components/HorizontalLine';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import toast from 'react-hot-toast';
import GoogleSignIn from '../Components/GoogleSignIn';
import GithubSignIn from '../Components/GithubSignIn';
const Login = () => {
    const {loginUser} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then((res) => {
                console.log(res);
                toast.success("Login Successfully")
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))

    }
    return (

        <div className='h-[100vh] bg-cover pt-20' style={{ backgroundImage: `url(${img})` }}>
            <div className=' flex flex-col justify-center w-1/3  bg-black bg-blend-overlay bg-opacity-55 p-5   mx-auto'>
                <form onSubmit={handleSubmit} className=' w-full rounded-lg'>
                    <div className='mb-5'>
                        <h3 className="text-3xl text-white text-center">Sign In</h3>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white px-2  ">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Type your email here" className="py-2 w-full border text-white bg-black bg-blend-overlay bg-opacity-15 rounded-md px-2 my-2 "  required />
                    </div>
                    <div className="form-control mt-2">
                        <label className="label">
                            <span className="label-text text-white px-2  ">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="******" className="py-2 w-full border text-white bg-black bg-blend-overlay bg-opacity-15 rounded-md px-2 my-2 "  required />
                    </div>

                    <div className="form-control">
                        <input type="submit" className="border-2 py-2 w-full rounded-md text-white font-bold cursor-pointer my-5" required />
                    </div>
                </form>
                <div className="text-center text-white">
                        <p className="text-gray-300">New here ? <Link to="/signUP"><span className='text-emerald-300'>Create an New Account </span></Link></p>

                        <HorizontalLine chars={25} />Or <HorizontalLine chars={25} />

                        <div className='flex justify-center gap-8 pt-5'>
                            <GoogleSignIn/>
                            <FaFacebook size={36}></FaFacebook>
                          <GithubSignIn/>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Login;