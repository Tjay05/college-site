import { FiDownload } from "react-icons/fi";

import CourseMaterials from '../../assets/images/past-questions.png';
import Kemi from '../../assets/images/kemi.png';
import Abdul from '../../assets/images/abdul.png';
import Ebuka from '../../assets/images/prof.png';
import CommunityGuy from '../../assets/images/community-guy.png';
import News_Pic from '../../assets/images/news.png';
import File_Icon from '../../assets/icons/dark_file.svg';
import Star from '../../assets/icons/star.svg';

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
      <section className="rule section_spacer">
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
      <section className="rule section_spacer">
        <h2 className="font-extrabold text-center text-3xl text-[#41A94E] md:text-5xl lg:text-6xl">Student Achievments</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 my-8 lg:my-12">
          <div className="bg-[#41A94E] rounded-2xl overflow-hidden relative">
            <img src={Kemi} className='object-cover h-30 w-full md:h-56' alt="Kemi Pam" />
            <img src={Star} alt="Star" className="absolute top-2 right-2 w-6 md:w-8" />
            <div className="text-white text-center text-xs px-3 py-2 md:text-lg md:py-4">
              <p className="font-bold">Kemi Pam</p>
              <span className="font-medium">First Class Honors {2013}</span>
            </div>
          </div>
          <div className="bg-[#41A94E] rounded-2xl overflow-hidden relative">
            <img src={Abdul} className='object-cover h-30 w-full md:h-56' alt="Abdul Fatai" />
            <img src={Star} alt="Star" className="absolute top-2 right-2 w-6 md:w-8" />
            <div className="text-white text-center text-xs px-3 py-2 md:text-lg md:py-4">
              <p className="font-bold">Abdul Fatai</p>
              <span className="font-medium">First Class Honors {2010}</span>
            </div>
          </div>
          <div className="bg-[#41A94E] rounded-2xl overflow-hidden relative">
            <img src={Ebuka} className='object-cover h-30 w-full md:h-56' alt="Ebuka Eze" />
            <img src={Star} alt="Star" className="absolute top-2 right-2 w-6 md:w-8" />
            <div className="text-white text-center text-xs px-3 py-2 md:text-lg md:py-4">
              <p className="font-bold">Ebuka Eze</p>
              <span className="font-medium">First Class Honors {2018}</span>
            </div>
          </div>
        </div>
      </section>
      <section className="rule section_spacer">
        <h2 className="font-extrabold text-center text-3xl text-[#41A94E] md:text-5xl lg:text-6xl">Alumni & Success Stories</h2>
        <div className="my-8 shadow-lg p-6 rounded-3xl md:flex-col md:gap-12 md:px-8 md:py-6 lg:gap-18 lg:px-16 lg:py-12 relative bg-[#41A94EE5] z-90 lg:my-12">
          {/* Rotated BG */}
          <div className="absolute inset-0 bg-[#fff] w-full rotate-1 -z-1 rounded-3xl shadow-lg"></div>
          <div className="md:flex items-center gap-16 md:w-[90%] mx-auto md:mb-12">
            <img src={CommunityGuy} alt="Student" className='w-full h-[250px] object-cover rounded-3xl md:w-[20%] md:h-fit' />
            <div className="text-black text-xl my-4 md:text-5xl">
              <p className="font-medium">Damson Idris</p>
              <span className="font-bold">Alumni 2017/2018</span>
            </div>
          </div>
          <p className="font-medium text-sm lg:text-lg lg:my-4">
            "This college department has redefined my academic journey. With structured programs and abundant resources, I feel empowered to excel. The collaborative community has fostered invaluable discussions and connections!" Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.
          </p>
        </div>
      </section>
      <section className="rule section_spacer">
        <header style={{
          backgroundImage: `url(${News_Pic})`,
        }}
          className="text-white rounded-4xl flex flex-col justify-end p-6 bg-cover md:bg-center bg-no-repeat relative overflow-hidden my-8 md:my-16"
        >
          <div className="absolute bg-[#41A94E4D] w-full inset-0"></div>
          <div className="md:ml-8 z-10 flex flex-col">
            <h2 className="font-extrabold text-3xl my-2 text-center md:text-left md:my-4 md:text-5xl">Want to be part of the discussion Join our Whatsapp Group</h2>
            <button className="bg-white px-2 py-1 rounded-4xl font-semibold text-black place-self-center md:my-4 md:px-8 cursor-pointer md:py-2 md:text-2xl md:place-self-start">Join Now</button>
          </div>
        </header>
      </section>
    </div>
  );
}
 
export default Research_Project;