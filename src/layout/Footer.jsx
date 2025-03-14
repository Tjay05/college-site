import FbIcon from "../assets/icons/facebook.svg";
import IgIcon from "../assets/icons/instagram.svg";
import LinkedInIcon from "../assets/icons/linkedIn.svg";

const Footer = () => {
  return (
    <div className="bg-[#1E1E1E] relative">
      <div className="rule md:flex justify-between items-center text-white py-4 border-b md:py-8">
        <div className="">
          <p className="text-[#41A94E] font-[Inter] font-semibold text-3xl md:text-5xl text-center md:text-left">College Dept.</p>
          <p className="text-center font-[Inter] text-lg my-2 md:text-left md:text-xl lg:text-xl mb-10">
            Department Overview and Academic Excellence
          </p>
          <ul className="flex my-4 gap-3 justify-center md:justify-normal md:mt-14">
            <li className="">
              <img className="w-8" src={FbIcon} alt="Facebook" />
            </li>
            <li className="">
              <img className="w-8" src={IgIcon} alt="Instagram" />
            </li>
            <li className="">
              <img className="w-8" src={LinkedInIcon} alt="X" />
            </li>
          </ul>
        </div>
        <div className="font-[Inter] text-center md:text-lg md:w-[65%] justify-evenly md:flex md:text-left">
          <ul className="">
            <li className="font-bold text-xl my-3">Menu</li>
            <li className="my-2 opacity-85"><a href="/">Home</a></li>
            <li className="my-2 opacity-85"><a href="/About">HOD's Profile</a></li>
            <li className="my-2 opacity-85"><a href="#vision">Vision & Mission</a></li>
            <li className="my-2 opacity-85"><a href="#department">Department Overview</a></li>
          </ul>
          <ul className="">
            <li className="my-3 font-bold text-xl"><a href="/Academics">Academics</a></li>
            <li className="my-2 opacity-85">Lecturer Profiles</li>
            <li className="my-2 opacity-85"><a href="#excos">Student Executives</a></li>
            <li className="my-2 opacity-85">Student Documents Uploads</li>
            <li className="my-2 opacity-85"><a href="#materials">Course Material</a></li>
            <li className="my-2 opacity-85"><a href="#materials">Past Questions</a></li>
          </ul>
          <ul className="">
            <li className="my-3 font-bold text-xl"><a href="/Community">Community</a></li>
            <li className="my-2 opacity-85"><a href="#discussion">Discussion Forum</a></li>
            <li className="my-2 opacity-85"><a href="#news">News Alerts</a></li>
            <li className="my-2 opacity-85"><a href="#events">Event Calendars</a></li>
          </ul>
        </div>
      </div>
      <p className="py-6 text-center text-white text-sm font-[Inter]">Designed By Olamide Afolabi</p>
    </div>
  );
}
 
export default Footer;