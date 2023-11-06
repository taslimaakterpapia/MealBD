import './Navbar.css';
import mealbd from "../../assets/mealbd.png" ;

const Navbar = () => {
    return (
        <div className='nav'>
            <img className='icon' src={mealbd} alt="" />
            <div className='nav-link'>
                <a href="">Home</a>
                <a href="">Menu</a>
                <a href="">Service</a>
                <a href="">Contact</a>
            </div>
        </div>
    );
};

export default Navbar;