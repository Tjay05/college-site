import { useEffect, useState } from "react";

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
      <div className="flex justify-between items-center rule py-2">
        <p className="text-[#41A94E] font-semibold text-lg">College Dept</p>
        <div 
          className="flex flex-col justify-between w-6 h-[15px]"
          onClick={handleNavToggle}
        >
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </div>
      </div>
      {/* Mobile Nav */}
      {isMobile && (
        <ul className={`${toggleNav ? 'opacity-100 translate-y-0.5' : 'opacity-0 translate-y-full'} ${toggleNav ? 'z-90' : ''} transition-all duration-300 shadow-md ease-in-out absolute top-10.5 w-full bg-inherit py-2 border-white border-t flex flex-col justify-center text-white items-center font-[]`}>
          <li><a href="">About</a></li>
          <li><a href="">Academics</a></li>
          <li><a href="">Community</a></li>
          <li><a href="">Reasearch & Projects</a></li>
          <li><a href="">Contact Us</a></li>
          <li><a href="">Login</a></li>
        </ul>
      )}
    </nav>
  );
}
 
export default Navbar;