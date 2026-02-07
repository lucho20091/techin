import { Link } from "react-router-dom";
import { useState } from "react";
import useSticky from "../../hooks/use-sticky";
import menu_data from "../../data/menu-data";
import Sidebar from "../../common/Sidebar";
import SearchArea from "../../common/SearchArea";
import OffCanvas from "../../common/OffCanvas";

const HeaderThree = () => {
  const { sticky } = useSticky();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header
        className={`site-header techin-header-section ${
          sticky ? "sticky-menu" : ""
        }`}
        id="sticky-menu"
      >
        <div className="techin-header-wrapper">
          {/* LOGO */}
          <div className="header-logo">
            <Link to="/">
              <img src="/assets/images/logo/logo1.svg" alt="logo" />
            </Link>
          </div>

          <div className="techin-header-wrap">
            {/* TOP BAR */}
            <div className="techin-header-top">
              <div className="techin-header-info-wrap">
                <div className="techin-header-info">
                  <ul>
                    <li>
                      <a href="tel:+573001234567">
                        <img src="/assets/images/blog/phone.svg" alt="" />
                        +57 300 123 4567
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@techin.com">
                        <img src="/assets/images/blog/gmail.svg" alt="" />
                        info@techin.com
                      </a>
                    </li>
                    <li>
                      <span>Mon-Fri: 10:00AM-09:00PM</span>
                    </li>
                  </ul>
                </div>

                {/* SOCIAL */}
                <div className="techin-header-social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="ri-facebook-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ri-twitter-fill"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="ri-instagram-line"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* BOTTOM NAV */}
            <div className="techin-header-bottom">
              <div className="techin-header-main-menu bg-accent">
                <nav className="navbar site-navbar">
                  {/* MAIN MENU */}
                  <nav className="main-menu menu-style1 d-none d-xl-block">
                    <ul>
                      <li>
                        <Link to="/">Home</Link>
                      </li>

                      <li>
                        <Link to="/about-us">About Us</Link>
                      </li>

                      <li>
                        <Link to="/service">Services</Link>
                      </li>

                      <li>
                        <Link to="/contact-us">Contact</Link>
                      </li>
                    </ul>
                  </nav>

                  {/* RIGHT BUTTONS */}
                  <div className="header-btn header-btn-l1 d-none d-xs-inline-flex">
                    <div className="techin-header-icon">
                      {/* <div
                        className="techin-header-search"
                        onClick={() => setSearchOpen(true)}
                      >
                        <img src="/assets/images/blog/2.svg" alt="" />
                      </div> */}

                      <div
                        className="techin-header-triger triger2"
                        onClick={() => setOpen(true)}
                      >
                        <img src="/assets/images/blog/1.svg" alt="" />
                      </div>
                    </div>

                    <Link
                      className="techin-default-btn techin-header-btn"
                      to="/contact-us"
                    >
                      <span className="button-wraper">Get A Quote</span>
                    </Link>
                  </div>

                  {/* MOBILE */}
                  <button
                    className="techin-menu-toggle d-inline-block d-xl-none dark-color"
                    onClick={() => setOpenMenu(true)}
                  >
                    <span></span>
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Sidebar open={open} setOpen={setOpen} />
      <SearchArea searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <OffCanvas openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default HeaderThree;
