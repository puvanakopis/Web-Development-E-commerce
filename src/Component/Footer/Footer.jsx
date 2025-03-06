// Footer Component: Displays the footer section of the website including subscribe, support, account, quick links, app download, and social media icons.
import React from "react";
import "./Footer.css";
import AppStore from '../../assets/footer/AppStore.png'
import GooglePlay from '../../assets/footer/GooglePlay.png'
import Qr_Code from '../../assets/footer/Qr Code.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Subscribe Section */}
        <div className="footer-section">
          <h3 className="footer-title">Exclusive</h3>
          <p className="footer-subtitle">Subscribe</p>
          <p className="footer-text text-brown">Get 10% off your first order</p>
          <div className="subscribe-box">
            <input type="email" placeholder="Enter your email" />
            <button className="subscribe-btn">➤</button>
          </div>
        </div>

        {/* Support Section */}
        <div className="footer-section">
          <h3 className="footer-title">Support</h3>
          <p className="footer-text  text-brown">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p className="footer-text  text-brown">exclusive@gmail.com</p>
          <p className="footer-text  text-brown">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div className="footer-section">
          <h3 className="footer-title">Account</h3>
          <ul className="footer-list">
            <li className="text-brown">My Account</li>
            <li className="text-brown">Login / Register</li>
            <li className="text-brown">Cart</li>
            <li className="text-brown">Wishlist</li>
            <li className="text-brown">Shop</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3 className="footer-title">Quick Link</h3>
          <ul className="footer-list">
            <li className="text-brown">Privacy Policy</li>
            <li className="text-brown">Terms Of Use</li>
            <li className="text-brown">FAQ</li>
            <li className="text-brown">Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div className="footer-section">
          <h3 className="footer-title">Download App</h3>
          <p className="footer-text  text-brown">Save $3 with App New User Only</p>
          <div className="qr-and-store">
            <img src={Qr_Code} alt="QR Code" className="qr-code" />
            <div className="app-buttons">
              <img src={AppStore} alt="Google Play" />
              <img src={GooglePlay} alt="App Store" />
            </div>
          </div>
          <div className="social-icons">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <IoLogoTiktok />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© Copyright Rimel 2025. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
