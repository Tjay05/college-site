import CourseMaterials from '../../assets/images/past-questions.png';
import Caleb from '../../assets/images/exco.png';
import File_Icon from '../../assets/icons/file_icon.svg';
import Bg3br from '../../assets/images/bg3-br.png';
import Bg3_tl from '../../assets/images/bg3-tl.png';

const Academics = () => {
  return (
    <div className="relative font-[Inter]">
      <section className="my-4">
        <div className="rule my-6">
          <header style={{
            backgroundImage: `url(${CourseMaterials})`,
          }}
            className="text-white rounded-4xl flex flex-col justify-end p-6 bg-cover md:bg-center bg-no-repeat relative overflow-hidden md:my-16"
          >
            <div className="absolute bg-[#41A94E4D] w-full inset-0"></div>
            <div className="md:ml-8 z-10">
              <h2 className="font-extrabold text-4xl my-2 pt-10 text-center md:text-left md:my-4 md:pt-30 md:text-6xl">Course Materials & Past Questions </h2>
              <p className="font-semibold text-2xl text-center md:text-left md:text-3xl md:pb-8">Access to all courses</p>
            </div>
          </header>
          <aside className="flex items-center my-6 overflow-auto w-full gap-x-2 md:justify-between lg:w-3/4 lg:mx-auto">
            <p className="level_selector text-[#41A94E]"><span>100</span> level</p>
            <p className="level_selector text-[#41A94E]"><span>200</span> level</p>
            <p className="level_selector text-[#41A94E]"><span>300</span> level</p>
            <p className="level_selector text-[#41A94E]"><span>400</span> level</p>
            <p className="level_selector bg-[#41A94E] text-white"><span>PG</span> Materials</p>
          </aside>
          <div className="flex flex-col my-4 w-full">
            <article className="flex flex-col items-stretch gap-y-3 my-4 md:gap-y-4">
              <div className="flex gap-2 items-center bg-[#41A94E14] rounded-2xl border border-[#00000080] p-1 md:p-3 md:gap-6">
                <img src={File_Icon} alt="File Icon" className="w-10 md:w-24" />
                <div className="flex flex-col gap-1 md:gap-2">
                  <p className="font-semibold text-[#41A94E] text-sm md:text-4xl">COR 103 - Course Introduction first year</p>
                  <button className="bg-black rounded-4xl text-white p-1 font-medium text-sm md:text-3xl">Download Now</button>
                </div>
              </div>
              <button className="bg-[#41A94E] text-white rounded-4xl p-2 font-medium text-sm md:text-3xl">Download COR 103 Past Questions</button>
            </article>
            <article className="flex flex-col items-stretch gap-y-3 my-4 md:gap-y-4">
              <div className="flex gap-2 items-center bg-[#41A94E14] rounded-2xl border border-[#00000080] p-1 md:p-3 md:gap-6">
                <img src={File_Icon} alt="File Icon" className="w-10 md:w-24" />
                <div className="flex flex-col gap-1 md:gap-2">
                  <p className="font-semibold text-[#41A94E] text-sm md:text-4xl">GST 104 - Course Introduction first year</p>
                  <button className="bg-black rounded-4xl text-white p-1 font-medium text-sm md:text-3xl">Download Now</button>
                </div>
              </div>
              <button className="bg-[#41A94E] text-white rounded-4xl p-2 font-medium text-sm md:text-3xl">Download GST 104 Past Questions</button>
            </article>
            <div className="bg-[#41A94E] flex items-center justify-evenly rounded-full py-1 px-2 gap-1 place-self-center my-4">
              <span className="font-medium rounded-full bg-white text-[#41A94E] py-1 px-3 cursor-pointer">1</span>
              <span className="font-medium border border-white py-1 px-3 rounded-full cursor-pointer text-white">2</span>
              <span className="font-medium border border-white py-1 px-3 rounded-full cursor-pointer text-white">3</span>
              <span className="font-medium border border-white py-1 px-3 rounded-full cursor-pointer text-white">4</span>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-[#41A94E] relative my-16 py-8 lg:pb-58 lg:mb-70"
        style={{
          backgroundImage: `url(${Bg3_tl}), url(${Bg3br})`,
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: '7%, 15%'
        }}
      >
        <div className="rule text-white font-[Inter] text-center lg:text-left relative">
          <h2 className='font-extrabold text-3xl lg:text-5xl'>Our Excos & Our Lecturers</h2>
          <p className="font-medium text-lg opacity-75 my-4 lg:text-2xl lg:w-[75%] lg:opacity-100">Meet our excos and lecturers</p>
          <div className="grid grid-cols-2 gap-x-12 md:grid-cols-3 lg:grid-cols-4 lg:absolute w-full">
            <div className="card">
              <img src={Caleb} alt="Exco" className="object-cover w-full md:h-48" />
              <div className="p-4 bg-[#41A94E] text-center h-full">
                <h3 className="font-bold text-black text-lg lg:text-2xl">Caleb Kim</h3>
                <p className="text-black text-xs lg:text-base">Dept. President</p>
              </div>
            </div>
            <div className="card">
              <img src={Caleb} alt="Exco" className="object-cover w-full md:h-48" />
              <div className="p-4 bg-[#41A94E] text-center h-full">
                <h3 className="font-bold text-black text-lg lg:text-2xl">Caleb Kim</h3>
                <p className="text-black text-xs lg:text-base">Dept. President</p>
              </div>
            </div>
            <div className="card">
              <img src={Caleb} alt="Exco" className="object-cover w-full md:h-48" />
              <div className="p-4 bg-[#41A94E] text-center h-full">
                <h3 className="font-bold text-black text-lg lg:text-2xl">Caleb Kim</h3>
                <p className="text-black text-xs lg:text-base">Dept. President</p>
              </div>
            </div>
            <div className="card">
              <img src={Caleb} alt="Exco" className="object-cover w-full md:h-48" />
              <div className="p-4 bg-[#41A94E] text-center h-full">
                <h3 className="font-bold text-black text-lg lg:text-2xl">Caleb Kim</h3>
                <p className="text-black text-xs lg:text-base">Dept. President</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default Academics;