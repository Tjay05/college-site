import { MdOutlineArrowBack, MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import prof_pic from "../../assets/images/prof.png";
import tinubu from "../../assets/images/tinubu.png";
import File_Icon from '../../assets/icons/dark_file.svg';

const Profile = () => {
  const blogs = [
    {
      id: 1,
      image: tinubu,
      title: 'UNIJOS VC signs in new law for Post Graduate students'
    },
    {
      id: 2,
      image:prof_pic,
      title: 'Dangers Of Drug Abuse'
    }
  ];

  const materials = [
    {
      id: 1,
      image: File_Icon,
      title: 'Student and lecturer project supervisee',
    },
    {
      id: 2,
      image: File_Icon,
      title: 'Student and lecturer project supervisee',
    },
    {
      id: 3,
      image: File_Icon,
      title: 'Student and lecturer project supervisee',
    },
    {
      id: 4,
      image: File_Icon,
      title: 'Student and lecturer project supervisee',
    },
    {
      id: 5,
      image: File_Icon,
      title: 'Student and lecturer project supervisee',
    },
  ];

  return (
    <div className="relative font-[Inter]">
      <header className="rule my-8 md:my-16 ">
        <div className="flex items-center gap-4 my-6">
          <MdOutlineArrowBack size={35} color='white' className='p-1 rounded-full bg-[#41A94E]' />
          <div className="bg-[#41A94E] flex items-center gap-2 p-1 px-2 md:gap-60 md:px-8">
            <p className="text-white font-medium text-sm md:text-3xl">You're Logged In As A Lecturer</p>
            <IoMdClose size={25} color='white' />
          </div>
        </div>
        <div className="md:flex gap-10">
          <img src={prof_pic} alt="prof" className="w-full object-cover rounded-3xl h-60 md:w-1/4" />
          <div className="flex flex-col text-black my-4">
            <p className="font-bold text-2xl md:text-6xl">Prof Seth Okana</p>
            <p className="text-lg mt-1 md:text-3xl">Seth.okanaa13@yahoo.com</p>
            <p className="text-lg md:text-3xl">+234 904 5678 901</p>
            <button className="bg-[#41A94E] rounded-4xl py-2 text-white my-2 text-lg font-medium cursor-pointer md:text-3xl md:my-4">Edit Profile</button>
          </div>
        </div>
      </header>
      <section className="rule section_spacer">
        <h2 className="font-bold text-center text-3xl my-2 md:text-6xl">Uploaded Content</h2>
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-16 lg:my-12 my-8">
          { materials.map((material) =>(
            <div className="bg-[#41A94E66] rounded-2xl flex flex-col overflow-hidden" key={material.id}>
              <img src={material.image} alt="File" className="w-20 place-self-center p-5 lg:w-28" />
              <div className="bg-black flex items-center justify-between p-3 lg:p-4">
                <p className="font-medium text-white text-xs lg:text-base">{ material.title }</p>
                <MdDelete color="red" size={50} className="cursor-pointer" />
              </div>
            </div>
          ))}
          <button className="col-span-2 md:col-span-3 lg:col-span-4 font-semibold bg-[#41A94E] rounded-3xl py-2 text-white text-lg cursor-pointer md:py-4 md:text-4xl">Upload Content</button>
        </div>
      </section>
      <section className="rule section_spacer">
        <h2 className="font-bold text-center text-3xl my-2 md:text-6xl">Uploaded Blog Content</h2>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-16 lg:my-12 my-8">
          { blogs.map((blog) => (
            <div className="bg-[#41A94E] rounded-2xl flex flex-col overflow-hidden" key={blog.id}>
              <img src={blog.image} alt="File" className="w-full h-40 mdh-60 object-cover" />
              <div className="bg-[#41A94E] flex items-center justify-between p-3 lg:p-4">
                <p className="font-medium text-white text-sm lg:text-lg">{ blog.title }</p>
                <MdDelete color="black" size={50} className="cursor-pointer" />
              </div>
            </div>
          ))} 
          <button className="col-span-1 md:col-span-2 lg:col-span-3 font-semibold bg-[#41A94E] rounded-3xl py-2 text-white text-lg cursor-pointer md:py-3 md:text-3xl">Write A Blog</button>
        </div>
      </section>
    </div>
  );
}
 
export default Profile;