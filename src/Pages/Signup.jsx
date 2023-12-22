import { FaFacebook } from "react-icons/fa";
import HorizontalLine from "../Components/HorizontalLine";
import { Link, useNavigate } from "react-router-dom";
import img from '../assets/banner.jpg'
import useAuth from "../Hooks/useAuth";
import { imageUpload } from "../Api/utils";
import toast from "react-hot-toast";
import GoogleSignIn from "../Components/GoogleSignIn";
import GithubSignIn from "../Components/GithubSignIn";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const Signup = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useAuth();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        const image = form.photo.files[0];
        console.log(image);
        try {

            //upload image and create image url
            const imageData = await imageUpload(image);
            console.log("iamge is comming", imageData);
            // if (password.length < 6) {
            //     setIsLoading(false)
            //     return toast.error("Password must have atleast 6 charecters")

            // } else if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&+=!])(?=.*\d).{6,}$/.test(password)) {
            //     setIsLoading(false)
            //     return toast.error("Password must contain at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.")
            // }

            // create user
            const result = await createUser(email, password)
            console.log(result.user);
            if (result?.user) toast.success("User Created Successfully")


            // update profile 
            await updateUserProfile(name, imageData?.data?.display_url)

            // console.log('paise name ar image', user);
            if (result?.user?.displayName && result?.user?.photoURL) {
                const user = {
                    name,
                    image: result?.user?.photoURL,
                    email
                };
                toast.success("User Profile Updated")
                axiosPublic.put(`/users/${user?.email}`, user)
                    .then(res => {
                        console.log(res);
                        if (res.status === 201 && res.statusText === 'Created') {
                            navigate("/")
                            toast.success("user add in database")
                        }
                    })
                    .catch(error => toast.error(error.message))
            }

        } catch (error) {
            console.log(error);
        }

    }



    return (
        <div className='min-h-screen bg-cover pt-20' style={{ backgroundImage: `url(${img})` }}>
            <div className=' flex flex-col justify-center w-2/3  bg-black bg-blend-overlay bg-opacity-55 p-5   mx-auto'>
                <form onSubmit={handleSubmit} className=' w-full rounded-lg'>
                    <div className='mb-5'>
                        <h3 className="text-3xl text-white text-center">Create An Account </h3>
                    </div>
                    <div className="flex justify-center items-center  gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white px-2 ">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Type your full name" className="py-2 w-full border text-white bg-black bg-blend-overlay bg-opacity-15 rounded-md px-2 my-2 " required />
                        </div>
                        <div className="form-control w-full mt-2">
                            <label className="label">
                                {/* <span className="label-text text-white px-2 ">Select Profile Photo</span> */}
                            </label>
                            <input type="file" name="photo" className="py-2 w-full  text-white px-2 my-2" required />
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white px-2 ">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Type your email here" className="py-2 w-full border text-white bg-black bg-blend-overlay bg-opacity-15 rounded-md px-2 my-2 " required />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white px-2  ">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="******" className="py-2 w-full border text-white bg-black bg-blend-overlay bg-opacity-15 rounded-md px-2 my-2 " required />
                        </div>
                    </div>

                    <div className="form-control">
                        <input type="submit" className="border-2 py-2 w-full rounded-md text-white font-bold cursor-pointer my-5" required />
                    </div>
                </form>
                <div className="text-center text-white">
                    <p className="text-gray-300">Already Register ? <Link to="/login"><span className='text-emerald-300'>Login here</span></Link></p>

                    <HorizontalLine chars={25} />Or <HorizontalLine chars={25} />

                    <div className='flex justify-center gap-8 pt-5'>
                        <GoogleSignIn></GoogleSignIn>
                        <FaFacebook size={36}></FaFacebook>
                        <GithubSignIn />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;