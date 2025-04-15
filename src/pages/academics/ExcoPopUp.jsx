import { useParams } from "react-router-dom";
import { Excos } from "./Index";

const ExcoModal = () => {
  const { id } =useParams();
  const exco = Object.values(Excos).find((e) => e.id === parseInt(id));

  return (
    <div className="relative font-[Inter] mt-11">
      <div className="rule my-8 lg:my-16">
        <div className="my-8 md:flex md:gap-12 items-center md:my-12">
          <img
            src={exco.pic}
            alt={exco.name}
            className="object-cover rounded-3xl w-full h-95 lg:w-[50%]"
          />
          <div className="mt-6 md:m-0">
            <h2 className="font-bold text-[#41A94E] font-[Outfit] text-2xl text-center uppercase md:text-left lg:text-5xl">
              {exco.name}
            </h2>
            <h3 className="font-semibold text-lg mt-4 underline lg:text-2xl">
              About Me
            </h3>
            <p className="lg:text-lg">{exco.bio}</p>
          </div>
        </div>
        <article className="my-4 lg:my-8">
          <h3 className="font-semibold text-lg underline lg:text-2xl">
            Key Achievements
          </h3>
          <ul className="list-disc lg:text-lg">
            {exco.key_achievements.map((achievemnet, i) => (
              <li className="ml-4 my-1" key={i}>
                {achievemnet}
              </li>
            ))}
          </ul>
        </article>
        <article className="my-4 lg:my-8">
          <h3 className="font-semibold text-lg underline lg:text-2xl">
            Vision & Goals
          </h3>
          <p className="lg:text-lg">{exco.vision}</p>
        </article>
        <article className="my-4 lg:my-8">
          <h3 className="font-semibold text-lg underline lg:text-2xl">
            Contact
          </h3>
          <p className="lg:text-lg">{exco.contact}</p>
        </article>
      </div>
    </div>
  );
}
 
export default ExcoModal;