import React, { useState } from 'react';
import Button from '../ui/Button';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="w-full bg-global-1 px-4 sm:px-6 lg:px-8 ml-3">
      <div className="w-full lg:max-w-[1214px] mx-auto">
        <div className="bg-global-1 rounded-[38px] py-10 sm:py-12 lg:py-16">
          <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 w-full px-4 sm:px-6 lg:px-12">
            
            {/* Main Footer Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 w-full">
              
              {/* Brand Section */}
              <div className="flex flex-col w-full lg:w-[42%]">
                <div className="flex flex-col gap-6 w-full sm:w-[54%]">
                  {/* Logo */}
                  <div className="flex items-center gap-1">
                    <img src="/images/img_group_2.svg" className="w-[18px] h-[20px]" alt="Habitus logo" />
                    <span className="text-2xl sm:text-3xl font-bold font-inter text-global-6">Habitus</span>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base font-inter text-footer-3 leading-5 sm:leading-6">
                    Track your daily routines, stay consistent, and turn goals into habits — all in one beautiful app.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="flex items-center gap-4 sm:gap-5 mt-6 lg:mt-8">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/images/img_frame_blue_gray_300_22x20.svg" className="w-[20px] h-[22px]" alt="Social media" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/images/img_frame_22x20.svg" className="w-[20px] h-[22px]" alt="Social media" />
                  </a>
                </div>
              </div>

              {/* Product Links */}
              <div className="flex flex-col gap-6 w-full sm:w-auto lg:w-[18%]">
                <h3 className="text-lg font-semibold font-inter text-global-6">Product</h3>
                <ul className="flex flex-col gap-4 sm:gap-5">
                  <li>
                    <a href="#features" className="text-sm sm:text-base font-inter text-footer-3 hover:text-global-6 transition-colors">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="#pricing" className="text-sm sm:text-base font-inter text-footer-3 hover:text-global-6 transition-colors">
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-sm sm:text-base font-inter text-footer-3 hover:text-global-6 transition-colors">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#blog" className="text-sm sm:text-base font-inter text-footer-3 hover:text-global-6 transition-colors">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div className="flex flex-col gap-6 w-full sm:w-auto lg:w-[18%]">
                <h3 className="text-lg font-semibold font-inter text-global-6">Company</h3>
                <ul className="flex flex-col gap-4 sm:gap-5">
                  <li>
                    <a href="#about" className="text-sm sm:text-base font-inter text-footer-3 hover:text-global-6 transition-colors">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-sm sm:text-base font-inter text-footer-3 hover:text-global-6 transition-colors">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#privacy" className="text-sm sm:text-base font-inter text-footer-3 hover:text-global-6 transition-colors">
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>

              {/* Newsletter Section */}
              <div className="flex flex-col w-full lg:w-[24%]">
                <h3 className="text-lg font-semibold font-inter text-global-6 mb-6">Newsletter</h3>
                <p className="text-xs sm:text-sm font-inter text-footer-3 mb-6">
                  Get tips & updates in your inbox
                </p>
                
                {/* Email Input */}
                <div className="bg-footer-1 rounded-[20px] px-6 py-2 mb-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-transparent text-sm sm:text-base font-inter text-footer-2 placeholder-footer-2 outline-none"
                  />
                </div>
                
                {/* Subscribe Button */}
                <Button
                  variant="accent"
                  size="small"
                  onClick={handleSubscribe}
                  className="bg-button-3 text-global-6 w-full rounded-[20px] px-8 py-2.5"
                >
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Copyright */}
            <div className="flex justify-center items-end w-full pt-6 sm:pt-8 lg:pt-12 border-t border-gray-700">
              <p className="text-sm sm:text-base font-inter text-footer-1 text-center">
                © 2025 Habitus. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;