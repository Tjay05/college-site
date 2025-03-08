import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

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

  return (
    <nav className="bg-[#1E1E1E] relative">
      <div className="flex justify-between items-center rule py-3">
        <p className="text-[#41A94E] font-[Inter] font-semibold text-lg md:text-2xl">College Dept</p>
        {/* Hamburger Menu */}
        {isMobile && (
          <div 
            className="flex flex-col justify-between w-6 h-[15px]"
            onClick={handleNavToggle}
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </div>
        )}
        {/* Desktop Nav */}
        <ul className="hidden text-white items-center justify-between font-[Open_Sans] w-1/2 py-2 md:flex lg:text-lg xl:text-xl font-[]  ">
          <li className="nav_link">
            <NavLink className="links" to="/">Home</NavLink>
          </li>
          <li className="nav_link">
            <NavLink className="links" to="About">About </NavLink>
          </li>
          <li className="nav_link">
            <NavLink className="links" to="">Academics</NavLink>
          </li>
          <li className="nav_link">
            <NavLink className="links" to="">Community</NavLink>
          </li>
          <li className="nav_link">
            <NavLink className="links" to="">Research & Projects</NavLink>
          </li>
        </ul>
        <div className="hidden lg:flex gap-4 text-sm md:text-[16px] font-[]">
          <a href="" className="border border-white text-white px-3 py-1.5">Contact Us</a>
          <a href="" className="text-[#1E1E1E] border bg-white px-3 py-1.5">Login</a>
        </div>
      </div>
      {/* Mobile Nav */}
      {isMobile && (
        <ul className={`${toggleNav ? 'opacity-100 translate-y-0.5' : 'opacity-0 translate-y-full'} ${toggleNav ? 'z-90' : ''} transition-all duration-300 shadow-md ease-in-out absolute top-12.5 w-full bg-inherit py-2 border-white border-t flex flex-col justify-center text-white items-center font-[]`}>
          <li><a href="/">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Academics</a></li>
          <li><a href="">Community</a></li>
          <li><a href="">Research & Projects</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Login</a></li>
        </ul>
      )}
    </nav>
  );
}
 
export default Navbar;