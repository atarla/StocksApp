import React from 'react';
import logo from '/Users/anusha/WebstormProjects/delete_react/src/casalogo.svg';

const Header = () => {
    return (
      <div>
          <nav className="navbar navbar-expand-sm mha-nav p-5">
              <a className="navbar-brand" href="/">
                <img src={logo} height="40" alt="logo" className="d-inline-block align-top" />
              </a>
          </nav>
      </div>
    );
}

export default Header;