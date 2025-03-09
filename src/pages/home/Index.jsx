import lapGuy from '../../assets/images/laptop-guy.png';
import Bg1_tl from '../../assets/images/green-bg1tl.png';
import Bg1br from '../../assets/images/green-bg1br.png';
import Bg2_tl from '../../assets/images/bg2-tl.png';
import Bg2br from '../../assets/images/bg2-br.png';
import NewsPaper from '../../assets/images/newspaper-girl.png';
import Afro_Guy from '../../assets/images/afro-guy.png';
import ResourceGroup from '../../assets/images/resources-group.png';
import Curriculum from '../../assets/icons/structured-curriculum.svg';
import Faculty from '../../assets/icons/dedicated-support.svg';
import Community from '../../assets/icons/engaging-community.svg';
import Resources from '../../assets/icons/comprehensive-resources.svg';
import Updated from '../../assets/icons/stay-updated.svg';
import Experience from '../../assets/icons/transformative-experience.svg';

const Home = () => {
  return (
    <div className="relative">
      <header 
        className={`bg-[#41A94EE5] relative w-full py-4 lg:py-16`}
        style={{ 
          backgroundImage: `url(${Bg1_tl}), url(${Bg1br})`,
          backgroundPosition: "0% 5%, 100% 100%",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: '100px, 200px'
        }}
      >
        <div className="rule lg:flex flex-row-reverse justify-between items-center">
          <img className='w-full lg:w-[40%]' src={lapGuy} alt="" />
          <div className="flex flex-col font-[Inter] text-white text-center my-4 lg:w-[55%] lg:text-left">
            <h1 className="heading">Enhance Your Academic Journey</h1>
            <p className="text-[#333333] heading">Unlock Your Potential</p>
            <p className="heading">Join Our Vibrant Community</p>
            <p className="font-semibold my-2 lg:text-xl lg:w-3/4 lg:my-5">Experience excellence and innovation with a department dedicated to enriching your academic journey.</p>
            <button className="bg-[#333333] rounded-4xl self-center px-5 text-lg font-semibold my-4 py-3 cursor-pointer lg:self-baseline lg:text-xl">Connect With Us</button>
          </div>
        </div>
      </header>
      <section className="rule my-4 font-[Inter] lg:my-8">
        <h2 className="text-black font-extrabold text-center text-2xl mt-8 lg:mt-12 lg:text-5xl lg:w-[85%] mx-auto">Elevate Your Academic Journey with Our Department</h2>
        <p className="text-[#00000080] text-center font-medium my-2 lg:text-xl">Access a wealth of resources and support</p>
        <div className="my-12 lg:flex justify-between lg:my-20">
          <img src={NewsPaper} className='rounded-2xl w-full object-cover lg:w-[35%]' alt="" />
          <div className="grid grid-cols-2 gap-6 my-4 lg:grid-cols-3 lg:w-[60%]">
            <div className="grid_items">
              <img src={Curriculum} alt="Structured Curriculum" className="" />
              <h3 className="grid_heading">Structured Curriculum</h3>
              <p className="grid_texts">Benefit from a well-organized curriculum that enhances your learning experience.</p>
            </div>
            <div className="grid_items">
              <img src={Faculty} alt="Faculty Support" className="" />
              <h3 className="grid_heading">Dedicated Faculty Support</h3>
              <p className="grid_texts">Access guidance from experienced faculty who are committed to your academic success.</p>
            </div>
            <div className="grid_items">
              <img src={Community} alt="Engaging Community" className="" />
              <h3 className="grid_heading">Engaging Community</h3>
              <p className="grid_texts">Join a vibrant community that fosters discussions, networking, and collaboration among peers.</p>
            </div>
            <div className="grid_items">
              <img src={Resources} alt="Comprehensive Resources" className="" />
              <h3 className="grid_heading">Comprehensive Resources</h3>
              <p className="grid_texts">Easily navigate through course outlines, past exams, and curated reading lists to excel in your studies.</p>
            </div>
            <div className="grid_items">
              <img src={Updated} alt="Stay Updated" className="" />
              <h3 className="grid_heading">Stay Updated</h3>
              <p className="grid_texts">Follow department updates, exciting events, and student achievements to stay connected and informed.</p>
            </div>
            <div className="grid_items">
              <img src={Experience} alt="Experieence" className="" />
              <h3 className="grid_heading">Transformative Learning Experience</h3>
             <p className="grid_texts">Embark on an educational journey that empowers you to reach your fullest potential and aspirations..</p>
            </div>
          </div>
        </div>
      </section>
      <section 
        className="bg-[#41A94E] rule p-5 relative rounded-4xl my-12 lg:mt-48 lg:py-10 lg:px-18 lg:flex items-center justify-start"
        style={{ 
          backgroundImage: `url(${Bg2_tl}), url(${Bg2br})`,
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: '17%, 17%'
        }}
      >
        <div className="text-white font-[Inter] text-center z-10 lg:text-left lg:w-[45%]">
          <p className="text-sm font-medium mb-2 opacity-80 md:text-lg lg:text-xl lg:mb-4">Maximize your academic potential with us</p>
          <h2 className="text-3xl font-extrabold my-2 md:text-4xl lg:text-5xl lg:my-4">Tailored programs for personal and  professional growth</h2>
          <p className="text-sm font-semibold opacity-80 md:text-lg  lg:text-xl">Engage with a community that prioritizes collaboration and knowledge-sharing</p>
          <button className="bg-[#333333] rounded-4xl self-center px-5 text-lg font-semibold my-4 py-3 cursor-pointer lg:mt-8 lg:text-xl">Begin your Journey with us</button>
        </div>
        <img src={Afro_Guy} alt="Afro Guy" className='hidden lg:block lg:absolute right-[-60px] w-[67%] bottom-0 h-auto object-cover' />
      </section>
      <section className="bg-[#41A94E] relative my-16 py-8 lg:pb-58 lg:mb-98">
        <div className="rule text-white font-[Inter] text-center lg:text-left relative">
          <p className="font-semibold text-lg opacity-75 lg:text-2xl lg:mb-4">Our Work</p>
          <h2 className='font-extrabold text-3xl lg:text-5xl'>Empowering Academic Excellence</h2>
          <p className="font-medium text-lg opacity-75 my-4 lg:text-2xl lg:w-[75%] lg:opacity-100">Explore exceptional resources dedicated to enhancing your academic journey within our college department.</p>
          <div className="lg:grid grid-cols-1 gap-24 lg:grid-cols-3 lg:absolute bottom-[-530px]">
            <div className="card">
              <img src={ResourceGroup} alt="Resources Group" className='card_pic' />
              <div className="p-4 bg-white text-left h-full">
                <h3 className="font-bold text-black text-lg lg:text-2xl">Comprehensive Academic Resources</h3>
                <p className="text-[#00000080] lg:text-lg">Access a wealth of curated materials designed for both lecturers and students.</p>
              </div>
            </div>
            <div className="card">
              <img src={ResourceGroup} alt="Resources Group" className='card_pic' />
              <div className="p-4 bg-white text-left h-full">
                <h3 className="font-bold text-black text-lg lg:text-2xl">Engaging Community Forums</h3>
                <p className="text-[#00000080] lg:text-lg">Share knowledge and collaborate with peers in discussion forums tailored for academic and career advancements</p>
              </div>
            </div>
            <div className="card">
              <img src={ResourceGroup} alt="Resources Group" className='card_pic' />
              <div className="p-4 bg-white text-left h-full">
                <h3 className="font-bold text-black text-lg lg:text-2xl">Dynamic Learning Environment</h3>
                <p className="text-[#00000080] lg:text-lg">Stay informed with real-time updates on department news and events that celebrate your achievements.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
export default Home;