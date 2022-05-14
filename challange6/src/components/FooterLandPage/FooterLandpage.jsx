import React from "react";
import Logo from "../../assets/images/logo.png";
import FB from "../../assets/images/icon/icon_facebook.png";
import IG from "../../assets/images/icon/icon_instagram.png";
import Twit from "../../assets/images/icon/icon_twitter.png";
import Mail from "../../assets/images/icon/icon_mail.png";
import Twitch from "../../assets/images/icon/icon_twitch.png";
import "./FooterLandpage.css";

function FooterRental() {
  return (
    <>
      <footer class="footer" id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-6 address-list">
              <ul>
                <li>
                  Jalan Suroyo No. 161 Mayangan <br /> Kota Probolonggo 672000
                </li>
                <li>binarcarrental@gmail.com</li>
                <li>081-233-334-808</li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-6 nav-list">
              <ul>
                <li>
                  <a href="#services">Our Services</a>
                </li>
                <li>
                  <a href="#why-us">Why Us</a>
                </li>
                <li>
                  <a href="#testimonial">Testimonial</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 sosmed-list">
              <p>Connect with us</p>
              <a href="#">
                <i>
                  <img src={FB} />
                </i>
              </a>
              <a href="#">
                <i>
                  <img src={IG} />
                </i>
              </a>
              <a href="#">
                <i>
                  <img src={Twit} />
                </i>
              </a>
              <a href="#">
                <i>
                  <img src={Mail} />
                </i>
              </a>
              <a href="#">
                <i>
                  <img src={Twitch} />
                </i>
              </a>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 copyright">
              <p>Copyright Binar 2022</p>
              <img src={Logo} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterRental;
