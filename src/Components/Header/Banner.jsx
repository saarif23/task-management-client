
import Container from '../Container';
import Navbar from './Navbar';
const Banner = () => {
     return (
        <div >
            <Container>
                <div className='h-[100vh] bg-black bg-blend-overlay bg-opacity-25 pt-2' >
                    <Navbar/>
                </div>
            </Container>
        </div>
    );
};

export default Banner;