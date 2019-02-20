import React from 'react';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
import logo from '../../casalogo.svg';

const Header = () => {
    return (
      <div>
          <nav className="navbar navbar-expand-sm mha-nav p-5">
              <Link to="/">
                <img src={logo} height="40" alt="logo" className="d-inline-block align-top" />
              </Link>
              <SearchBar/>
          </nav>
      </div>
    );
}

export default Header;