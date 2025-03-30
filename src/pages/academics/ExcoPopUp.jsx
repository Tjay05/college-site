import { useParams } from "react-router-dom";
import { Excos } from "./Index";

const ExcoModal = () => {
  const { id } =useParams();
  const exco = Object.values(Excos).find((e) => e.id === parseInt(id));

  return (
  <div className="relative font-[Inter]">
    <div className="rule my-8">
      <div className="my-8">
        <img src={exco.pic} alt={exco.name} className="object-cover rounded-3xl w-full h-80" />
        <div className="mt-6">
          <h2 className="font-bold text-[#41A94E] font-[Outfit] text-2xl text-center uppercase">{ exco.name }</h2>
          <h3 className="font-semibold text-lg mt-4 underline">About Me</h3>
          <p className="">{ exco.bio }</p>
        </div>
      </div>
      <article className="my-4">
        <h3 className="font-semibold text-lg underline">Key Achievements</h3>
        <ul className="list-disc">
          {exco.key_achievements.map((achievemnet, i) => (
            <li className="ml-4 my-1" key={i}>{ achievemnet }</li>
          ))}
        </ul>
      </article>
      <article className="my-4">
        <h3 className="font-semibold text-lg underline">Vision & Goals</h3>
        <p className="">{ exco.vision }</p>
      </article>
      <article className="my-4">
        <h3 className="font-semibold text-lg underline">Contact</h3>
        <p className="">{ exco.contact }</p>
      </article>
    </div>
  </div>
  );
}
 
export default ExcoModal;