import React from 'react';
import logo from '../../images/logo-header.png';
import './Header.css';



const Header = () => {
    return (
        <div>
           
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container header">
                    <img className='logo-header' src={logo} alt="" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav header">
                            <a class="nav-link active"  href="/home">Home</a>
                            <a class="nav-link" href="/Shop">Shop</a>
                            <a class="nav-link" href="/about">About</a>
                        </div>
                    </div>
                </div>
            </nav>


        </div>
    );
};

export default Header;