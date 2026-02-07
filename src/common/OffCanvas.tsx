import { Link } from "react-router-dom";
import { useState } from "react";

const mobile_menu_data = [
  {
    title: "Home",
    has_dropdown: false,
    link: "/",
  },
  {
    title: "About Us",
    has_dropdown: false,
    link: "/about-us",
  },
  {
    title: "Services",
    has_dropdown: false,
    link: "/service",
  },
  {
    title: "Contact",
    has_dropdown: false,
    link: "/contact-us",
  },
];

const OffCanvas = ({ setOpenMenu, openMenu }: any) => {
  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  return (
    <>
      <div
        className={`techin-menu-wrapper ${openMenu ? "techin-body-visible" : ""}`}
      >
        <div className="techin-menu-area text-center">
          <div className="techin-menu-mobile-top">
            <div className="mobile-logo">
              <Link to="/">
                <img src="assets/images/logo/logo1.svg" alt="logo" />
              </Link>
            </div>
            <button
              className="techin-menu-toggle mobile"
              onClick={() => setOpenMenu(false)}
            >
              <i className="ri-close-line"></i>
            </button>
          </div>
          <div className="techin-mobile-menu">
            <ul>
              {mobile_menu_data.map((item, i) => (
                <li
                  key={i}
                  className={`menu-item-has-submenu menu-item-has-children techin-item-has-children ${navTitle === item.title ? "techin-active" : ""}`}
                >
                  <Link to={item.link}>
                    {item.title}
                    {item.has_dropdown ? (
                      <span
                        className="techin-mean-expand"
                        onClick={() => openMobileMenu(item.title)}
                      ></span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="techin-mobile-menu-btn">
            <Link
              className="techin-default-btn sm-size"
              to="/contact-us"
              data-text="Get in Touch"
            >
              <span className="btn-wraper">Get in Touch</span>
            </Link>
            <Link
              className="techin-default-btn sm-size"
              to="/contact-us"
              data-text="Get in Touch"
            >
              <span className="btn-wraper">Get in Touch</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffCanvas;
