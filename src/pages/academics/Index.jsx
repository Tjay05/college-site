import { useState } from "react";
import CourseMaterials from "../../assets/images/past-questions.png";
import Caleb from "../../assets/images/exco.png";
import Presido from '../../assets/images/president.jpg';
import Vice_Presido from '../../assets/images/vice.jpg';
import Sec_Gen from '../../assets/images/secetary.jpg';
import File_Icon from '../../assets/icons/file_icon.svg';
import Bg3br from '../../assets/images/bg3-br.png';
import Bg3_tl from '../../assets/images/bg3-tl.png';

const Academics = () => {
  const [activeLevel, setActiveLevel] = useState("PG");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 2;

  const levels = ["100", "200", "300", "400", "PG"];

  // This would typically come from an API or props
  const courseData = {
    100: [
      { code: "COR 101", title: "Course Introduction first year" },
      { code: "GST 101", title: "Course Introduction first year" },
      { code: "MTH 101", title: "Elementary Mathematics I" },
      { code: "PHY 101", title: "General Physics I" },
      { code: "CHM 101", title: "General Chemistry I" },
      { code: "BIO 101", title: "General Biology I" }
    ],
    200: [
      { code: "COR 201", title: "Second year introduction" },
      { code: "GST 202", title: "Use of English" },
      { code: "MTH 201", title: "Mathematical Methods" },
      { code: "PHY 201", title: "Modern Physics" }
    ],
    300: [
      { code: "COR 301", title: "Third year introduction" },
      { code: "GST 301", title: "Entrepreneurship" },
      { code: "COR 302", title: "Research Methodology" },
      { code: "COR 303", title: "Technical Writing" }
    ],
    400: [
      { code: "COR 401", title: "Final year project" },
      { code: "GST 401", title: "Final year seminar" },
      { code: "COR 402", title: "Project Defense" },
      { code: "COR 403", title: "Industrial Training" }
    ],
    PG: [
      { code: "COR 103", title: "Course Introduction first year" },
      { code: "GST 104", title: "Course Introduction first year" },
      { code: "PG 101", title: "Research Methods" },
      { code: "PG 102", title: "Advanced Statistics" },
      { code: "PG 103", title: "Seminar Series" },
      { code: "PG 104", title: "Thesis Writing" }
    ]
  };

  // Get current courses based on active level and pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = courseData[activeLevel].slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  // Calculate total pages for the active level
  const totalPages = Math.ceil(courseData[activeLevel].length / coursesPerPage);

  // Reset to page 1 when changing levels
  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setCurrentPage(1);
  };

  const Excos = [
    {
      id: 1,
      name: "Isah Fidelis Ojochide",
      position: "President",
      bio: '',
      pic: Presido
    },
    {
      id: 2,
      name: "Isah Fidelis Ojochide",
      position: "Vice President",
      bio: '',
      pic: Vice_Presido
    },
    {
      id: 3,
      name: "Akande Judah Oluwagbemiga",
      position: "Secretary-General",
      bio: '',
      pic: Sec_Gen
    },
  ]

  return (
    <div className="relative font-[Inter]">
      <h1 className="absolute top-[-11rem] z-10 left-[-4rem] md:text-[11.5rem] xl:text-[16rem] font-bold text-[#0000001A] opacity-100 select-none w-full">
        Academics
      </h1>
      <section id="materials" className="my-12 md:mt-24">
        <div className="rule my-6">
          <header
            style={{
              backgroundImage: `url(${CourseMaterials})`
            }}
            className="text-white rounded-4xl flex flex-col justify-end p-6 bg-cover md:bg-center bg-no-repeat relative overflow-hidden md:my-16"
          >
            <div className="absolute bg-[#41A94E4D] w-full inset-0"></div>
            <div className="md:ml-8 z-10">
              <h2 className="font-extrabold text-4xl my-2 pt-10 text-center md:text-left md:my-4 md:text-6xl">
                Course Materials & Past Questions{" "}
              </h2>
              <p className="font-semibold text-2xl text-center md:text-left md:text-3xl md:pb-8">
                Access to all courses
              </p>
            </div>
          </header>
          <aside className="flex items-center my-6 overflow-auto w-full gap-x-2 md:justify-between lg:w-3/4 lg:mx-auto">
            {levels.map((level) => (
              <p
                key={level}
                className={`level_selector cursor-pointer ${
                  activeLevel === level
                    ? "bg-[#41A94E] text-white"
                    : "text-[#41A94E]"
                }`}
                onClick={() => handleLevelChange(level)}
              >
                <span>{level}</span> {level === "PG" ? "Materials" : "level"}
              </p>
            ))}
          </aside>
          <div className="flex flex-col my-4 w-full">
            {currentCourses.map((course, index) => (
              <article
                key={index}
                className="flex flex-col items-stretch gap-y-3 my-4 md:gap-y-4"
              >
              <div className="flex gap-2 items-center bg-[#41A94E14] rounded-2xl border border-[#00000080] p-1 md:p-3 md:gap-6">
                <img src={File_Icon} alt="File Icon" className="w-10 md:w-24" />
                <div className="flex flex-col gap-1 md:gap-2">
                  <p className="font-semibold text-[#41A94E] text-sm md:text-4xl">
                    {course.code} - {course.title}
                  </p>
                  <button className="bg-black rounded-4xl text-white p-1 font-medium text-sm md:text-3xl">Download Now</button>
                </div>
              </div>
              <button className="bg-[#41A94E] text-white rounded-4xl p-2 font-medium text-sm md:text-3xl">
                Download {course.code} Past Questions
              </button>
              </article>
            ))}
            {totalPages > 1 && (
              <div className="bg-[#41A94E] flex items-center justify-evenly rounded-full py-1 px-2 gap-1 place-self-center my-4">
                {[...Array(totalPages)].map((_, index) => (
                  <span
                    key={index}
                    className={`font-medium ${
                      currentPage === index + 1
                        ? "rounded-full bg-white text-[#41A94E]"
                        : "border border-white text-white"
                    } py-1 px-3 cursor-pointer`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
      <section
        id="excos"
        className="bg-[#41A94E] relative my-16 py-8 lg:pb-58 lg:mb-70"
        style={{
          backgroundImage: `url(${Bg3_tl}), url(${Bg3br})`,
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: "7%, 15%"
        }}
      >
        <div className="rule text-white font-[Inter] text-center lg:text-left relative">
          <h2 className='font-extrabold text-3xl lg:text-5xl'>Our Excos & Our Lecturers</h2>
          <p className="font-medium text-lg opacity-75 my-4 lg:text-2xl lg:w-[75%] lg:opacity-100">Meet our excos and lecturers</p>
          <div className="grid grid-cols-2 gap-x-8 lg:gap-x-28 md:grid-cols-3 lg:absolute w-full">
            { Excos.map((exco) => (
              <div className="card" key={exco.id} onClick={() => handleClick(exco)}>
                <img src={exco.pic} alt={exco.name} className="object-cover w-full md:h-84" />
                <div className="p-4 bg-[#41A94E] text-center h-full">
                  <h3 className="font-bold text-black text-lg lg:text-2xl md:uppercase">{ exco.name }</h3>
                  <p className="text-black text-xs lg:text-base">{ exco.position }</p>
                </div>
              </div>
            )) }
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
