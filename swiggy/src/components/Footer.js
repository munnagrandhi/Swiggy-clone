import Info from "./Info";

function Footer(){
    return(
        <footer className="footer">
        <div className="footer-container">
          <div className="footer-top">
            <div><h2>Swiggy</h2></div>

            <div className="footer-column">
              <h4>Company</h4>
              <p>About Us</p>
              <p>Swiggy Corporate</p>
              <p>Careers</p>
              <p>Team</p>
              <p>Swiggy One</p>
              <p>Swiggy Instamart</p>
              <p>Swiggy Dineout</p>
              <p>Minis</p>
              <p>Pyg</p>
            </div>


            <Info
              title="Contact us"
              help1="Help & Support"
              help2="Partner With Us"
              help3="Ride With Us"
            />
            <Info
              title="Legal"
              help1="Terms & conditions"
              help2="Cookie Policy"
              help3="Privacy Policy"
            />
            <Info
              title="Life at Swiggy"
              help1="Explore with the swiggy"
              help2="Swiggy News"
              help3="Snackables"
            />
          </div>

          <div className="footer-bottom">

            <div className="available-cities">
              <h4>Available in:</h4>
              <div className="city-list">
                <span>Bangalore</span>
                <span>Gurgaon</span>
                <span>Hyderabad</span>
                <span>Delhi</span>
                <span>Mumbai</span>
                <span>Pune</span>
              </div>
            </div>

            <div className="social-links">
              <h4>Social Links</h4>
              <div className="social-icons">
                <span>LinkedIn</span>
                <span>Facebook</span>
                <span>Twitter</span>
              </div>
            </div>
          </div>

          <div className="footer-note">
            <p>© 2025 Swiggy Limited</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;