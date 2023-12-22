
import { RiMenu2Line, RiDashboard3Fill } from "react-icons/ri";


import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'
import useAuth from '../Hooks/useAuth'

const MenuDropdown = () => {
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const { user, logout } = useAuth()


    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout Successfully!')
                navigate("/")
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='relative'>


            <div className='flex flex-row items-center gap-3'>
                {/* Dropdown btn */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    className={`p-4 md:py-1 md:px-2 text-gray-300 rounded-full cursor-pointer hover:shadow-md transition`}
                >

                    {/* user profile image */}
                    {user ? <><div className='hidden md:block'>
                        <div className="flex items-center gap-1">
                            <RiDashboard3Fill size={28} />
                            <span>{user?.displayName}</span>
                        </div>
                    </div>
                        <div className="max-md:block hidden">
                            <RiMenu2Line size={28} />
                        </div>
                    </>

                        : <div className=""><RiMenu2Line size={28} /></div>
                    }

                </div>
            </div>


            {isOpen &&
                <div className='absolute rounded-xl z-10 shadow-md w-[40vw] md:w-[10vw] bg-black bg-blend-overlay bg-opacity-25 overflow-hidden right-0 top-12 text-sm text-white'>

                    {user ?

                        <div className='flex flex-col text-white cursor-pointer'>
                            <Link
                                to='/'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Home
                            </Link>
                            <Link
                                to='/petListing'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Pet Listing
                            </Link>
                            <Link
                                to='/donationCampaigns'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Donation Campaigns
                            </Link>

                            <Link
                                to='/dashboard'
                                className='px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Dashboard
                            </Link>
                            <Link
                                onClick={handleLogout}
                                to='/logout'
                                className='px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Logout
                            </Link>


                        </div>
                        :
                        <div className='flex flex-col cursor-pointer'>
                            <Link
                                to='/'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Home
                            </Link>
                            <Link
                                to='/petListing'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Pet Listing
                            </Link>
                            <Link
                                to='/donationCampaigns'
                                className='block md:hidden px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Donation Campaigns
                            </Link>

                            <Link
                                to='/login'
                                className='px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Login
                            </Link>
                            <Link
                                to='/signup'
                                className='px-4 py-3 hover:bg-neutral-100 hover:text-emerald-500 transition font-semibold'
                            >
                                Sign Up
                            </Link>
                        </div>

                    }

                </div>
            }


        </div>
    )
}

export default MenuDropdown



