import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../App";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

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
      <div className="flex justify-between items-center rule py-3 md:py-2">
        <p className="text-[#41A94E] font-[Inter] font-semibold text-lg md:text-2xl">College Dept.</p>
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
        <ul 
          className="hidden text-white items-center justify-between w-1/2 py-2 md:flex lg:text-lg xl:text-xl font-[Outfit]"
        >
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
          <Link href="" className="border border-white text-white px-3 py-1.5">Contact Us</Link>
          <Link href="" className="text-[#1E1E1E] border bg-white px-3 py-1.5">Login</Link>
        </div>
      </div>
      {/* Mobile Nav */}
      {isMobile && (
        <ul className={`${toggleNav ? 'opacity-100 translate-y-0.5' : 'opacity-0 translate-y-full'} ${toggleNav ? 'z-90' : ''} transition-all duration-300 shadow-md ease-in-out absolute top-12.5 w-full bg-inherit py-2 border-white border-t flex flex-col justify-center text-white text-lg items-center font-[Outfit]`}>
          <li className="nav_link">
            <NavLink onClick={handleNavToggle} className="links" to="/">Home</NavLink>
          </li>
          <li className="nav_link">
            <NavLink onClick={handleNavToggle} className="links" to="">About</NavLink>
          </li>
          <li className="nav_link">
            <NavLink onClick={handleNavToggle} className="links" to="">Academics</NavLink>
          </li>
          <li className="nav_link">
            <NavLink onClick={handleNavToggle} className="links" to="">Community</NavLink>
          </li>
          <li className="nav_link">
            <NavLink onClick={handleNavToggle} className="links" to="">Research & Projects</NavLink>
          </li>
          <li className="nav_link my-2">
            <Link onClick={handleNavToggle} className="border border-white text-white px-3 py-2 mb-2" to="">Contact Us</Link>
          </li>
          <li className="nav_link mb-2">
            <button onClick={() => {
              setIsModalOpen(true);
              handleNavToggle();
            }} className="text-[#1E1E1E] border bg-white px-7 py-2 cursor-pointer" to="">Login</button>
          </li>
        </ul>
      )}
    </nav>
  );
}
 
export default Navbar;