import { NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="flex justify-between items-center ">
            <div className="flex gap-1 items-center text-gray-200">
                <img className="w-16  " src={logo} alt="logo" />
                <h3 className="text-xl">Task Management</h3>
            </div>
            <div className="lg:flex justify-center  items-center gap-10">
                <div>
                    <ul className='hidden  lg:flex gap-5'>
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-black font-semibold shadow shadow-gray-400 px-5 py-3" : "text-gray-200 font-medium"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/petListing"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-black font-semibold shadow shadow-gray-400 px-5 py-3" : "text-white font-medium"
                                }
                            >
                                Clicbale1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/donationCampaigns"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-black font-semibold shadow shadow-gray-400 px-5 py-3" : "text-gray-200 font-medium"
                                }
                            >
                               Clicbale2
                            </NavLink>
                        </li>


                    </ul>
                </div>
                <div className=" max-lg:gap-2 gap-8">
                    {/* <MenuDropdown /> */}
                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

export default Navbar;