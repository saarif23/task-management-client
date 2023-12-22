import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.png'
import MenuDropdown from "../MenuDropdown";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center px-3">
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
                                    isPending ? "pending" : isActive ? "text-orange-300 text-xl font-semibold" : "text-gray-200 font-medium"
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/blogs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-orange-300 text-xl font-semibold" : "text-white font-medium"
                                }
                            >
                                Blogs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/pricing"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-orange-300 text-xl font-semibold" : "text-gray-200 font-medium"
                                }
                            >
                                Pricing
                            </NavLink>
                        </li>


                    </ul>
                </div>
               
            </div>
           
            <div className=" max-lg:gap-2 gap-8">
                    <MenuDropdown />

                </div>

        </div>
    );
};

export default Navbar;