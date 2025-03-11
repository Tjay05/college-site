import Stud_Icon from "../../assets/icons/active-student.svg";
import Lecturer_Icon from "../../assets/icons/inactive-teacher.svg";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { ModalContext } from "../../App";

const SignupPopup = () => {
  const { setIsModalOpen, isModalOpen } = useContext(ModalContext);

  return (
    <div className="absolute top-0 inset-0 backdrop-blur-2xl z-99">
      <div className="bg-white p-6 rounded-lg mx-auto w-[90%] md:w-[85%]">
      <IoMdCloseCircleOutline onClick={() => setIsModalOpen(!isModalOpen)} size={30} color='#41A94E' className='text-right cursor-pointer'/>
        <div className="m-2 font-[Inter]">
          <h2 className="text-[#41A94E] text-center font-bold text-xl">Sign up to get registered</h2>
          <div className="border p-2 rounded-lg flex justify-between my-6 font-bold">
            <div className="flex gap-1 items-center justify-center rounded-md bg-[#41A94E] text-base p-2">
              <img src={Stud_Icon} alt="" className="w-6" />
              <p className="text-white">Student</p>
            </div>
            <div className="flex gap-1 items-center justify-center rounded-md bg-white text-base p-2">
              <img src={Lecturer_Icon} alt="" className="w-6" />
              <p className="text-[#41A94E]">Lecturer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default SignupPopup;