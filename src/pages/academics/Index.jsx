import { useState, useEffect } from "react";
import CourseMaterials from "../../assets/images/past-questions.png";
import Caleb from "../../assets/images/exco.png";
import Bg3br from "../../assets/images/bg3-br.png";
import Bg3_tl from "../../assets/images/bg3-tl.png";
import { FaFilePdf, FaFileWord } from "react-icons/fa";
import Presido from "../../assets/images/president.jpg";
import Vice_Presido from "../../assets/images/vice.jpg";
import Sec_Gen from "../../assets/images/secetary.jpg";
import { useNavigate } from "react-router-dom";
// import test from '../../../public/course upload'

export const Excos = [
  {
    id: 1,
    name: "Isah Fidelis Ojochide",
    position: "President",
    bio: `
      I am a distinguished historian from Ofu L.G.A Kogi State Nigeria, currently serving as a president of Great JUHISSA. 
      
      As President, I provide leadership and transitional vision to the department promoting academic excellence, research, technological advancement and community engagement. I am committed to mentoring students and inspiring the next generation of historians and international relations scholars.
    `,
    pic: Presido,
    vision: "The view of a digitalized JUHISSA",
    key_achievements: [
      "Secure donations of about 2,200 books to JUHISSA Library",
      "Development of JUHISSA website",
      "Effective management",
      "Creation of JUHISSA podcast",
      "Policy formulation"
    ],
    contact: "fidelisisah@gmail.com | 08100122200 / 09026233880"
  },
  {
    id: 2,
    name: "Dagwom Hezekella Pam",
    position: "Vice President",
    bio: `
      I am a 300-level student of History and International Studies Department, University of Jos. Born and raised in the scenic city of Jos, Plateau Stae.
      I am a vibrant and passionate historian with a keen interest in international studies.
      I am well-versed in critical thinking, research and analysis. My exceptional skills, both written and verbal, enable me to effectively convey complex ideas and inspire meaningful discussions.
      My infectious enthusiasm, warm personality and generous spirit make me a beloved colleague and friend. My dedication to academic excellence, cultural awareness and communtiy engagement embodies the values of a true leader and scholar.
    `,
    pic: Vice_Presido,
    vision:
      "These initiatives demonstrate my commitment to creating an inclusive and supportive learning environment, where students can thrive and reach their full potential.",
    key_achievements: [
      "Providing visual aids, such as maps, to enhance teaching and facilitate better understanding of complex concepts.",
      "Organizing tutorials for younger students, offering guidance and mentorship to help them navigate their academic journey.",
      "Offering individual support to students who require additional assistance, addressing their unique needs and concerns."
    ],
    contact: "pamhezekella8@gmail.com | 07012530644 / 08184295083"
  },
  {
    id: 3,
    name: "Akande Judah Oluwagbemiga",
    position: "Secretary-General",
    bio: "400-level student of History and International Studies, dedicated to effective communication, organization and transparency.",
    pic: Sec_Gen,
    vision:
      '"ADROIT SECRETARIAT" - seamless communication, documentation and growth.',
    key_achievements: [
      "Organized and documented key meetings and events",
      "Implemented efficient record keeping systems",
      "Assisted in policy formulation and execution",
      "Promoted student engagement and participation"
    ],
    contact: "dextyjay@gmail.com | 08135415376 / 09078625248"
  }
];

const Academics = () => {
  const [activeLevel, setActiveLevel] = useState("100");
  const [currentPage, setCurrentPage] = useState(1);
  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(true);
  const coursesPerPage = 8; // Changed to 12 for better grid layout (4x3)

  const levels = ["100", "200", "300", "400", "PDF Books"];

  // Load course materials from the folder structure
  useEffect(() => {
    const loadCourseData = async () => {
      try {
        setLoading(true);

        const courseModules = import.meta.glob(
          "../../../public/course upload/**/*"
        );

        const organizedData = {
          100: [],
          200: [],
          300: [],
          400: [],
          "PDF Books": []
        };

        for (const path in courseModules) {
          // Process path to determine level and course information
          const pathParts = path.split("/");
          const fileName = pathParts[pathParts.length - 1];

          // Determine level based on path
          let level = null;
          if (path.includes("100l")) {
            level = "100";
          } else if (path.includes("200l")) {
            level = "200";
          } else if (path.includes("300l")) {
            level = "300";
          } else if (path.includes("400l")) {
            level = "400";
          } else if (path.includes("Relevant pdf Books")) {
            level = "PDF Books";
          }

          if (level) {
            const fileExtension = fileName.split(".").pop().toLowerCase();
            const fileType =
              fileExtension === "pdf"
                ? "pdf"
                : fileExtension === "doc" || fileExtension === "docx"
                ? "word"
                : "other";

            const courseName = fileName.split(".")[0]; // Remove file extension
            // Extract course code and title (assuming format like "COR 101 - Course Title")
            const codeMatch = courseName.match(/^([A-Z]+ \d+)/);
            const code = codeMatch ? codeMatch[0] : courseName;
            const title = codeMatch
              ? courseName.replace(codeMatch[0], "").replace(/^[-\s]+/, "")
              : "";

            organizedData[level].push({
              code: code,
              title: title,
              filePath: path, // This will be the path to the file
              fileName: fileName,
              fileType: fileType
            });
          }
        }

        setCourseData(organizedData);
        setLoading(false);
      } catch (error) {
        console.error("Error loading course materials:", error);
        setLoading(false);
      }
    };

    loadCourseData();
  }, []);

  // Get current courses based on active level and pagination
  const currentCourses =
    !loading && courseData[activeLevel]
      ? courseData[activeLevel].slice(
          (currentPage - 1) * coursesPerPage,
          currentPage * coursesPerPage
        )
      : [];

  // Calculate total pages for the active level
  const totalPages =
    !loading && courseData[activeLevel]
      ? Math.ceil(courseData[activeLevel].length / coursesPerPage)
      : 0;

  // Reset to page 1 when changing levels
  const handleLevelChange = (level) => {
    setActiveLevel(level);
    setCurrentPage(1);
  };

  // Handle file download
  const handleDownload = async (filePath, fileName) => {
    try {
      // For dynamic imports, we need to load the file first
      const fileModule = await import(/* @vite-ignore */ filePath);
      const fileUrl = fileModule.default;

      // Create a download link and trigger the download
      const link = document.createElement("a");
      link.href = fileUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
      alert("Failed to download file. Please try again later.");
    }
  };
  const navigate = useNavigate();

  // Function to render the appropriate icon based on file type
  const getFileIcon = (fileType) => {
    switch (fileType) {
      case "pdf":
        return <FaFilePdf className="w-8 h-8 text-red-600" />;
      case "word":
        return <FaFileWord className="w-8 h-8 text-blue-600" />;
      default:
        return <FaFilePdf className="w-8 h-8 text-red-600" />;
    }
  };

  const handleClick = (exco) => {
    navigate(`../exco/${exco.id}`, { state: { exco } });
  };

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

          {/* Level selectors */}
          <aside className="flex items-center my-6 overflow-auto w-full gap-x-2 md:justify-center lg:w-3/4 lg:mx-auto">
            {levels.map((level) => (
              <p
                key={level}
                className={`level_selector cursor-pointer ${
                  activeLevel === level
                    ? "bg-[#41A94E] text-white"
                    : "text-[#41A94E]"
                } px-4 py-2 rounded-full transition-all duration-300 hover:bg-[#41A94E20]`}
                onClick={() => handleLevelChange(level)}
              >
                <span>{level}</span> {level === "PDF Books" ? "" : "level"}
              </p>
            ))}
          </aside>

          {/* Course materials grid */}
          <div className="my-4 w-full">
            {loading ? (
              <p className="text-center py-8">Loading course materials...</p>
            ) : currentCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="bg-[#41A94E14] p-4 flex items-center gap-3">
                      <div className="bg-white rounded-lg p-3 shadow-sm">
                        {getFileIcon(course.fileType)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#41A94E] text-lg truncate">
                          {course.code}
                        </h3>
                        <p className="text-sm text-gray-500 truncate">
                          {course.title ||
                            (course.fileType === "pdf"
                              ? "PDF Document"
                              : "Word Document")}
                        </p>
                      </div>
                    </div>

                    <div className="p-3 flex-grow">
                      <p className="text-sm text-gray-700 line-clamp-2">
                        {course.title ||
                          `${course.code} ${
                            activeLevel !== "PDF Books"
                              ? "Past Questions"
                              : "Material"
                          }`}
                      </p>
                    </div>

                    <div className="p-3 pt-0">
                      <button
                        className="bg-[#41A94E] text-white rounded-full py-2 px-4 w-full font-medium text-sm hover:bg-[#368B40] transition-colors duration-300"
                        onClick={() =>
                          handleDownload(course.filePath, course.fileName)
                        }
                      >
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center py-8">
                No course materials available for this level.
              </p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8">
                <div className="bg-[#41A94E] flex items-center justify-evenly rounded-full py-1 px-2 gap-1">
                  {[...Array(totalPages)].map((_, index) => (
                    <span
                      key={index}
                      className={`font-medium ${
                        currentPage === index + 1
                          ? "rounded-full bg-white text-[#41A94E]"
                          : "border border-white text-white"
                      } py-1 px-3 cursor-pointer hover:bg-[#41A94E80] transition-colors duration-300`}
                      onClick={() => setCurrentPage(index + 1)}
                    >
                      {index + 1}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Excos & Lecturers section */}
      <section
        id="excos"
        className="bg-[#41A94E] relative mt-16 py-8 lg:pb-58 lg:mb-70"
        style={{
          backgroundImage: `url(${Bg3_tl}), url(${Bg3br})`,
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: "7%, 15%"
        }}
      >
        <div className="rule text-white font-[Inter] text-center lg:text-left relative">
          <h2 className="font-extrabold text-3xl lg:text-5xl">
            Our Excos & Our Lecturers
          </h2>
          <p className="font-medium text-lg opacity-75 my-4 lg:text-2xl lg:w-[75%] lg:opacity-100">
            Meet our excos and lecturers
          </p>
          <div className="grid grid-cols-2 gap-x-8 lg:gap-x-28 md:grid-cols-3 lg:absolute w-full">
            {Excos.map((exco) => (
              <div
                className="card"
                key={exco.id}
                onClick={() => handleClick(exco)}
              >
                <img
                  src={exco.pic}
                  alt={exco.name}
                  className="object-cover w-full md:h-84"
                />
                <div className="p-4 bg-[#41A94E] text-center h-full">
                  <h3 className="font-bold text-black text-base lg:text-2xl md:uppercase">
                    {exco.name}
                  </h3>
                  <p className="text-black text-sm lg:text-base">
                    {exco.position}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
