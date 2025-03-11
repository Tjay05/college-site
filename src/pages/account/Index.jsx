import Active_Stud_Icon from "../../assets/icons/active-student.svg";
import Inactive_Lecturer_Icon from "../../assets/icons/inactive-teacher.svg";
import Active_Lecturer_Icon from "../../assets/icons/active-teacher.svg";
import Inactive_Student_Icon from "../../assets/icons/inactive-student.svg";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { ModalContext } from "../../App";
import { useState } from "react";
import Stud_Signup from "./Student_Signup";
import Lecturer_Signup from "./Lecturer_SignUp";

const AccountPopup = () => {
  const { setIsModalOpen, isModalOpen, setIsLoginModalOpen } = useContext(ModalContext);
  const [formType, setFormType] = useState('student');

  return (
    <div className="absolute top-0 inset-0 backdrop-blur-2xl z-99">
      <div className="bg-white p-6 rounded-lg mx-auto w-[90%] md:w-[75%] flex flex-col mt-12 md:mt-18">
        <IoMdClose onClick={() => setIsModalOpen(!isModalOpen)} size={30} className='self-end cursor-pointer'/>
        <div className="m-2 font-[Inter]">
          <h2 className="text-[#41A94E] text-center font-bold text-xl md:text-4xl">Sign up to get started</h2>
          <div className="border p-2 rounded-lg flex justify-between my-6 font-bold text-base md:my-10">
            <div onClick={() => setFormType('student')} className={`role_button ${formType === 'student' ? 'bg-[#41A94E]' : 'bg-white'}`}>
              <img src={`${formType === 'student' ? Active_Stud_Icon : Inactive_Student_Icon}`} alt="" className="w-6 lg:w-8" />
              <p className={`${formType === 'student' ? 'text-white' : 'text-[#41A94E]'}`}>Student</p>
            </div>
            <div onClick={() => setFormType('lecturer')} className={`role_button ${formType === 'lecturer' ? 'bg-[#41A94E]' : 'bg-white'}`}>
              <img src={`${formType === 'lecturer' ? Active_Lecturer_Icon : Inactive_Lecturer_Icon}`} alt="" className="w-6 lg:w-8" />
              <p className={`${formType === 'lecturer' ? 'text-white' : 'text-[#41A94E]'}`}>Lecturer</p>
            </div>
          </div>
          { formType === 'student' && <Stud_Signup/>}
          { formType === 'lecturer' && <Lecturer_Signup/>}
          <p className="text-center text-[#41A94E] font-bold text-sm my-4 col-span-2 lg:text-base">Already have an account? <span onClick={
            () => {
              setIsModalOpen(!isModalOpen);
              setIsLoginModalOpen(true);
            }
            } className="underline font-normal cursor-pointer">Login</span></p>

        </div>
      </div>
    </div>
  );
}
 
export default AccountPopup;