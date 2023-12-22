import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import footerimg from '../assets/logo.png'
import Container from './Container'
const Footer = () => {
    return (
        <div className="bg-emerald-800 pt-10">
            <Container>
                <div className="flex flex-col md:flex-row gap-10 md:gap-5 justify-evenly items-center text-center">
                    <div>
                        <p className='text-white font-semibold '>Arif Task</p>
                        <div className='text-black font-semibold'>
                            <ul>
                                <li>Websites</li>
                                <li>Apps</li>
                                <li>Integrations</li>
                                <li>Pricing</li>
                                <li>Exterprice</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className='text-white font-semibold '>Arif Task</p>
                        <div className='text-black font-semibold'>
                            <ul>
                                <li>Company</li>
                                <li>Jobs</li>
                                <li>Partners</li>
                                <li>Affiliate Program</li>
                                <li>Press</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className='text-white font-semibold '>Support</p>
                        <div className='text-black font-semibold'>
                            <ul>
                                <li>Comunity</li>
                                <li>Help Center</li>
                                <li>Tutorial Videos</li>
                                <li>Supports</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className='text-white font-semibold '>Usefull Links</p>
                        <div className='text-black font-semibold'>
                            <ul>
                                <li>Contact Us</li>
                                <li>Blogs</li>
                                <li>Academics</li>
                                <li>Supports</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className='border-t border-gray-900 mt-5 py-5 text-center text-white'>
                    <div className='flex justify-center items-center text-white'>
                        <img className='w-12' src={footerimg} alt="" />
                        <p>Flex Task Lab</p>
                    </div>
                    <p>© 2023 FlexTaskLab</p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className='flex my-5 gap-5 justify-center text-xs '>
                        <Link>Compliance</Link>
                        <Link>Terms of Service</Link>
                        <Link>Privacy</Link>
                        <Link>Notice at Collection</Link>
                        <Link>English</Link>
                    </div>
                    <div className="flex gap-5 text-gray-400">
                        <Link><FaFacebook size={24}/></Link>
                        <Link><FaTwitter  size={24}/></Link>
                        <Link><FaYoutube size={24}/></Link>
                        <Link><FaLinkedin size={24}/></Link>
                    </div>
                    </div>
                </div>
            </Container>
        </div>


    );
};

export default Footer;