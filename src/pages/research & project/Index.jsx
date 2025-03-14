import { FiDownload } from "react-icons/fi";

import CourseMaterials from '../../assets/images/past-questions.png';
import File_Icon from '../../assets/icons/dark_file.svg';

const Research_Project = () => {
  return (
    <div className="relative font-[Inter]">
      <h1 className="absolute top-[-11rem] z-10 left-0 md:text-[11.5rem] xl:text-[16rem] font-bold text-[#0000001A] opacity-100 select-none w-full">Research</h1>
      <header style={{
        backgroundImage: `url(${CourseMaterials})`,
      }}
        className="rule my-12 md:mt-24 text-white rounded-4xl flex flex-col justify-end p-6 bg-cover md:bg-center bg-no-repeat relative overflow-hidden md:my-16"
      >
        <div className="absolute bg-[#41A94E4D] w-full inset-0"></div>
        <div className="md:ml-8 z-10">
          <h2 className="font-extrabold text-4xl my-2 pt-10 text-center md:text-left md:my-4 md:text-6xl">Research & Projects</h2>
          <p className="font-semibold text-2xl text-center md:text-left md:text-3xl md:pb-8">Search for all the faculty research</p>
        </div>
      </header>
      <section className="rule my-8">
        <h2 className="font-extrabold text-center text-3xl text-[#41A94E] md:text-5xl lg:text-6xl">Get Access To Projects and Research Papers</h2>
        <form className="my-8 lg:my-12 md:w-[60%] mx-auto">
          <input className='rounded-4xl p-3 font-[Inter] border border-black bg-[#0000000F] text-sm w-full md:text-base md:px-6' type="search" placeholder='Search for all the faculty research...' name="" id="" />
        </form>
        <div className="my-8 lg:my-12">
          <p className="text-[#41A94E] font-medium md:text-lg">Most Popular</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-16 lg:my-8 my-4">
            <div className="bg-[#41A94E66] rounded-2xl flex flex-col overflow-hidden">
              <img src={File_Icon} alt="File" className="w-20 place-self-center p-5 lg:w-28" />
              <div className="bg-black flex items-center justify-between p-3 lg:p-4">
                <p className="font-medium text-white text-xs lg:text-base">Student and lecturer project supervisee</p>
                <FiDownload color="white" size={50} className="" />
              </div>
            </div>
            <div className="bg-[#41A94E66] rounded-2xl flex flex-col overflow-hidden">
              <img src={File_Icon} alt="File" className="w-20 place-self-center p-5 lg:w-28" />
              <div className="bg-black flex items-center justify-between p-3 lg:p-4">
                <p className="font-medium text-white text-xs lg:text-base">Student and lecturer project supervisee</p>
                <FiDownload color="white" size={50} className="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default Research_Project;