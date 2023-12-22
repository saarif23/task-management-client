
import { Link } from 'react-router-dom';
import Container from '../Container';
import Navbar from './Navbar';
const Banner = () => {
    return (
        <div >
            <Container>
                <div className='h-[100vh] bg-black bg-blend-overlay bg-opacity-70 pt-2 ' >
                    <Navbar />
                    <div className='flex justify-center items-center mt-5 lg:mt-20 w-full lg:w-2/3 mx-auto '>
                        <div className='text-center'>
                            <h3 className="text-3xl md:text-3xl lg:text-5xl font-extrabold text-white text-center lg:text-left">The all-in-one <br /> platform for projects.</h3>
                            <p className='text-yellow-50 text-center lg:text-left py-5 font-bold'>Projects are made up of tasks, and knowing how to manage your tasks and team members is the secret to getting your projects completed on time. At its simplest, task management is having a to-do list, but you’ll soon find that to-do lists aren’t going to cut it for managing project workloads</p>

                            <div className='text-white w-52 max-lg:mx-auto bg-orange-400 py-2 px-5 text-xl font-bold'>
                                <Link to="/login"> <button>Let’s Explor </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;