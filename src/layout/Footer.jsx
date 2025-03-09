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
            <li className="my-2 opacity-85">Home</li>
            <li className="my-2 opacity-85">HOD's Profile</li>
            <li className="my-2 opacity-85">Vision & Mission</li>
            <li className="my-2 opacity-85">Department Overview</li>
          </ul>
          <ul className="">
            <li className="my-3 font-bold text-xl">Academics</li>
            <li className="my-2 opacity-85">Lecturer Profiles</li>
            <li className="my-2 opacity-85">Student Executives</li>
            <li className="my-2 opacity-85">Student Documents Uploads</li>
            <li className="my-2 opacity-85">Course Material</li>
            <li className="my-2 opacity-85">Past Questions</li>
          </ul>
          <ul className="">
            <li className="my-3 font-bold text-xl">Community</li>
            <li className="my-2 opacity-85">Discussion Forum</li>
            <li className="my-2 opacity-85">News Alerts</li>
            <li className="my-2 opacity-85">Event Calendars</li>
          </ul>
        </div>
      </div>
      <p className="py-6 text-center text-white text-sm font-[Inter]">Designed By Olamide Afolabi</p>
    </div>
  );
}
 
export default Footer;