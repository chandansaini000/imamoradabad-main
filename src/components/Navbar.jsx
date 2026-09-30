import { useState } from 'react';
import { Menu, X, ChevronDown, Heart, Video, Calendar, Award, Users, CalendarArrowUp, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveDropdown(null);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navItems = [
    {
      name: 'Home',
      icon: Home,
      path: '/home',
      hasDropdown: false
    },
    {
      name: 'About Us',
      icon: Users,
      path: '/about',
      hasDropdown: true,
      dropdownItems: [
        { name: 'About IMA Moradabad', path: '/about' },
        { name: 'Secretary Message', path: '/secretarymessage' },
        { name: 'President Message', path: '/presidentmessage' }
      ]
    },
    {
      name: 'Events',
      icon: Calendar,
      path: '/events',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Upcoming Events', path: '/upcomingevents' },
        { name: 'Past Events', path: '/pastevents' },
        // { name: 'CME Programs', path: '/cme' },
        // { name: 'Conferences', path: '/conference' }
      ]
    },
    {
      name: 'Achievements',
      icon: Award,
      path: '/achievements',
      hasDropdown: false
    },
    {
      name: 'Blood Bank',
      icon: Heart,
      path: '/blood-bank',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Donate Blood', path: '/blooddonate' },
        { name: 'Request Blood', path: '/requestblood' },
        { name: 'Blood Camps', path: '/bloodcamps' },
      ]
    },
    {
      name: 'Media',
      icon: Video,
      path: '/media',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Videos', path: '/videogallery' },
        { name: 'Gallery', path: '/imagegallery' },
        { name: 'News', path: '/newsgallery' }
      ]
    },
    {
      name: 'UpComing Events',
      icon: CalendarArrowUp,
      path: '/upComingevents',
      hasDropdown: false
    },
    {
      name: 'Contact Us',
      icon: Users, // Changed from ContactIcon which doesn't exist
      path: '/contactus',
      hasDropdown: false
    }
  ];

  return (
    <nav className="shadow-lg sticky top-0 z-50 bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <button onClick={() => handleNavigation('/')}>
            <img src="IMA_LOGO.png" alt="IMA_LOGO" className='size-20' />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5">
            {navItems.map((item, index) => (
              <div key={index} className="relative group">
                <button 
                  onClick={() => !item.hasDropdown && handleNavigation(item.path)}
                  className="flex items-center space-x-1 text-black bg-white hover:text-blue-600 font-medium  cursor-pointer
                  hover:border-b-4 duration-200 ease-in-out transition-all "

                >
                  <span className='font-semibold cursor-pointer'>{item.name}</span>
                  {item.hasDropdown && <ChevronDown size={16} />}
                </button>


                {/* Desktop Dropdown */}
                {item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                    <div className="py-2">
                      {item.dropdownItems?.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          onClick={() => handleNavigation(subItem.path)}
                          className="block w-full text-left px-4 py-3 text-gray-800 hover:text-black hover:bg-gray-100 transition-colors duration-200 text-sm cursor-pointer"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => handleNavigation('/blooddonate')}
              className="bg-red-500 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:bg-red-600 cursor-pointer"
            >
              Donate Blood
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-black hover:bg-gray-800 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="max-h-96 overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-200">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-5 h-5 text-black" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-2">
                      <item.icon className="w-5 h-5 text-black" />
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </button>
                )}

                {/* Mobile Dropdown items */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div className="bg-gray-50 py-2">
                    {item.dropdownItems.map((subItem, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavigation(subItem.path)}
                        className="block w-full text-left px-8 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-100 transition-colors"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="p-4">
              <button
                onClick={() => handleNavigation('/blooddonate')}
                className="w-full py-3 rounded-lg bg-red-500 hover:bg-red-600 font-semibold text-white transition-colors cursor-pointer"
              >
                Donate Blood
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
