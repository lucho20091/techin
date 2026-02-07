import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <>
      <footer
        className="techin-footer-section"
        style={{ backgroundImage: "url(/assets/images/footer/footer-bg1.png)" }}
      >
        <div className="container">
          <div className="techin-footer-top">
            <div className="row">
              {/* LEFT */}
              <div className="col-xl-4 col-lg-12">
                <div className="techin-footer-textarea light-color">
                  <Link to="/">
                    <img src="/assets/images/logo/logo-white.svg" alt="logo" />
                  </Link>

                  <p>
                    We deliver modern websites, branding and digital solutions
                    to help businesses grow faster and convert more customers.
                  </p>

                  <form
                    onSubmit={(e) => e.preventDefault()}
                    className="subscribe-form"
                  >
                    <input type="email" placeholder="Your email" />
                    <button type="submit">
                      <img src="/assets/images/footer/plane.svg" alt="" />
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              {/* LINKS */}
              <div className="col-xl-3 col-md-4">
                <div className="techin-footer-menu">
                  <div className="techin-footer-title">
                    <h5>Quick Links</h5>
                  </div>
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
                </div>
              </div>

              {/* CONTACT */}
              <div className="col-xl-3 col-md-4">
                <div className="techin-footer-menu">
                  <div className="techin-footer-title">
                    <h5>Contact</h5>
                  </div>
                  <ul>
                    <li>
                      <a href="mailto:info@techin.com">info@techin.com</a>
                    </li>
                    <li>
                      <a href="tel:+573001234567">+57 300 123 4567</a>
                    </li>
                    <li>Bogotá, Colombia</li>
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="col-xl-2 col-md-4">
                <div className="techin-footer-menu">
                  <div className="techin-footer-title">
                    <h5>Start a Project</h5>
                  </div>
                  <Link to="/contact-us" className="techin-default-btn">
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="container">
          <div className="techin-footer-bottom">
            <div className="techin-copywright">
              <p>© {new Date().getFullYear()} Techin. All rights reserved.</p>

              {/* CREDIT */}
              <p style={{ marginTop: 6 }}>
                <a
                  href="https://www.sitequicker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Website worked by Sitequicker
                </a>
              </p>
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
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ri-twitter-x-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
