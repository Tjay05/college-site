import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../App";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const location = useLocation();
  const { isModalOpen, setIsModalOpen, isLoginModalOpen, setIsLoginModalOpen, isEditModalOpen } = useContext(ModalContext);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const handleNavToggle = () => setToggleNav(!toggleNav);

  const isPageRoute = !location.pathname.includes('/About') &&
  !location.pathname.includes('Academics') &&
  !location.pathname.includes('Community') &&
  !location.pathname.includes('Research') && 
  !location.pathname.includes('Profile');

  return (
    <div className="relative">
      <nav className="bg-[#1E1E1E] relative">
        <div className="flex justify-between items-center rule py-3 md:py-2">
          <p className="text-[#41A94E] font-[Inter] font-semibold text-xl md:text-2xl">College Dept.</p>
          {/* Hamburger Menu */}
          {isMobile && (
            <div
              className="flex flex-col justify-between w-6 h-[15px] cursor-pointer"
              onClick={handleNavToggle}
            >
              <span className="hamburger"></span>
              <span className="hamburger"></span>
              <span className="hamburger"></span>
            </div>
          )}
          {/* Desktop Nav */}
          <ul
            className="hidden text-white items-center justify-between w-1/2 py-2 md:flex lg:text-lg xl:text-xl font-[Outfit] z-30"
          >
            <li className="nav_link">
              <NavLink className="links" to="/">Home</NavLink>
            </li>
            <li className="nav_link">
              <NavLink className="links" to="About">About </NavLink>
            </li>
            <li className="nav_link">
              <NavLink className="links" to="Academics">Academics</NavLink>
            </li>
            <li className="nav_link">
              <NavLink className="links" to="Community">Community</NavLink>
            </li>
            <li className="nav_link">
              <NavLink className="links" to="Research">Research & Projects</NavLink>
            </li>
          </ul>
          { isPageRoute && (
            <div className="hidden md:flex gap-4 text-sm md:text-[16px]">
              <button onClick={() => setIsModalOpen(true)} className="border border-white text-white px-3 py-1.5">Sign Up</button>
              <button onClick={() => setIsLoginModalOpen(true)} className="text-[#1E1E1E] border bg-white px-3 py-1.5">Login</button>
            </div>
          )}
          { !isPageRoute && (
            <NavLink to='Profile' className="hidden font-semibold md:flex gap-4 items-center font-[Outfit] z-30 profile_link">
              <p className="text-white text-lg">No Profile</p>
              <span className="bg-white text-[#1E1E1E] px-2.5 py-2 rounded-full text-lg">NP</span>
            </NavLink>
          )}
        </div>
        {/* Mobile Nav */}
        {isMobile && (
          <ul className={`${toggleNav ? 'opacity-100 translate-y-0.5' : 'opacity-0 translate-y-full'} ${toggleNav ? 'z-90' : 'z-0'} transition-all duration-300 shadow-md ease-in-out absolute top-12.5 w-full bg-inherit py-2 border-white border-t flex flex-col justify-center text-white text-lg items-center font-[Outfit]`}>
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="/">Home</NavLink>
            </li>
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="About">About</NavLink>
            </li>
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="Academics">Academics</NavLink>
            </li>
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="Community">Community</NavLink>
            </li>
            <li className="nav_link">
              <NavLink onClick={handleNavToggle} className="links" to="Research">Research & Projects</NavLink>
            </li>
            { isPageRoute && (
              <>
                <li className="nav_link my-2">
                  <button onClick={() => {
                    setIsModalOpen(true);
                    handleNavToggle();
                  }} className="border border-white text-white px-3 py-2 mb-2" to="">Sign Up</button>
                </li>
                <li className="nav_link mb-2">
                  <button onClick={() => {
                    setIsLoginModalOpen(true);
                    handleNavToggle();
                  }} className="text-[#1E1E1E] border bg-white px-7 py-2 cursor-pointer" to="">Login</button>
                </li>
              </>
            )}
            { !isPageRoute && (
            <NavLink onClick={handleNavToggle}  to='Profile' className="font-semibold flex gap-4 items-center font-[Outfit] my-2 profile_link">
              <p className="text-white text-lg">No Profile</p>
              <span className="bg-white text-[#1E1E1E] px-2.5 py-2 rounded-full text-lg">NP</span>
            </NavLink>
          )}
          </ul>
        )}
      </nav>
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-2xl z-99"></div>
      )}
      {isLoginModalOpen && (
        <div className="fixed inset-0 backdrop-blur-2xl z-99"></div>
      )}
      {isEditModalOpen && (
        <div className="fixed inset-0 backdrop-blur-2xl z-99"></div>
      )}
    </div>
  );
}
 
export default Navbar;