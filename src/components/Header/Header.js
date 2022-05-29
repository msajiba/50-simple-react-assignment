import React from 'react';
import logo from '../../images/logo-header.png';
import './Header.css';



const Header = () => {
    return (
        <div>
           
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container header">
                    <img className='logo-header' src={logo} alt="" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav header">
                            <a className="nav-link active"  href="/home">Home</a>
                            <a className="nav-link" href="/Shop">Shop</a>
                            <a className="nav-link" href="/about">About</a>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;