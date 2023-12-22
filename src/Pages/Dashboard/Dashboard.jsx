import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import Container from "../../Components/Container";
import useAuth from "../../Hooks/useAuth";
import { RiLogoutCircleRLine, RiMenu2Line } from "react-icons/ri";
import toast from "react-hot-toast";
import { useState } from "react";

const Dashboard = () => {
    const [isOpen, setIsOpen] = useState(false)
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout Successfully!')
                navigate("/")
            })
            .catch(error => console.log(error))
    }

    console.log(user);
    return (
        <div className="bg-slate-900 min-h-screen">
            <Container>
                <div className="flex justify-between text-white max-lg:pt-5  items-center gap-10 ">
                    <div className="flex items-center gap-3">
                        <img className="rounded-full w-10" src={user.photoURL} alt="userImage" />
                        <p className="text-xl font-bold text-emerald-700">{user.displayName}</p>
                    </div>
                    <div className="shadow-md max-lg:hidden bg-slate-800 px-20 rounded-b-2xl py-4 ">
                        <ul className='hidden  lg:flex gap-5 '>
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-semibold shadow  px-5 py-3" : "text-white font-medium"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/createTask"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-semibold shadow  px-5 py-3" : "text-white font-medium"
                                    }
                                >
                                    Create New Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/donationCampaigns"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-semibold shadow  px-5 py-3" : "text-white font-medium"
                                    }
                                >
                                    Privious Task
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/dashboard/todoTask"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-white font-semibold shadow  px-5 py-3" : "text-white font-medium"
                                    }
                                >
                                    Todo Task List
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                    <div
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden max-lg:block">
                        <RiMenu2Line size={28} />
                    </div>
                    {isOpen &&
                        <div className='absolute rounded-xl z-10 shadow-md w-[40vw] md:w-[10vw] bg-black bg-blend-overlay bg-opacity-25 overflow-hidden right-0 top-12 text-sm text-white'>
                            <div className='flex flex-col text-white cursor-pointer'>
                                <Link
                                    to='/'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                                >
                                    Home
                                </Link>
                                <Link
                                    to='/dashboard/createTask'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                                >
                                    Create New Task
                                </Link>
                                <Link
                                    to='/todoTask'
                                    className='block md:hidden px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                                >
                                   Todo Task List
                                </Link>

                                <Link
                                    onClick={handleLogout}
                                    to='/logout'
                                    className='px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                                >
                                    Logout
                                </Link>


                            </div>
                        </div>
                    }
                    <div className="cursor-pointer max-lg:hidden" onClick={handleLogout}>
                        <RiLogoutCircleRLine size={24} />
                    </div>

                </div>
                <div className="shadow bg-slate-800 shadow-black rounded-md mt-10">
                    <Outlet></Outlet>
                </div>
            </Container>
        </div>
    );
};

export default Dashboard;