import lapGuy from '../../assets/images/laptop-guy.png';
import Bg1_tl from '../../assets/images/green-bg1tl.png';
import Bg1br from '../../assets/images/green-bg1br.png';
import NewsPaper from '../../assets/images/newspaper-girl.png';
import Afro_Guy from '../../assets/images/afro-guy.png';
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
    </div>
  );
}
 
export default Home;