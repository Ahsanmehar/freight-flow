import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import STechIcon from '@/components/STechIcon'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const navigate = useNavigate();
  const location = useLocation(); 

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Services', path: '/services', icon: 'box' },
    { name: 'Pricing', path: '/pricing', icon: 'calculator' },
    { name: 'Driver Signup', path: '/driver-signup', icon: 'user-plus' },
    { name: 'Carrier Signup', path: '/carrier-signup', icon: 'building-2' },
    { name: 'Dashboard', path: '/dashboard', icon: 'layout-dashboard' },
    { name: 'Request Load', path: '/request-load', icon: 'truck' },
    { name: 'Payment', path: '/payment', icon: 'wallet' },
    { name: 'Compliance', path: '/compliance', icon: 'shield' },
    { name: 'Support', path: '/support', icon: 'circle-question-mark' },
    { name: 'Admin', path: '/admin', icon: 'settings' }
  ];

  const handleLinkClick = (path) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  //no scrolling when sidebar is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="px-4 py-5 bg-bg1/20 text-text1">
        <div className="max-w-6xl mx-auto flex items-center justify-between space-x-5 gap-3 ml-1 ">
          <div className="flex items-center space-x-3">
            <STechIcon name="truck" className="w-8 h-8 text-orange" />
            <h1 className="text-2xl font-bold text-white">FreightFlow</h1>
          </div>

          <div className="hidden lg:flex">
            <ul className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeLink === item.path;
                return (
                  <li key={item.path}>
                    <button
                      onClick={() => handleLinkClick(item.path)}
                      className={`flex items-center gap-2 px-3 py-2 rounded transition-all duration-200 whitespace-nowrap text-sm
                        ${isActive ? 'bg-orange text-white' : 'text-text1 hover:text-orange'}`}
                    >
                      <STechIcon name={item.icon} className="w-4 h-4" />
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md hover:bg-orange cursor-pointer"
            >
              {isMobileMenuOpen ? (
                <STechIcon name="x" size={24} className="text-white" />
              ) : (
                <STechIcon name="menu" size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
  <div
    className="lg:hidden fixed inset-0 z-40 bg-black/80"
    onClick={() => setIsMobileMenuOpen(false)}
  >
    <div
      className="fixed top-0 right-0 h-full w-80 p-6 bg-bg2 overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-2">
          <STechIcon name="truck" className="w-6 h-6 text-orange" />
          <h2 className="text-text1 text-xl font-bold">FreightFlow</h2>
        </div>
        <button onClick={() => setIsMobileMenuOpen(false)} className="p-1">
          <STechIcon
            name="x"
            size={20}
            className="text-white cursor-pointer hover:text-orange"
          />
        </button>
      </div>

      <ul className="space-y-2">
        {navItems.map((item) => {
          const isActive = activeLink === item.path;
          return (
            <li key={item.path}>
              <button
                onClick={() => handleLinkClick(item.path)}
                className={`flex items-center gap-2 w-full text-left px-4 py-3 rounded transition-all duration-200 cursor-pointer group
                  ${isActive ? 'bg-orange text-white' : 'text-text1 hover:bg-white/20 hover:text-orange'}`}
              >
                <STechIcon
                  name={item.icon}
                  className={`w-5 h-5 ${
                    isActive ? 'text-white' : 'text-text1 group-hover:text-orange'
                  }`}
                />
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
)}
    </>
  );
};

export default Navbar;
