import React from 'react'
import Landingpage from './landingpage';
import About from './about';
import Contactus from './contactus';
import Ourwork from './ourwork';
import history from './history';

function Navbar() {
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-dark">
        <a id="navbar-brand" className="navbar-brand" href="#landingpage"  onClick={() => history.push('/')}>KS Technology</a>
         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="#contactus"  onClick={() => history.push('/Contactus')}>Contact Us</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#ourwork"  onClick={() => history.push('/Ourwork')}>Our Work</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#about"  onClick={() => history.push('/About')}>About</a>
            </li>
        </ul>
     </div>
    </nav>
    );
}

export default  Navbar;
