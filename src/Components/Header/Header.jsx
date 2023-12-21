import Banner from "./Banner";
import bannerimg from '../../assets/banner.jpg'
const Header = () => {
    const styles = {
        backgroundImage: `url(${bannerimg})`,
        backgroundPosition: 'center',
    };
    return (
        <div className='bg-cover pt-5 pb-10' style={styles}>
            <Banner />
        </div>
    );
};

export default Header;