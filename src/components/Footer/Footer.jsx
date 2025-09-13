import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import STechIcon from '@/components/STechIcon';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  const linkClass = (path) =>
    `text-sm transition-colors duration-200 ${
      location.pathname === path
        ? 'text-orange font-medium'
        : 'text-text2 hover:text-orange'
    }`;

  return (
    <footer className="py-12 bg-bg1/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <STechIcon name="truck" className="w-8 h-8 text-orange" />
              <span className="text-xl font-semibold text-text1">FreightFlow</span>
            </div>
            <p className="text-sm text-text2">
              Connecting freight and carriers with AI-powered precision.
            </p>
          </div>


          <div>
            <h3 className="font-semibold mb-4 text-text1">Platform</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleLinkClick('/services')}
                    className={linkClass('/services')}
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/pricing')}
                    className={linkClass('/pricing')}
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/dashboard')}
                    className={linkClass('/dashboard')}
                  >
                    Dashboard
                  </button>
                </li>
              </ul>
            </nav>
          </div>


          <div>
            <h3 className="font-semibold mb-4 text-text1">Get Started</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleLinkClick('/driver-signup')}
                    className={linkClass('/driver-signup')}
                  >
                    Driver Signup
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/carrier-signup')}
                    className={linkClass('/carrier-signup')}
                  >
                    Carrier Signup
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/support')}
                    className={linkClass('/support')}
                  >
                    Support
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-4 text-text1">Company</h3>
            <nav>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleLinkClick('/about')}
                    className={linkClass('/about')}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/careers')}
                    className={linkClass('/careers')}
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleLinkClick('/contact')}
                    className={linkClass('/contact')}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-text2/30 mt-8 pt-6">
          <p className="text-center text-sm text-text2">
            © 2025 FreightFlow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
