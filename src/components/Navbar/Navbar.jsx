import './Navbar.css';

const Navbar = () => {
    return (
        <div className='nav'>
            <h1 className="name-icon">Meal<span>BD</span> </h1>
            <div className='nav-link'>
                <a href="">Home</a>
                <a href="">Menu</a>
                <a href="">Service</a>
            </div>
        </div>
    );
};

export default Navbar;