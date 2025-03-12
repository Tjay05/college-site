import { useContext } from 'react';
import { ModalContext } from '../../App';
import AccountPopup from '../account/Index';
import LoginWrap from '../account/LoginWrapper';

import SmilyGuy from "../../assets/images/about-us-guy.png";
import Department_Pic from "../../assets/images/department.png";
import Bg3br from '../../assets/images/bg3-br.png';
import Bg3_tl from '../../assets/images/bg3-tl.png';
import CommunityGuy from '../../assets/images/community-guy.png';
import map_Pointer from '../../assets/icons/location.svg';
import mail_icon from '../../assets/icons/email.svg';
import phone_icon from '../../assets/icons/call.svg';

const About = () => {
  const { isModalOpen, isLoginModalOpen } = useContext(ModalContext);

  return (
    <div className="relative">
      <div className="relative font-[Inter]">
        <section className='my-4'>
          <div className="rule my-6">
            <h1 className="font-bold text-[#41A94E] text-center text-4xl md:text-left md:text-6xl">About Us</h1>
            <div className="flex flex-col gap-y-8 my-6 md:flex-row md:my-10 justify-between md:items-center">
              <img src={SmilyGuy} alt="" className="w-full object-cover rounded-xl md:h-[470px] md:w-[40%]" />
              <div className="text-[#41A94E] md:w-[50%]">
                <h2 className="font-extrabold text-3xl mb-2 md:text-5xl md:mb-6">HOD's Profile</h2>
                <p className="font-medium text-lg md:text-2xl">
                  Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. <br /><br />Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.<br /> <br />Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. 
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="rule">
          <header style={{
            backgroundImage: `url(${Department_Pic})`,
          }}
            className="text-white rounded-4xl flex flex-col justify-end p-6 bg-cover md:bg-center bg-no-repeat relative overflow-hidden md:my-16"
          >
            <div className="absolute bg-[#41A94E4D] w-full inset-0"></div>
            <div className="md:ml-8 z-10">
              <h2 className="font-extrabold text-4xl my-2 pt-10 text-center md:text-left md:my-4 md:pt-30 md:text-6xl">Department Overview</h2>
              <p className="font-semibold text-2xl text-center md:text-left md:text-3xl md:pb-8">Get To Know Our Department</p>
            </div>
          </header>
          <h2 className="text-black my-4 font-extrabold text-3xl text-center md:text-left md:text-5xl">History Of The Department</h2>
          <p className="my4 text-lg font-medium text-[#41A94E] md:text-xl">
            Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. <br /><br />
            Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.
          </p>
          <div className="my-12">
            <h3 className="text-black my-4 font-extrabold text-2xl text-center md:text-left md:text-4xl">Courses Under The Department</h3>
            <ul className="text-[#41A94E] list-disc text-lg md:text-xl font-medium">
              <li className="ml-4">Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. </li>
              <li className="ml-4">Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.</li>
              <li className="ml-4">Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.</li>
            </ul>
          </div>
        </section>
        <section
          className="bg-[#41A94E] relative my-16 py-8 lg:pb-58 lg:mb-98"
          style={{
            backgroundImage: `url(${Bg3_tl}), url(${Bg3br})`,
            backgroundPosition: "top left, bottom right",
            backgroundRepeat: "no-repeat no-repeat",
            backgroundSize: '7%, 15%'
          }}
        >
          <div className="rule text-white font-[Inter] text-center lg:text-left relative">
            <h2 className='font-extrabold text-3xl lg:text-5xl'>Our Vision & Our Mission</h2>
            <p className="font-medium text-lg opacity-75 my-4 lg:text-2xl lg:w-[75%] lg:opacity-100">Explore what we stand for and what drives to excellence as a department</p>
            <div className="lg:grid grid-cols-1 gap-24 lg:grid-cols-2 lg:absolute bottom-[-510px]">
              <div className="card">
                <div className="p-4 bg-white text-left h-full">
                  <h3 className="font-bold text-black text-lg lg:text-2xl">Our Vision</h3>
                  <p className="text-[#00000080] lg:text-lg">
                  Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.<br /><br /> Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
              <div className="card">
                <div className="p-4 bg-white text-left h-full">
                  <h3 className="font-bold text-black text-lg lg:text-2xl">Our Mission</h3>
                  <p className="text-[#00000080] lg:text-lg">
                    Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet.<br /><br /> A mi ultricies consectetur sit nulla lectus amet est. Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. Lorem ipsum dolor sit amet consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='community' className="rule font-[Inter] text-center">
          <h2 className="text-black font-extrabold text-3xl lg:text-5xl">What Our Community Are Saying</h2>
          <p className="text-[#00000080] my-3 font-medium lg:text-lg">Your academic and professional growth is our topmost priority!</p>
          <div className="my-12 shadow-lg p-4 rounded-3xl lg:flex lg:gap-18 lg:px-24 lg:py-12 relative bg-[#41A94EE5] z-90 lg:my-36">
            {/* Rotated BG */}
            <div className="absolute inset-0 bg-[#fff] w-full rotate-1 -z-1 rounded-3xl shadow-lg"></div>
            <img src={CommunityGuy} alt="Student" className='w-full lg:w-[25%]' />
            <div className="my-2 lg:w-[55%] lg:text-left">
              <h3 className="font-extrabold my-3 text-xl lg:text-3xl">Transformative Learning Experiences</h3>
              <p className="font-medium lg:text-lg lg:my-4">"This college department has redefined my academic journey. With structured programs and abundant resources, I feel empowered to excel. The collaborative community has fostered invaluable discussions and connections!"</p>
              <p className="font-medium my-4 lg:text-lg">- Shammah Goshit, <span className="font-bold">Student</span></p>
            </div>
          </div>
        </section>
        <section className="rule font-[Inter] border border-black p-6 my-16 rounded-4xl bg-white md:flex items-stretch md:my-28 md:p-8 md:gap-8">
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
        </section>
      </div>
      {isModalOpen && <AccountPopup/> }
      {isLoginModalOpen && <LoginWrap/> }
    </div>
  );
}
 
export default About;