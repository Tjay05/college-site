import lapGuy from "../../assets/images/students.jpg";
import Bg1_tl from "../../assets/images/green-bg1tl.png";
import Bg1br from "../../assets/images/green-bg1br.png";
import Bg2_tl from "../../assets/images/bg2-tl.png";
import Bg2br from "../../assets/images/bg2-br.png";
import Bg3br from "../../assets/images/bg3-br.png";
import Bg3_tl from "../../assets/images/bg3-tl.png";
import NewsPaper from "../../assets/images/single student.jpg";
import Afro_Guy from "../../assets/images/afro-guy.png";
import ResourceGroup from "../../assets/images/students 2.jpg";
import ResourceGroup2 from "../../assets/images/students 3.jpg";
import ResourceGroup3 from "../../assets/images/student 4.jpg";
import CommunityGuy from "../../assets/images/community.jpg";
import Curriculum from "../../assets/icons/structured-curriculum.svg";
import Faculty from "../../assets/icons/dedicated-support.svg";
import Community from "../../assets/icons/engaging-community.svg";
import Resources from "../../assets/icons/comprehensive-resources.svg";
import Updated from "../../assets/icons/stay-updated.svg";
import Experience from "../../assets/icons/transformative-experience.svg";
import map_Pointer from "../../assets/icons/location.svg";
import mail_icon from "../../assets/icons/email.svg";
import phone_icon from "../../assets/icons/call.svg";
import { useContext } from "react";
import { ModalContext } from "../../App";
import AccountPopup from "../account/Index";
import LoginWrap from "../account/LoginWrapper";

const Home = () => {
  const { isModalOpen, isLoginModalOpen } = useContext(ModalContext);

  return (
    <div className="relative mt-11 ">
      <div className="relative ">
        <header
          className={`bg-[#41A94EE5] relative w-full py-4 lg:py-16`}
          style={{
            backgroundImage: `url(${Bg1_tl}), url(${Bg1br})`,
            backgroundPosition: "0% 5%, 100% 100%",
            backgroundRepeat: "no-repeat no-repeat",
            backgroundSize: "100px, 200px"
          }}
        >
          <div className="rule lg:flex flex-row-reverse justify-between items-center">
            <img className="w-full rounded-3xl lg:w-[40%]" src={lapGuy} alt="" />
            <div className="flex flex-col font-[Inter] text-white text-center my-4 lg:w-[55%] lg:text-left">
              <h1 className="heading">Enhance Your Academic Journey</h1>
              <p className="text-[#333333] heading">Unlock Your Potential</p>
              {/* <p className="heading">Join Our Vibrant Community</p> */}
              <p className="font-semibold my-2 lg:text-xl lg:w-3/4 lg:my-5">
                Experience excellence and innovation with a department dedicated
                to enriching your academic journey.
              </p>
              {/* <button className="bg-[#333333] rounded-4xl self-center px-5 text-lg font-semibold my-4 py-3 cursor-pointer lg:self-baseline lg:text-xl">
                Connect With Us
              </button> */}
            </div>
          </div>
        </header>
        <section id="resources" className="rule my-4 font-[Inter] lg:my-8">
          <h2 className="text-black font-extrabold text-center text-2xl mt-8 lg:mt-12 lg:text-5xl lg:w-[85%] mx-auto">
            Elevate Your Academic Journey with Our Department
          </h2>
          <p className="text-[#00000080] text-center font-medium my-2 lg:text-xl">
            Access a wealth of resources and support
          </p>
          <div className="my-12 lg:flex justify-between lg:my-20">
            <img
              src={NewsPaper}
              className="rounded-2xl w-full object-cover lg:w-[35%]"
              alt=""
            />
            <div className="grid grid-cols-2 gap-6 my-8 lg:grid-cols-3 lg:w-[60%]">
              <div className="grid_items">
                <img
                  src={Curriculum}
                  alt="Structured Curriculum"
                  className="grid_icon"
                />
                <h3 className="grid_heading">Structured Curriculum</h3>
                <p className="grid_texts">
                  Benefit from a well-organized curriculum that enhances your
                  learning experience.
                </p>
              </div>
              <div className="grid_items">
                <img
                  src={Faculty}
                  alt="Faculty Support"
                  className="grid_icon"
                />
                <h3 className="grid_heading">Dedicated Faculty Support</h3>
                <p className="grid_texts">
                  Access guidance from experienced faculty who are committed to
                  your academic success.
                </p>
              </div>
              <div className="grid_items">
                <img
                  src={Community}
                  alt="Engaging Community"
                  className="grid_icon"
                />
                <h3 className="grid_heading">Engaging Community</h3>
                <p className="grid_texts">
                  Join a vibrant community that fosters discussions, networking,
                  and collaboration among peers.
                </p>
              </div>
              <div className="grid_items">
                <img
                  src={Resources}
                  alt="Comprehensive Resources"
                  className="grid_icon"
                />
                <h3 className="grid_heading">Comprehensive Resources</h3>
                <p className="grid_texts">
                  Easily navigate through course outlines, past exams, and
                  curated reading lists to excel in your studies.
                </p>
              </div>
              <div className="grid_items">
                <img src={Updated} alt="Stay Updated" className="grid_icon" />
                <h3 className="grid_heading">Stay Updated</h3>
                <p className="grid_texts">
                  Follow department updates, exciting events, and student
                  achievements to stay connected and informed.
                </p>
              </div>
              <div className="grid_items">
                <img src={Experience} alt="Experieence" className="grid_icon" />
                <h3 className="grid_heading">
                  Transformative Learning Experience
                </h3>
                <p className="grid_texts">
                  Embark on an educational journey that empowers you to reach
                  your fullest potential and aspirations..
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className="bg-[#41A94E] rule p-5 relative rounded-4xl my-12 lg:mt-54 lg:py-10 lg:px-18 lg:flex items-center justify-start"
          style={{
            backgroundImage: `url(${Bg2_tl}), url(${Bg2br})`,
            backgroundPosition: "top left, bottom right",
            backgroundRepeat: "no-repeat no-repeat",
            backgroundSize: "17%, 17%"
          }}
        >
          <div className="text-white font-[Inter] text-center z-10 lg:text-left lg:w-[45%]">
            <p className="text-sm font-medium mb-2 opacity-80 md:text-lg lg:text-xl lg:mb-4">
              Maximize your academic potential with us
            </p>
            <h2 className="text-3xl font-extrabold my-2 md:text-4xl lg:text-5xl lg:my-4">
              Tailored programs for personal and professional growth
            </h2>
            <p className="text-sm font-semibold opacity-80 md:text-lg  lg:text-xl">
              Engage with a community that prioritizes collaboration and
              knowledge-sharing
            </p>
            <button className="bg-[#333333] rounded-4xl self-center px-5 text-lg font-semibold my-4 py-3 cursor-pointer lg:mt-8 lg:text-xl">
              Begin your Journey with us
            </button>
          </div>
          <img
            src={Afro_Guy}
            alt="Afro Guy"
            className="hidden lg:block lg:absolute right-[-60px] w-[67%] bottom-0 h-auto object-cover"
          />
        </section>
        <section
          className="bg-[#41A94E] relative my-16 py-8 lg:pb-58 lg:mb-98"
          style={{
            backgroundImage: `url(${Bg3_tl}), url(${Bg3br})`,
            backgroundPosition: "top left, bottom right",
            backgroundRepeat: "no-repeat no-repeat",
            backgroundSize: "7%, 15%"
          }}
        >
          <div className="rule text-white font-[Inter] text-center lg:text-left relative">
            <p className="font-semibold text-lg opacity-75 lg:text-2xl lg:mb-4">
              Our Work
            </p>
            <h2 className="font-extrabold text-3xl lg:text-5xl">
              Empowering Academic Excellence
            </h2>
            <p className="font-medium text-lg opacity-75 my-4 lg:text-2xl lg:w-[75%] lg:opacity-100">
              Explore exceptional resources dedicated to enhancing your academic
              journey within our college department.
            </p>
            <div className="lg:grid grid-cols-1 gap-24 lg:grid-cols-3 lg:absolute bottom-[-530px]">
              <div className="card">
                <img
                  src={ResourceGroup}
                  alt="Resources Group"
                  className="card_pic"
                />
                <div className="p-4 bg-white text-left h-full">
                  <h3 className="font-bold text-black text-lg lg:text-2xl">
                    Comprehensive Academic Resources
                  </h3>
                  <p className="text-[#00000080] lg:text-lg">
                    Access a wealth of curated materials designed for both
                    lecturers and students.
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  src={ResourceGroup2}
                  alt="Resources Group"
                  className="card_pic"
                />
                <div className="p-4 bg-white text-left h-full">
                  <h3 className="font-bold text-black text-lg lg:text-2xl">
                    Engaging Community Forums
                  </h3>
                  <p className="text-[#00000080] lg:text-lg">
                    Share knowledge and collaborate with peers in discussion
                    forums tailored for academic and career advancements
                  </p>
                </div>
              </div>
              <div className="card">
                <img
                  src={ResourceGroup3}
                  alt="Resources Group"
                  className="card_pic"
                />
                <div className="p-4 bg-white text-left h-full">
                  <h3 className="font-bold text-black text-lg lg:text-2xl">
                    Dynamic Learning Environment
                  </h3>
                  <p className="text-[#00000080] lg:text-lg">
                    Stay informed with real-time updates on department news and
                    events that celebrate your achievements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
         <section id="community" className="rule font-[Inter] text-center">
           <h2 className="text-black font-extrabold text-3xl lg:text-5xl">
             What Our Community Are Saying
           </h2>
           <p className="text-[#00000080] my-3 font-medium lg:text-lg">
             Your academic and professional growth is our topmost priority!
           </p>
           <div className="my-12 shadow-lg p-4 rounded-3xl md:flex md:gap-12 md:px-8 md:py-6 md:my-24 lg:gap-18 lg:px-24 lg:py-12 relative bg-[#41A94EE5] z-90 lg:my-36">
             {/* Rotated BG */}
             <div className="absolute inset-0 bg-[#fff] w-full rotate-1 -z-1 rounded-3xl shadow-lg"></div>
             <img
               src={CommunityGuy}
               alt="Student"
               className="w-full h-[300px] sm:h-[300px] object-contain lg:w-[25%]"
             />
             <div className="my-2 lg:w-[55%] lg:text-left">
               <h3 className="font-extrabold my-3 text-xl lg:text-3xl">
                 Transformative Learning Experiences
               </h3>
               <p className="font-medium lg:text-lg lg:my-4">
                 " Today, looking back from where it all started in 100l to my
                 final year; I see a shaping process, a making process,an exposure
                 to a department and community that simplifies the world's
                 multifaceted realities, socio-economic and political trends from a
                 historical stand point. This is a place where world class leaders
                 are emerging from."
               </p>
               <p className="font-medium my-4 lg:text-lg">
                 ~ Lucky Joseph,{" "}
                 <span className="font-bold">Student</span>
               </p>
             </div>
           </div>
         </section>
   
        {/* <section className="rule font-[Inter] border border-black p-6 my-16 rounded-4xl bg-white md:flex items-stretch md:my-28 md:p-8 md:gap-8">
          <div className="bg-[#41A94E] text-white p-5 rounded-2xl mb-4 md:w-[40%]">
            <p className="uppercase font-semibold text-lg md:text-xl">Connect with us</p>
            <h2 className="font-bold my-2 text-xl md:text-2xl lg:text-4xl">Experience the Full Potential of Our College Department</h2>
            <div className="my-6 w-full flex flex-col gap-2 md:gap-3">
              <div className="flex items-center gap-3">
                <img src={map_Pointer} alt="Location" className="w-[35px] md:w-11" />
                <div className="">
                  <p className="font-bold md:text-lg lg:text-xl">Our Office</p>
                  <p className="text-xs md:text-sm lg:text-base">Jos, Plateau State</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={mail_icon} alt="email" className="w-[35px] md:w-11" />
                <div className="">
                  <p className="font-bold md:text-lg lg:text-xl">Contact Us Via Email</p>
                  <p className="text-xs md:text-sm lg:text-base">Tosinolacollege@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <img src={phone_icon} alt="Phone" className="w-[35px] md:w-11" />
                <div className="">
                  <p className="font-bold md:text-lg lg:text-xl">Call Us</p>
                  <p className="text-xs md:text-sm lg:text-base">+123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
          <form action="" className="grid grid-cols-2 gap-6 mt-8 md:m-0 lg:gap-8 lg:w-[50%]">
            <div className="flex flex-col">
              <label htmlFor="firstname" className="contact_label">First Name</label>
              <input type="text" id='firstname' className='contact_input_field' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name" className="contact_label">Last Name</label>
              <input type="text" id='last-name' className='contact_input_field' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mat-num" className="contact_label">Matric No</label>
              <input type="text" id='mat-num' className='contact_input_field' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="contact_label">School Email</label>
              <input type="email" id='email' className='contact_input_field' />
            </div>
            <div className="flex flex-col col-span-2">
              <label htmlFor="message" className="contact_label">Message</label>
              <textarea name="message" id="message" className='contact_input_field' cols="30" rows="6"></textarea>
            </div>
            <button className='border-3 border-[#41A94E] rounded-4xl py-2 text-[#41A94E] font-semibold text-lg w-1/2 place-self-center col-span-2 cursor-pointer md:text-2xl'>Contact Us</button>
          </form>
        </section> */}
      </div>
      {isModalOpen && <AccountPopup />}
      {isLoginModalOpen && <LoginWrap />}
    </div>
  );
};

export default Home;
