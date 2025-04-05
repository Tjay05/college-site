import { useState, useEffect } from "react";
import CourseMaterials from "../../assets/images/past-questions.png";
import Caleb from "../../assets/images/exco.png";
import Bg3br from "../../assets/images/bg3-br.png";
import Bg3_tl from "../../assets/images/bg3-tl.png";
import { FaFilePdf, FaFileWord, FaDownload } from "react-icons/fa";

const Academics = () => {
  const [activeLevel, setActiveLevel] = useState("100");
  const [currentPage, setCurrentPage] = useState(1);
  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(true);
  const coursesPerPage = 12; // Changed to 12 for better grid layout (4x3)

  const levels = ["100", "200", "300", "400", "PDF Books"];

  // Load course materials from the folder structure
  useEffect(() => {
    const loadCourseData = async () => {
      try {
        setLoading(true);

        // We need to import the course data dynamically or use a context
        // For now, let's simulate fetching the data
        const courseModules = import.meta.glob(
          "../../assets/course upload/**/*"
        );

        // Structure to hold our organized course data
        const organizedData = {
          100: [],
          200: [],
          300: [],
          400: [],
          "PDF Books": []
        };

        // Process the imported modules
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
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                        className="bg-[#41A94E] text-white rounded-full py-2 px-4 w-full font-medium text-sm hover:bg-[#368B40] transition-colors duration-300 flex items-center justify-center gap-2"
                        onClick={() =>
                          handleDownload(course.filePath, course.fileName)
                        }
                      >
                        <FaDownload className="text-white" /> Download
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

      {/* Excos & Lecturers section - Modified to 4x2 grid */}
      <section
        id="excos"
        className="bg-[#41A94E] relative my-16 py-12 lg:py-16"
        style={{
          backgroundImage: `url(${Bg3_tl}), url(${Bg3br})`,
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: "7%, 15%"
        }}
      >
        <div className="rule text-white font-[Inter] text-center lg:text-left">
          <h2 className="font-extrabold text-3xl lg:text-5xl mb-4">
            Our Excos & Our Lecturers
          </h2>
          <p className="font-medium text-lg opacity-75 mb-8 lg:text-2xl lg:w-[75%] lg:opacity-100">
            Meet our excos and lecturers
          </p>

          {/* Excos grid with 4x2 layout (4 columns on larger screens, 2 rows) */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
            {/* Only 8 items to create a 4x2 grid */}
            {[
              { name: "Caleb Kim", role: "Dept. President" },
              { name: "Jennifer Smith", role: "Vice President" },
              { name: "David Chen", role: "General Secretary" },
              { name: "Amina Patel", role: "Financial Secretary" },
              { name: "Marcus Johnson", role: "P.R.O" },
              { name: "Sophia Rodriguez", role: "Academic Coordinator" },
              { name: "Taiwo Adebayo", role: "Social Director" },
              { name: "Grace Liu", role: "Welfare Director" }
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={Caleb}
                    alt={`Exco - ${person.name}`}
                    className="object-cover w-full h-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-4 bg-white text-center">
                  <h3 className="font-bold text-[#41A94E] text-lg">
                    {person.name}
                  </h3>
                  <p className="text-gray-700 text-sm">{person.role}</p>
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
