import SmilyGuy from "../../assets/images/about-us-guy.png";
import Department_Pic from "../../assets/images/department.png";
import Bg3br from '../../assets/images/bg3-br.png';
import Bg3_tl from '../../assets/images/bg3-tl.png';
import CommunityGuy from '../../assets/images/community-guy.png';
import map_Pointer from '../../assets/icons/location.svg';
import mail_icon from '../../assets/icons/email.svg';
import phone_icon from '../../assets/icons/call.svg';

const About = () => {
  return (
    <div className="relative font-[Inter]">
      <h1 className="absolute top-[-8rem] --z-10 left-[-3rem] md:text-[11.5rem] xl:text-[18rem] font-bold text-[#0000001A] opacity-100 select-none">
        About Us
      </h1>
      <section id="Hod's Profile" className="my-12">
        <div className="rule">
          <h1 className="font-bold text-[#41A94E] text-center text-4xl md:text-left md:text-6xl">
            About Us
          </h1>
          <div className="flex flex-col gap-y-8 my-6 md:flex-row md:my-10 justify-between md:items-center">
            <img
              src={SmilyGuy}
              alt=""
              className="w-full object-cover rounded-xl md:h-[470px] md:w-[40%]"
            />
            <div className="text-[#41A94E] md:w-[50%]">
              <h2 className="font-extrabold text-3xl mb-2 md:text-5xl md:mb-6">
                HOD's Profile
              </h2>
              <p className="font-medium text-lg md:text-2xl">
                Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa
                tristique pharetra egestas. Pharetra dictum dapibus ante
                dignissim aliquet. In nibh neque est amet. A mi ultricies
                consectetur sit nulla lectus amet est. <br />
                <br />
                Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa
                tristique pharetra egestas. Pharetra dictum dapibus ante
                dignissim aliquet. In nibh neque est amet. A mi ultricies
                consectetur sit nulla lectus amet est.
                <br /> <br />
                Lorem ipsum dolor sit amet consectetur. Tincidunt nibh massa
                tristique pharetra egestas. Pharetra dictum dapibus ante
                dignissim aliquet.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="department" className="rule">
        <header
          style={{
            backgroundImage: `url(${Department_Pic})`
          }}
          className="text-white rounded-4xl flex flex-col justify-end p-6 bg-cover md:bg-center bg-no-repeat relative overflow-hidden md:my-16"
        >
          <div className="absolute bg-[#41A94E4D] w-full inset-0"></div>
          <div className="md:ml-8 z-10">
            <h2 className="font-extrabold text-4xl my-2 pt-10 text-center md:text-left md:my-4 md:pt-30 md:text-6xl">
              Department Overview
            </h2>
            <p className="font-semibold text-2xl text-center md:text-left md:text-3xl md:pb-8">
              Get To Know Our Department
            </p>
          </div>
        </header>
        <h2 className="text-black my-4 font-extrabold text-3xl text-center md:text-left md:text-5xl">
          History Of The Department
        </h2>
        <p className="my4 text-lg font-medium text-[#41A94E] md:text-xl">
          The Department of History and International Studies at the University
          of Jos traces its origins to the early 1970s when the university
          itself was in its formative years. In 1972, the University of Jos was
          established as a satellite campus of the University of Ibadan, one of
          Nigeria's premier institutions of higher learning. As part of this
          arrangement, the academic programs of the Department of History and
          International Studies were initially regulated by the University of
          Ibadan, ensuring that the curriculum, faculty, and research output met
          the rigorous standards of its parent institution. In 1976, the
          University of Jos was granted full university status, marking a
          significant turning point in its academic and administrative autonomy.
          With this development, the Department of History and International
          Studies began to chart its own course, expanding its academic
          offerings and strengthening its faculty base. The department, which
          started with only a handful of lecturers and students, gradually grew
          in both size and stature, attracting scholars and students from across
          the country and beyond. Over the years, the department has become a
          hub for historical scholarship, fostering intellectual inquiry and
          critical analysis of historical events and trends. The Department has
          experienced steady growth in enrollment, research output, and faculty
          expertise. From its modest beginnings, it has now expanded to
          accommodate over four hundred and fifty students pursuing various
          academic programs. The department offers undergraduate and
          postgraduate degrees, including Master’s and Doctor of Philosophy
          (Ph.D.) programs, which have contributed to the body of knowledge in
          historical research and interpretation. Through its research
          initiatives, the department has provided valuable insights into
          Nigerian and African history, helping to shape discourse on
          colonialism, nationalism, governance, and socio-economic
          transformations. In 2005, the department underwent a significant
          transition when it was accredited for a change in degree nomenclature
          from B.A. History to B.A. History and International Studies.
          This modification was aimed at aligning the department’s academic
          focus with contemporary global trends in historical studies. The
          change was approved by the Senate of the University of Jos and the
          National Universities Commission (NUC). The revised degree structure
          sought to integrate international studies with history, thereby
          broadening the scope of academic inquiry and preparing students for
          careers in diplomacy, international relations, research, and academia.
          This change ensured that graduates of the department would be equipped
          with a more versatile knowledge base, making them competitive in an
          increasingly interconnected world. Further academic revisions followed
          in 2014 when the University Senate approved a new curriculum for the
          department. The department, recognizing the need to remain relevant in
          a rapidly evolving academic landscape, submitted a revised curriculum
          that incorporated emerging areas of study. This update introduced new
          courses and thematic areas that reflected contemporary research
          interests and global developments in the field of history. These
          curriculum revisions were designed to provide students with a more
          robust and multidisciplinary approach to historical inquiry,
          incorporating perspectives from political science, economics,
          anthropology, and cultural studies. A major structural change took
          place in the same year when the Department of History and
          International Studies underwent a reorganization that led to the
          excision of Archaeology. Previously housed within the Department of
          History and International Studies, Archaeology was separated to form
          an independent department, now known as the Department of Archaeology
          and Heritage Studies. This move was necessitated by the growing
          recognition of archaeology as a distinct discipline with specialized
          methodologies, research techniques, and academic objectives. The
          establishment of the Department of Archaeology and Heritage Studies
          allowed for greater specialization in both history and archaeology,
          enabling scholars and students to delve deeper into their respective
          fields. Since its inception, the Department of History and
          International Studies has remained committed to academic excellence,
          producing graduates who have gone on to excel in various fields,
          including academia, public administration, diplomacy, media, and
          international organizations. Faculty members continue to engage in
          groundbreaking research, publishing extensively in both local and
          international academic journals. The department also maintains strong
          partnerships with research institutions, universities, and
          professional associations both within Nigeria and abroad, facilitating
          intellectual exchange and collaboration. In keeping with its mission
          to advance the study of history and international relations, the
          department regularly organizes conferences, seminars, and workshops
          that bring together scholars, policymakers, and students to discuss
          pressing historical and contemporary issues. These events provide a
          platform for knowledge dissemination, scholarly debate, and the
          advancement of historical research. Looking ahead, the Department of
          History and International Studies at the University of Jos remains
          committed to further growth and innovation. With plans to introduce
          new research centers, expand its postgraduate programs, and strengthen
          its digital and archival resources, the department is poised to
          continue its legacy of academic excellence. As the world evolves, the
          department seeks to equip its students with the analytical skills and
          historical perspective necessary to navigate and contribute
          meaningfully to global conversations. With a rich history behind it
          and a promising future ahead, the Department of History and
          International Studies at the University of Jos remains a pillar of
          intellectual pursuit and historical inquiry.
        </p>
        <div className="my-12">
          <h3 className="text-black my-4 font-extrabold text-2xl text-center md:text-left md:text-4xl">
            Courses Under The Department
          </h3>
          <p className="text-gray-700 text-lg md:text-xl mb-4">
            The Department of History and International Studies offers a diverse
            range of courses that explore historical events, global affairs, and
            political dynamics. These courses provide students with critical
            thinking skills and a deep understanding of past and contemporary
            issues.
          </p>
          <ul className="text-[#41A94E] list-disc text-lg md:text-xl font-medium">
            <li className="ml-4">
              African History – Examines pre-colonial, colonial, and
              post-colonial African societies, cultures, and political
              transformations.
            </li>
            <li className="ml-4">
              International Relations and Diplomacy – Focuses on the
              principles of diplomacy, foreign policy analysis, and
              international cooperation.
            </li>
            <li className="ml-4">
              Historiography and Historical Methods – Introduces students to
              historical research methodologies and critical analysis of
              historical sources.
            </li>
            <li className="ml-4">
              Nigerian History – Covers the historical development of
              Nigeria from ancient civilizations to contemporary political and
              social dynamics.
            </li>
            <li className="ml-4">
              Global Conflicts and Resolutions – Analyzes major global
              conflicts, their causes, impacts, and strategies for resolution.
            </li>
          </ul>
        </div>
      </section>
      <section
        id="vision"
        className="bg-[#41A94E] relative my-16 py-8 lg:pb-58 lg:mb-98"
        style={{
          backgroundImage: `url(${Bg3_tl}), url(${Bg3br})`,
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: "7%, 15%"
        }}
      >
        <div className="rule text-white font-[Inter] text-center lg:text-left relative">
          <h2 className="font-extrabold text-3xl lg:text-5xl">
            Our Vision & Our Mission
          </h2>
          <p className="font-medium text-lg opacity-75 my-4 lg:text-2xl lg:w-[75%] lg:opacity-100">
            Explore what we stand for and what drives us to excellence as a
            department.
          </p>
          <div className="lg:grid grid-cols-1 gap-24 lg:grid-cols-2 lg:absolute bottom-[-510px]">
            <div className="card">
              <div className="p-4 bg-white text-left h-full">
                <h3 className="font-bold text-black text-lg lg:text-2xl">
                  Our Vision
                </h3>
                <p className="text-[#00000080] lg:text-lg">
                  To be a leading center of excellence in historical research
                  and international studies, fostering a deep understanding of
                  global affairs, historical transformations, and cultural
                  heritage. We strive to produce graduates who are equipped with
                  analytical and problem-solving skills, capable of contributing
                  meaningfully to society through informed leadership, critical
                  inquiry, and a commitment to academic excellence.
                  <br />
                  <br />
                  Our vision is to cultivate a learning environment that bridges
                  the past with the present, enabling students to engage with
                  historical and international perspectives that shape the world
                  today.
                </p>
              </div>
            </div>
            <div className="card">
              <div className="p-4 bg-white text-left h-full">
                <h3 className="font-bold text-black text-lg lg:text-2xl">
                  Our Mission
                </h3>
                <p className="text-[#00000080] lg:text-lg">
                  The Department of History and International Studies is
                  dedicated to promoting academic excellence through research,
                  teaching, and critical engagement with historical and
                  contemporary global issues. Our mission is to:
                  <br />
                  <br />
                  - Provide a well-rounded education that emphasizes critical
                  thinking, historical analysis, and diplomatic studies.
                  <br />
                  - Foster an environment where students develop an appreciation
                  for cultural diversity and historical narratives that shape
                  societies.
                  <br />
                  - Conduct cutting-edge research in history and international
                  relations, contributing to national and global discourse.
                  <br />
                  - Prepare graduates for careers in academia, diplomacy, public
                  service, and international organizations by equipping them
                  with analytical and leadership skills.
                  <br />
                  <br />
                  Through innovation, collaboration, and rigorous scholarship,
                  we aim to uphold the highest academic standards and contribute
                  to knowledge that informs policy and society.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="community" className="rule font-[Inter] text-center">
        <h2 className="text-black font-extrabold text-3xl lg:text-5xl">
          What Our Community Are Saying
        </h2>
        <p className="text-[#00000080] my-3 font-medium lg:text-lg">
          Your academic and professional growth is our topmost priority!
        </p>
        <div className="my-12 shadow-lg p-4 rounded-3xl md:flex md:gap-12 md:px-8 md:py-6 md:my-24 lg:gap-18 lg:px-24 lg:py-12 relative bg-[#41A94EE5] z-90 lg:my-36">
          {/* Rotated BG */}
          <div className="absolute inset-0 bg-[#fff] w-full rotate-1 -z-1 rounded-3xl shadow-lg"></div>
          <img
            src={CommunityGuy}
            alt="Student"
            className="w-full sm:h-[300px] object-contain lg:w-[25%]"
          />
          <div className="my-2 lg:w-[55%] lg:text-left">
            <h3 className="font-extrabold my-3 text-xl lg:text-3xl">
              Transformative Learning Experiences
            </h3>
            <p className="font-medium lg:text-lg lg:my-4">
              "This college department has redefined my academic journey. With
              structured programs and abundant resources, I feel empowered to
              excel. The collaborative community has fostered invaluable
              discussions and connections!"
            </p>
            <p className="font-medium my-4 lg:text-lg">
              - Shammah Goshit, <span className="font-bold">Student</span>
            </p>
          </div>
        </div>
      </section>
      {/* <section className="rule font-[Inter] border border-black p-6 my-16 rounded-4xl bg-white md:flex items-stretch md:my-28 md:p-8 md:gap-8">
        <div className="bg-[#41A94E] text-white p-5 rounded-2xl mb-4 md:w-[40%]">
          <p className="uppercase font-semibold text-lg md:text-xl">
            Connect with us
          </p>
          <h2 className="font-bold my-2 text-xl md:text-2xl lg:text-4xl">
            Experience the Full Potential of Our College Department
          </h2>
          <div className="my-6 w-full flex flex-col gap-2 md:gap-3">
            <div className="flex items-center gap-3">
              <img
                src={map_Pointer}
                alt="Location"
                className="w-[35px] md:w-11"
              />
              <div className="">
                <p className="font-bold md:text-lg lg:text-xl">Our Office</p>
                <p className="text-xs md:text-sm lg:text-base">
                  Jos, Plateau State
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={mail_icon} alt="email" className="w-[35px] md:w-11" />
              <div className="">
                <p className="font-bold md:text-lg lg:text-xl">
                  Contact Us Via Email
                </p>
                <p className="text-xs md:text-sm lg:text-base">
                  Tosinolacollege@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <img src={phone_icon} alt="Phone" className="w-[35px] md:w-11" />
              <div className="">
                <p className="font-bold md:text-lg lg:text-xl">Call Us</p>
                <p className="text-xs md:text-sm lg:text-base">+123-456-7890</p>
              </div>
            </div>
          </div>
        </div>
        <form
          action=""
          className="grid grid-cols-2 gap-6 mt-8 md:m-0 lg:gap-8 lg:w-[50%]"
        >
          <div className="flex flex-col">
            <label htmlFor="firstname" className="contact_label">
              First Name
            </label>
            <input type="text" id="firstname" className="contact_input_field" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="last-name" className="contact_label">
              Last Name
            </label>
            <input type="text" id="last-name" className="contact_input_field" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="mat-num" className="contact_label">
              Matric No
            </label>
            <input type="text" id="mat-num" className="contact_input_field" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="contact_label">
              School Email
            </label>
            <input type="email" id="email" className="contact_input_field" />
          </div>
          <div className="flex flex-col col-span-2">
            <label htmlFor="message" className="contact_label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="contact_input_field"
              cols="30"
              rows="6"
            ></textarea>
          </div>
          <button className="border-3 border-[#41A94E] rounded-4xl py-2 text-[#41A94E] font-semibold text-lg w-1/2 place-self-center col-span-2 cursor-pointer md:text-2xl">
            Contact Us
          </button>
        </form>
      </section> */}
    </div>
  );
}
 
export default About;