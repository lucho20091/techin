import { Link } from "react-router-dom";
import useSticky from "../../hooks/use-sticky";
import { useState } from "react";
import Sidebar from "../../common/Sidebar";
import OffCanvas from "../../common/OffCanvas";

const HeaderOne = () => {
  const { sticky } = useSticky();
  const [open, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <header
        className={`site-header techin-header-section techin-header-one ${
          sticky ? "sticky-menu" : ""
        }`}
        id="sticky-menu"
      >
        <div className="container">
          <div className="techin-header-menu">
            <nav className="navbar site-navbar">
              <div className="row gx-3 align-items-center">
                {/* LOGO */}
                <div className="col-12 col-sm-auto">
                  <div className="header-logo1 techin_screenfix_left">
                    <Link to="/">
                      <img
                        src="/assets/images/logo/logo-white.svg"
                        alt="logo"
                      />
                    </Link>
                  </div>
                </div>

                {/* MENU */}
                <div className="col">
                  <div className="techin-main-menu-item techin_screenfix_right">
                    <nav className="main-menu menu-style1 d-none d-xl-block menu-left">
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
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="header-btn header-btn-l1 ms-auto d-none d-xs-inline-flex">
                <div
                  className="techin-header-triger"
                  onClick={() => setOpen(!open)}
                >
                  <img src="/assets/images/hero/1.svg" alt="" />
                </div>
              </div>

              {/* MOBILE BUTTON */}
              <button
                className="techin-menu-toggle d-inline-block d-xl-none"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <span></span>
              </button>
            </nav>
          </div>
        </div>
      </header>

      <Sidebar open={open} setOpen={setOpen} />
      <OffCanvas openMenu={openMenu} setOpenMenu={setOpenMenu} />
    </>
  );
};

export default HeaderOne;
