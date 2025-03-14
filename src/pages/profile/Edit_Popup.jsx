import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ModalContext } from "../../App";
import display_pic from '../../assets/icons/default_pic.svg';
import add_icon from '../../assets/icons/add.svg';
import Lecturer_Edit from "./Lecturer_Edit";
import Student_Edit from "./Student_Edit";

const EditPopup = () => {
  const { isEditModalOpen, setIsEditModalOpen } =useContext(ModalContext);

  return (
    <div className="absolute top-0 inset-0 backdrop-blur-2xl z-99">
      <div className="bg-white p-6 rounded-lg mx-auto w-[90%] md:w-[75%] flex flex-col mt-12 md:mt-18">
        <IoMdClose onClick={() => setIsEditModalOpen(!isEditModalOpen)} size={30} className='self-end cursor-pointer'/>
        <div className="m-2 font-[Inter]">
          <h2 className="text-[#41A94E] text-center font-bold text-xl md:text-4xl">Edit Profile</h2>
          <div className="w-full my-4 flex flex-col items-center justify-center">
            <div className="relative">
              <img src={display_pic} alt='Profile Pic' className="w-30" />
              <img src={add_icon} alt="Add" className="absolute w-8 bottom-0 right-0" />
            </div>
          </div>
          {/* <Student_Edit/> */}
          <Lecturer_Edit/>
        </div>
      </div>
    </div>
  );
}
 
export default EditPopup;