import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isBlogOpen, setIsBlogOpen] = useState(false);

  return (
    <header className="w-full bg-global-5 mt-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full lg:max-w-[1416px] mx-auto">
        <div className="bg-global-5 border border-[#62616530] rounded-[34px] px-4 py-3.5 sm:px-6 sm:py-4">
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div className="flex items-center gap-1 ml-2">
              <img src="/images/img_icon.svg" className="w-[22px] h-[24px]" alt="Mobirito icon" />
              <span className="text-xl font-bold font-dm-sans text-global-2 capitalize">Mobirito</span>
            </div>

            {/* Hamburger Menu Icon (Mobile only) */}
            <button 
              className="block lg:hidden p-2" 
              aria-label="Open menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex justify-between items-center w-[32%]">
              <a href="#about" className="text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors">
                About
              </a>
              
              <div className="relative">
                <button 
                  className="flex items-center gap-1 text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors"
                  onClick={() => setIsServiceOpen(!isServiceOpen)}
                >
                  Service
                  <img src="/images/img_arrow_down.svg" className="w-[14px] h-[14px]" alt="dropdown arrow" />
                </button>
                {isServiceOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 min-w-[150px] z-10">
                    <a href="#service1" className="block px-4 py-2 text-sm hover:bg-gray-100">Home Cleaning</a>
                    <a href="#service2" className="block px-4 py-2 text-sm hover:bg-gray-100">Maintenance</a>
                    <a href="#service3" className="block px-4 py-2 text-sm hover:bg-gray-100">Repairs</a>
                  </div>
                )}
              </div>

              <a href="#portfolio" className="text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors">
                Portfolio
              </a>

              <div className="relative">
                <button 
                  className="flex items-center gap-1 text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors"
                  onClick={() => setIsBlogOpen(!isBlogOpen)}
                >
                  Blog
                  <img src="/images/img_arrow_down.svg" className="w-[14px] h-[14px]" alt="dropdown arrow" />
                </button>
                {isBlogOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 min-w-[150px] z-10">
                    <a href="#blog1" className="block px-4 py-2 text-sm hover:bg-gray-100">Tips & Tricks</a>
                    <a href="#blog2" className="block px-4 py-2 text-sm hover:bg-gray-100">News</a>
                    <a href="#blog3" className="block px-4 py-2 text-sm hover:bg-gray-100">Updates</a>
                  </div>
                )}
              </div>

              <a href="#contact" className="text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors">
                Contact
              </a>
            </nav>

            {/* Register Button - Desktop */}
            <div className="hidden lg:flex justify-center items-center">
              <Button 
                variant="accent" 
                size="small"
                className="bg-[#fd6921] text-global-6 px-4 py-1 rounded-[18px]"
              >
                Register
              </Button>
            </div>

            {/* Mobile Menu */}
            <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden absolute top-full left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg py-4 px-6 z-20`}>
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors">
                  About
                </a>
                <a href="#service" className="text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors">
                  Service
                </a>
                <a href="#portfolio" className="text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors">
                  Portfolio
                </a>
                <a href="#blog" className="text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors">
                  Blog
                </a>
                <a href="#contact" className="text-base font-dm-sans text-header-1 hover:text-global-3 transition-colors">
                  Contact
                </a>
                <Button 
                  variant="accent" 
                  size="small"
                  className="bg-[#fd6921] text-global-6 w-full mt-4"
                >
                  Register
                </Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;