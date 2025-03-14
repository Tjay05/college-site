import News_Pic from '../../assets/images/news.png';
import Vc_Pic from '../../assets/images/vc.png';
import Bg3br from '../../assets/images/bg3-br.png';
import Bg3_tl from '../../assets/images/bg3-tl.png';
import confetti from '../../assets/images/confetti.png';

const Community = () => {
  return (
    <div className="relative font-[Inter]">
      <h1 className="absolute top-[-11rem] z-10 left-[-3rem] md:text-[11.5rem] xl:text-[16rem] font-bold text-[#0000001A] opacity-100 select-none w-full">Community</h1>
      <section className="section_spacer">
        <div className="rule my-6 flex flex-col">
          <header style={{
            backgroundImage: `url(${News_Pic})`,
          }}
            className="text-white rounded-4xl flex flex-col justify-end p-6 bg-cover md:bg-center bg-no-repeat relative overflow-hidden md:my-16"
          >
            <div className="absolute bg-[#41A94E4D] w-full inset-0"></div>
            <div className="md:ml-8 z-10">
              <h2 className="font-extrabold text-4xl my-2 pt-10 text-center md:text-left md:my-4 md:text-7xl">Latest News</h2>
              <div className="flex flex-col items-center text-center gap-4 md:pb-8 md:flex-row justify-between">
                <p className="font-semibold text-2xl text-center md:text-left md:text-5xl md:w-[55%]">The Conventional Nuga Games have been Exposed</p>
                <button className="bg-white px-2 py-1 rounded-lg font-semibold text-black md:mr-32 md:px-3 md:py-2 md:text-2xl place-self-center">Read More</button>
              </div>
            </div>
          </header>
          <div className="bg-[#41A94E] flex items-center justify-evenly rounded-full py-2 px-4 gap-5 place-self-center my-4">
            <span className="font-medium rounded-full bg-white text-[#41A94E] p-1 cursor-pointer"> </span>
            <span className="font-medium border border-white p-1 rounded-full cursor-pointer text-white"> </span>
            <span className="font-medium border border-white p-1 rounded-full cursor-pointer text-white"></span>
            <span className="font-medium border border-white p-1 rounded-full cursor-pointer text-white"></span>
          </div>
        </div>
      </section>
      <section className="rule section_spacer">
        <img src={Vc_Pic} alt="Uj Vc" className="w-full object-cover md:h-[530px]" />
        <article className='my-4'>
          <h2 className="font-bold text-black text-xl md:text-5xl md:mt-8">UNIJOS VC signs in new law for Post Graduate students</h2>
          <span className="font-medium md:text-xl">January 17th, 2025</span>
          <p className="font-medium my-4 text-sm md:text-xl">
            Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est. Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa tristique pharetra egestas. Pharetra dictum dapibus ante dignissim aliquet. In nibh neque est amet. A mi ultricies consectetur sit nulla lectus amet est.
          </p>
        </article>
      </section>
      <section className="rule section_spacer">
        <h2 className="font-bold text-[#41A94E] text-3xl md:text-5xl">News</h2>
        <div className="font-medium">
          <p className="border-b py-2 md:py-4 md:text-2xl">Lorem ipsum dolor sit amet consectetur. Tinubu nibh massa timbuktu pharetra egestas.</p>
          <p className="border-b py-2 md:py-4 md:text-2xl">Lorem ipsum dolor sit amet consectetur. Tinubu nibh massa timbuktu pharetra egestas.</p>
        </div>
      </section>
      <section
        className="bg-[#41A94E] relative section_spacer py-8"
        style={{
          backgroundImage: `url(${Bg3_tl}), url(${Bg3br})`,
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: '7%, 15%'
        }}
      >
        <div className="rule text-white font-[Inter] text-center lg:text-left relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className='font-extrabold text-3xl lg:text-8xl lg:w-[45%]'>Events & Calenders</h2>
            <div style={{ backgroundImage: `url(${confetti})` }} className="bg-white p-4 rounded-3xl my-6 text-center bg-cover md:bg-center bg-no-repeat relative overflow-hidden md:p-12">
              <p className="text-[#41A94EE5] font-bold text-2xl md:text-6xl my-1 lg:my-2">Matriculation</p>
              <p className="font-semibold text-black text-lg md:text-2xl">12th March, Wednesday</p>
              <span className="text-black md:text-xl">10:00 AM</span>
            </div>
          </div>
          <p className="bg-white place-self-center text-black p-2 rounded-xl text-sm md:text-3xl md:px-4 my-4 shadow-2xl"><span className="font-extrabold">Next Up</span> V.C Cup on 16th July starting on monday</p>
        </div>
      </section>
      <section className="section_spacer rule">
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
 
export default Community;