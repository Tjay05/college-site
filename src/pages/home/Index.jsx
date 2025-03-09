import lapGuy from '../../assets/images/laptop-guy.png';
import Bg1_tl from '../../assets/images/green-bg1tl.png';
import Bg1br from '../../assets/images/green-bg1br.png';

const Home = () => {
  return (
    <div className="relative">
      <header 
        className={`bg-[#41A94EE5] relative w-full py-4 lg:py-8`}
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
            <h1 className="font-extrabold text-3xl lg:text-6xl">Enhance Your Academic Journey</h1>
            <p className="text-[#333333] text-3xl font-extrabold lg:text-6xl">Unlock Your Potential</p>
            <p className="text-3xl font-extrabold lg:text-6xl">Join Our Vibrant Community</p>
            <p className="font-semibold my-2 lg:text-xl lg:w-3/4 lg:my-5">Experience excellence and innovation with a department dedicated to enriching your academic journey.</p>
            <button className="bg-[#333333] rounded-4xl self-center px-5 text-lg font-semibold my-4 py-3 lg:self-baseline lg:text-xl">Connect With Us</button>
          </div>
        </div>
      </header>
    </div>
  );
}
 
export default Home;