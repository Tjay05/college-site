import { useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { ModalContext } from "../../App";
import file_Icon from '../../assets/icons/dark_file.svg';

const Upload_Doc = () => {
  const { isUploadDocOpen, setIsUploadDocOpen } = useContext(ModalContext);

  return (
    <div className="fixed top-0 inset-0 backdrop-blur-2xl z-99">
      <div className="bg-white p-6 rounded-lg mx-auto w-[90%] md:w-[75%] flex flex-col mt-12 md:mt-18">
        <IoMdClose onClick={() => setIsUploadDocOpen(!isUploadDocOpen)} size={30} className='self-end cursor-pointer'/>
        <div className="m-2 font-[Inter]">
          <h2 className="text-[#41A94E] text-center font-bold text-xl md:text-4xl">Upload Document</h2>
          <label htmlFor="Add_File" className="flex flex-col bg-[#00000026] rounded-lg border items-center justify-center py-8 text-center my-6 cursor-pointer relative">
            <input type="file" className="hidden" name="" id="Add_File" />
            <img src={file_Icon} alt="File" className="w-12" />
            <p className="font-medium mt-2">Upload From Device</p>
            <p className="mb-2"><span className="font-bold">Click</span> to Upload Documents</p>
          </label>
          <select name="docuent_type" id="" className="w-full border rounded-lg p-2 font-[Inter] text-[#00000080]">
            <option value="null" className="border-b border-black w-full text-black  bg-[#41A94E80]">Document Type</option>
            <option value="Course Materials" className="border-b border-black w-full text-center text-black bg-[#41A94E80]">Course Materials</option>
            <option value="Past Questions" className="border-b border-black w-full text-center text-black bg-[#41A94E80]">Past Questions</option>
            <option value="Research Paper/Projects" className="border-b border-black w-full text-center text-black bg-[#41A94E80]">Research Paper/Projects</option>
          </select>
          <button className="w-full font-semibold text-white rounded-lg my-6 py-2 bg-[#41A94E]">Upload Document</button>
        </div>
      </div>
    </div>
  );
}
 
export default Upload_Doc;