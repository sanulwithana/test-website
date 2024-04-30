import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import menus from '../../pages/menu';
import './styles.scss';
import logo from '../../assets/images/logo/logo.svg';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 300);
    });

    // Close menu when clicking outside
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuActive(false);
    }
  };

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header className={`header ${scroll ? 'is-fixed' : ''}`}>
      <div className="tf-container">
        <div className="row">
          <div className="col-md-12">
            <div id="site-header-inner">
              <div id="site-logo" className="clearfix">
                <div id="site-logo-inner">
                  <Link to="/" rel="home" className="main-logo">
                    <img id="logo_header" className="logo-dark" src={logo} alt="RACIIT" />
                    <img id="logo_header" className="logo-light" src={logo} alt="RACIIT" />
                  </Link>
                </div>
              </div>

              <div className="header-center">
                <nav
                  ref={menuRef}
                  id="main-nav"
                  className={`main-nav ${menuActive ? 'active' : ''}`}
                >
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((data, idx) => (
                      <li
                        key={idx}
                        onClick={() => {
                            handleDropdown(idx)
                            // handleMenuActive(false);
                        }}
                        className={`menu-item ${
                          data.namesub ? 'menu-item-has-children' : ''
                        } ${activeIndex === idx ? 'active' : ''}`}
                      >
                        <Link to={data.links}>{data.name}</Link>
                        {data.namesub && (
                          <ul className="sub-menu">
                            {data.namesub.map((submenu) => (
                              <li key={submenu.id} className="menu-item">
                                <NavLink to={submenu.links}>{submenu.sub}</NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>

              <div className="header-right">
                <div className={`mobile-button ${menuActive ? 'active' : ''}`} onClick={handleMenuActive}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
