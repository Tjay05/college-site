import { useState, useEffect } from "react";
import CourseMaterials from "../../assets/images/past-questions.png";
import Caleb from "../../assets/images/exco.png";
import Bg3br from "../../assets/images/bg3-br.png";
import Bg3_tl from "../../assets/images/bg3-tl.png";
import { FaFilePdf, FaFileWord } from "react-icons/fa";
import {
  User,
  Mail,
  Award,
  BookOpen,
  Briefcase,
  FileText,
  X
} from "lucide-react";
import Presido from "../../assets/images/president.jpg";
import Vice_Presido from "../../assets/images/vice.jpg";
import Sec_Gen from "../../assets/images/secetary.jpg";
import LarPic from "../../assets/images/Lar.jpg";
import AbenePic from "../../assets/images//Abejs.jpg";
import AlliPic from "../../assets/images/Gloria.jpg";
import ZebulonPic from "../../assets/images/Zebe.jpg";
import MaduguPic from "../../assets/images/Hod.jpg";

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

export const Lecturers = [
  {
    id: 1,
    name: "Dr. Alexander Jang Madugu",
    position:
      "Head of Department, History and International Studies, University of Jos",
    specialization: "Administration and Military History",
    bio: "Dr. Alexander Jang Madugu is the current Head of the Department of History and International Studies at the University of Jos. His research interests center on administration, military history, internal peacekeeping operations, and the socio-political complexities of Nigeria. He has published extensively in peer-reviewed journals and contributed chapters to several academic books. Dr. Madugu is especially known for his work on the Nigerian military’s involvement in internal security, the political implications of ethnic conflict, and transnational dynamics across Africa. His commitment to critical scholarship has established him as a key voice in contemporary African historiography.",
    pic: MaduguPic, // Replace with actual image
    vision:
      "To deepen understanding of African military and administrative systems and their relevance to contemporary peacekeeping and governance",
    key_achievements: [
      "Head of Department, History and International Studies, University of Jos",
      "Prolific contributor to journals on military history, conflict, and governance",
      "Key academic voice on internal peacekeeping operations in Plateau State"
    ],
    contact: "alexandermadugu@unijos.edu.ng | +234(0)XXXXXXXXXX", // Replace with actual contact
    courses_taught: [
      "The Nigerian Military in Internal Peacekeeping Operations",
      "African Military History",
      "Colonial Administration in Africa",
      "Post-Colonial African States and Governance",
      "Conflict and Security Studies"
    ],
    publications: [
      {
        title:
          "Profiting from Piracy: Economic Rationality and Maritime Piracy in the Gulf of Aden",
        journal: "SGI – Journal of Science and Humanities",
        volume: "Vol. 5 (Special Edition)",
        year: 2021,
        publisher: "Scholars Gates International Journals, Plymouth University",
        pages: "222–234"
      },
      {
        title:
          "Security, Conflict Resolution and Indigenous Pluralities in the Aftermath of Jos Crisis",
        journal: "Verstehen (Journal of Social Research)",
        volume: "Vol. 4 No. 1",
        year: 2021,
        co_authors: "Gilbert Yalmi",
        pages: "35–50"
      },
      {
        title:
          "Militant Extremism and Boko Haram: Solidarity Beyond the Nigerian State",
        journal: "Verstehen (Journal of Social Research)",
        volume: "Vol. 4 No. 1",
        year: 2021,
        co_authors: "Gilbert Yalmi, Uzta Yusuf Abdullahi",
        pages: "87–102"
      },
      {
        title:
          "The Effects of Corruption and Ethnicity in the Nigerian Societies",
        journal: "Mandyeng (Journal of Central Nigeria Studies)",
        year: 2019,
        co_authors: "Gilbert Yalmi",
        pages: "77–93"
      },
      {
        title: "The Increasing Wave of Trans-Nationalism in Africa",
        journal: "Kaduna Journal of Historical Studies",
        year: 2019,
        pages: "62–84"
      },
      {
        title:
          "Reconsideration of the September 2001 Crisis in Jos, the Transformation of the State and Deepening Alienation",
        journal: "Mandyeng (Journal of Central Nigeria Studies)",
        year: 2014,
        co_authors: "Adoyi Onoja, Bernard Kangtau",
        pages: "157–174"
      },
      {
        title:
          "Inequality, Security and the Threat of Multinational Corporation in Niger-Delta",
        journal: "Mandyeng (Journal of Central Nigeria Studies)",
        year: 2014,
        co_authors: "Gloria Longba’am-Alli",
        pages: "175–190"
      },
      {
        title: "Culture and Gender Roles in Nigeria",
        journal: "Journal of Studies in Humanities (JOSIH)",
        volume: "Vol. 5 No. 2",
        year: 2013,
        pages: "143–156"
      },
      {
        title: "Deregulation and the Nigerian Banking Sector",
        journal: "Babcock Journal of Economics, Banking and Finance",
        volume: "Vol. 1",
        year: 2011,
        pages: "68–76"
      },
      {
        title:
          "Strategies for the Improvement and Sustenance of Secondary Education in Nigeria",
        journal: "Mandyeng (Journal of Central Nigeria Studies)",
        year: 2010,
        pages: "15–27"
      },
      {
        title:
          "Constitutional Democracy and the Plurality of Elites in Nigeria",
        journal: "Jos Journal of Humanities",
        volume: "Vol. 4 No. 1",
        year: 2010,
        pages: "149–160"
      },
      {
        title: "Understanding Terror: An Argument for Terrorism",
        journal: "Ebonyi Journal of History",
        volume: "Vol. 2 No. 1",
        status: "Accepted"
      },
      {
        title:
          "[Re] peripheralization, [Re] incorporation, Frontiers and Non-State Societies: Depictions of Terrorism in American (Hollywood) Movies",
        journal: "Ebonyi Journal of History",
        volume: "Vol. 2 No. 1",
        status: "Accepted"
      },
      {
        title:
          "Embeddedness: Rediscovering Africa in the Mirror of Security and Cultural Others",
        book: "Perspectives in History, Development and International Relations (Festschrift for Professor Ibrahim James)",
        editors: "Dr. Tendehba Wuam & Philibus Audu Nwamagyi",
        publisher: "University Press, Kaduna",
        year: 2018,
        pages: "219–237"
      },
      {
        title:
          "Postcolonial Nigeria: Socio-Political Stability and the Need for New Social Order in Nigeria",
        book: "Popular Ideologies, Modernity, and the National Question in Nigeria (Festschrift for Prof. Monday Y. Mangvwat)",
        editors:
          "S. U. Fwatshak, Okpeh O. Okpeh Jnr, J. M. Ayuba & J. E. Agaba",
        publisher: "University of Jos Press",
        year: 2018,
        pages: "317–329"
      },
      {
        title:
          "Policing in Post-Conflict Jos Metropolis: A Theoretical Discourse",
        book: "Transformation of Central Nigeria (Essays in Honor of Professor Toyin Falola)",
        editor: "Prof. S. U. Fwatshak",
        publisher: "Pan African University Press, Austin",
        year: 2016,
        pages: "451–462"
      },
      {
        title:
          "Resistance to British Colonial Conquest: A Survey of the Central Jos Plateau, 1903–1930",
        book: "Essays in Honour of Professor John Garah Nengel",
        editors: "Okpeh O. Okpeh Jr, Kudu A. Amango, Maiyaki M. Mejida",
        co_authors: "Sale Akila Lohor",
        publisher: "Integrity Publishers, Lagos",
        year: 2019,
        pages: "165–181"
      },
      {
        title:
          "The Establishment of Trade Relations Between the Hausa and the Chadic Speakers of Jos Plateau: 1700–1800",
        co_authors: "Sale Akila Lohor",
        status: "Accepted for publication"
      }
    ]
  },
  {
    id: 2,
    name: "Dr. Jimam Timchang Lar",
    position: "Reader (Associate Professor)",
    bio: `
    I am a historian and academic based in Jos, Nigeria, currently serving as a Reader (Associate Professor) in the Department of History and International Studies at the University of Jos. 

    My specialization lies in the History of Violence, Security, and Policing, with a keen interest in the intersections of conflict, governance, and society. With a rich academic background and international research exposure, I am deeply committed to advancing historical inquiry in Africa, mentoring young scholars, and contributing to policy discussions around peace, security, and justice.
  `,
    pic: LarPic, // Replace with actual image import or path
    vision:
      "Advancing critical historical research and security studies in Africa",
    key_achievements: [
      "PhD in African History and Politics from the University of Bayreuth, Germany",
      "MA in Conflict, Security, and Development from King’s College London",
      "Published extensively on policing, violence, and ethnic relations in Nigeria",
      "Contributor to international journals and book chapters on peacebuilding and security",
      "Lecturing and mentoring students in history and international studies for over a decade"
    ],
    contact: "jimamlar@gmail.com | +234XXXXXXXXXX",
    education: [
      {
        institution: "University of Bayreuth, Germany",
        duration: "Oct. 2011 – Nov. 2015",
        qualification:
          "Ph.D. in African History and Politics (Merit Pass with High Honours), BIGSAS"
      },
      {
        institution: "King’s College London, UK",
        duration: "Sept. 2007 – Aug. 2008",
        qualification: "M.A. Conflict, Security and Development"
      },
      {
        institution: "University of Jos, Nigeria",
        duration: "July 2005 – March 2007",
        qualification: "M.A. Economic History"
      },
      {
        institution: "University of Jos, Nigeria",
        duration: "March 1997 – April 2001",
        qualification: "B.A. History, Second Class (Upper Division)"
      }
    ],
    publications: {
      journalArticles: [
        {
          title:
            "The Criminal Justice System and the Politics of Restructuring in Nigeria: The Nigerian Police and Correctional Service (Prisons) in Historical Perspective",
          authors: "Lar, Jimam T. and Nendimma D. Gonet",
          journal: "Ilorin Journal of History and International Studies",
          year: 2022,
          volume: "Vol. 11 No. 1"
        },
        {
          title:
            "Violence and Insecurity in Nigeria’s North West: Exploring the Role and Resilience of Local Actors",
          author: "Lar, Jimam",
          journal:
            "African Conflict and Peacebuilding Review, Indiana University Press",
          year: 2019,
          volume: "Vol. 8 No. 2, Fall 2018"
        },
        {
          title:
            "Policing Actors, Plural Processes and Hybridisation: Histories of Everyday Policing Practice in Central Nigeria",
          author: "Lar, Jimam",
          journal: "Stability: International Journal of Security & Development",
          year: 2018,
          volume: "7(1):11",
          link: "https://doi.org/10.5334/sta.605"
        },
        {
          title:
            "Articulations of Belonging: The Politics of Ethnic and Religious Pluralism in Bauchi and Gombe States, North-East Nigeria",
          authors: "Higazi, Adam and Lar, Jimam",
          book: "Of Xenophobia and Citizenship: The Everyday Politics of Exclusion and Inclusion in Africa",
          year: 2015,
          pages: "AFRICA: 85,1, pp.103-130"
        },
        {
          title:
            "A Dream Still Born: A Historical Analysis of the Middle Belt Struggle in Post Colonial Nigeria",
          author: "Lar, Jimam",
          journal: "Mandyeng, Journal of Central Nigerian Studies",
          year: 2010,
          pages: "Late Rains 2010, 102-113"
        },
        {
          title:
            "Challenges and Prospects of Collaborative Deployment in West Africa: The UN and ECOWAS in Sierra Leone (1995–2008)",
          author: "Lar, Jimam T.",
          journal: "The Academy Journal of Defence Studies",
          year: 2009,
          volume: "Vol. 16",
          pages: "24–41"
        },
        {
          title:
            "Making the Case for Humanitarian Intervention: A Threshold in African Conflict Prevention and Management",
          author: "Lar, Jimam T.",
          journal: "Journal of the Historical Society of Nigeria (JHSN)",
          year: 2008,
          volume: "Vol. 17",
          pages: "41–55"
        },
        {
          title:
            "Issues and Problems in Post-Colonial Inter-Group Relations: The Tarok and their Neighbours (1)",
          author: "Lar, Jimam T.",
          journal: "Nggapak - Journal of the Society of Tarok Studies",
          year: 2007,
          volume: "Vol. 1 No. 2"
        }
      ],
      booksAndChapters: [
        {
          title:
            "Research in a Conflict and Peacebuilding Context: Narrations from Fieldwork in Nigerian Conflict Theatres",
          author: "Lar, Jimam",
          year: 2020,
          book: "Researching Peacebuilding in Africa: Reflections on Theory, Fieldwork and Context",
          editors: "Ismail Rashid and Amy Niang",
          publisher: "Routledge",
          pages: "p.166–176"
        },
        {
          title: "Policing by Task Force in Post-Colonial Nigeria",
          author: "Lar, Jimam",
          year: 2018,
          book: "Policing Reform in Africa: Moving Towards a Rights Based Approach in a Climate of Terrorism, Insurgency and Serious Violent Crime",
          editors: "Etannibi E.O. Alemika, Mutuma Ruteere, Simon Howell",
          publisher: "APCOF (African Policing Civilian Oversight Forum)",
          location: "Cape Town, South Africa",
          pages: "p.176–193"
        }
      ]
    }
  },
  {
    id: 3,
    name: "Mrs. Abene Nanyen Margaret",
    position: "Lecturer",
    bio: `
    I am a lecturer in the Department of History and International Studies at the University of Jos, Nigeria. 

    My academic specialization covers Middle East History, North African History, and Islamic History. I am passionate about historical research and education that bridges regional and global perspectives. With over a decade of teaching and scholarly experience, I remain committed to mentoring students and expanding conversations around African and Islamic historiography.
  `,
    pic: AbenePic, // Replace with actual image import or path
    vision:
      "Fostering a deeper understanding of Islamic and Middle Eastern histories in African academic spaces",
    key_achievements: [
      "Master’s in International Affairs and Diplomacy, A.B.U Zaria",
      "B.A. History, University of Jos",
      "Published works on corruption, conflict, xenophobia, and environmental issues",
      "Contributor to church and community history through COCIN headquarters publication",
      "Advocate for reconceptualizing security education in Nigeria"
    ],
    contact:
      "nartmoore@unijos.edu.ng | nartmoore@yahoo.com | nanyenabene.NMA@gmail.com | +234-803-618-945",
    publications: [
      {
        title:
          "Remapping Secured Neighborhoods in Conflict Prone Nigeria: The Jos Example",
        journal: "African Journal of Modern Society",
        volume: "Vol. 3 No. 1",
        year: 2012,
        pages: "44–69"
      },
      {
        title: "Corruption and Conflicts in Northern Nigeria",
        journal: "Humanity Jos Journal of General Studies",
        volume: "Vol. 6 No. 1",
        year: 2013,
        pages: "187–199"
      },
      {
        title:
          "Security Education in the Nigerian Context and the Need for Reconceptualization",
        journal: "Humanity Jos Journal of General Studies",
        volume: "Vol. 7 No. 1",
        year: 2014,
        pages: "68–84"
      },
      {
        title:
          "Africa and the Problem of Trans-Boundary Movement of Hazardous Waste: An Assessment of Bamako Convention of 1991",
        journal: "Journal of Law, Policy and Globalization",
        volume: "Vol. 48",
        year: 2016,
        pages: "47–53"
      },
      {
        title:
          "A Critique of the Responses of the Ministry of Foreign Affairs to South Africa’s Xenophobic Attacks",
        journal: "Lafia Journal of History and International Development",
        volume: "Vol. 1 No. 3",
        year: 2019,
        pages: "281–304"
      },
      {
        title: "Our History",
        bookChapter: true,
        chapter: "Chapter 3",
        publication:
          "Church of Christ in Nations (COCIN), Headquarters, Jos, Plateau State"
      }
    ]
  },
  {
    id: 4,
    name: "Mr. Godslove Zebulon",
    position: "Lecturer",
    bio: `
      Mr. Godslove Zebulon is a lecturer in the Department of History and International Studies at the University of Jos. His academic interests span European History, African History, and Nigerian History.

      He holds a Master of Arts in History and International Studies from the University of Jos (2024), and a Bachelor's degree in History from Taraba State University. He is currently pursuing an M.Phil/Ph.D in African History at the University of Jos. His research focuses on border security, environmental conflict, and the socio-economic implications of historical rites and traditions.
    `,
    pic: ZebulonPic, // Replace with actual image
    vision: "Bridging historical insight with contemporary African realities",
    key_achievements: [
      "Ongoing M.Phil/Ph.D in African History at the University of Jos",
      "MA in History and International Studies (2024)",
      "BA in History from Taraba State University",
      "Presented multiple papers at national academic conferences",
      "Published in reputable academic journals on African security and socio-economic issues"
    ],
    contact: "zebulongodslove@gmail.com | +234(0)8174242495, +234(0)9124752812",
    publications: [
      {
        title:
          "Challenges in Border Security: The Nigeria–Cameroon Republic Experience",
        journal: "Jalingo Journal of African Studies",
        volume: "Vol. 8, No. 7",
        year: 2024
      },
      {
        title:
          "Human Security: Rationalizing Nigeria’s Land Border Closure in 2019 from a Historical Perspective",
        journal: "Wukari International Studies Journal",
        volume: "Vol. 9, No. 12",
        year: 2023
      },
      {
        title:
          "Understanding Africa’s Global Marginalization from a Historical Perspective",
        journal: "Humanity Jos Journal of General Studies",
        volume: "Vol. 15, No. 1",
        year: 2024
      },
      {
        title:
          "Challenges in Border Security: The Nigeria–Cameroon Republic Experience",
        conference:
          "Wukari International Studies Group International Conference",
        year: 2023
      },
      {
        title:
          "Historicizing the Role of Environmental Factors in Farmers–Pastoralist Conflicts and Its Impact on Environmental Security: A Case of Bassa L.G.A of Plateau State, 1910",
        conference:
          "68th Annual Conference of the Historical Society of Nigeria (HSN)",
        year: 2023
      },
      {
        title:
          "Matrimonial Rites, Contemporary Economic Realities and Continuity: A Study on the Gambari People of Ilorin, 1900–2023",
        conference:
          "Faculty of Management Sciences International Conference, Al-Hikmah University",
        year: 2023
      }
    ]
  },
  {
    id: 5,
    name: "Dr. Gloria Longba’am-Alli",
    position: "Lecturer",
    bio:
      "Dr. Gloria Longba’am-Alli is currently a faculty member at the University of Jos, where she teaches courses on revolutions, gender studies, and African security dynamics. She integrates her extensive fieldwork experience and commitment to fostering peace and stability across Africa into her teaching. Her scholarly contributions, including numerous articles and book chapters, have significantly advanced knowledge in her field.\n\n" +
      "She obtained her B.A. Hons. and M.A. Hons. degrees from the University of Jos before pursuing her doctoral studies at Makerere University. Dr. Alli has received several prestigious awards, including the Gerda Henkel Stiftung Fellowship for her PhD, the 2022 SSRC Dissertation Completion Fellowship, the 2023 SSRC Post-Doctoral Writing Fellowship, and the 2024 African Peace Network Fellowship.",
    pic: AlliPic, // Replace with actual image
    vision:
      "Promoting interdisciplinary peacebuilding and gender equity in African security contexts",
    key_achievements: [
      "Gerda Henkel Stiftung PhD Fellowship",
      "2022 SSRC Dissertation Completion Fellowship",
      "2023 SSRC Post-Doctoral Writing Fellowship",
      "2024 SSRC African Peace Network Fellowship",
      "Lecturer in Revolutions, Gender, and African Security"
    ],
    contact: "gloriaalli@unijos.edu.ng | +234(0)XXXXXXXXXX", // Replace with actual contact
    courses_taught: [
      "The Military in the History of 20th Century Africa",
      "History of Southern Africa",
      "Europe from the French Revolution to the First World War",
      "History of Christianity in Africa",
      "Pre-colonial Warfare in Africa",
      "War & Peace",
      "War & Peace II, 1945 to the Present",
      "Gender and Development in Africa",
      "Major World Revolutions in the 20th Century"
    ],
    publications: [
      {
        title:
          "The Impact of Non-Violent Protests in Nigeria and Sudan: The Struggle for Democracy in Africa",
        journal: "African Social Research",
        volume: "Vol. 2",
        year: 2022,
        link: "https://www.pasiri.org/_files/ugd/d71c2d_cb54eed64f204d1893da620dc998d35c.pdf"
      },
      {
        title:
          "Everyday Peace: Historicising Local Agency in Managing Ethno-Religious Conflicts in Nigeria’s Middle Belt",
        journal: "The Journal of Social Encounters",
        volume: "Vol. 6, Iss. 1",
        year: 2022,
        link: "https://digitalcommons.csbsju.edu/social_encounters/vol6/iss1/2"
      },
      {
        title:
          "Inequality and Security and the Threat of Multinational Corporations in the Niger-Delta",
        journal: "MANDIYENG, Journal of Central Nigeria Studies",
        year: 2014,
        co_authors: "Alex J. Madugu"
      },
      {
        title: "Culture and Gender Roles in Nigeria",
        journal: "JOSIH, Journal of Studies in Humanities",
        year: 2013,
        co_authors: "Alex J. Madugu"
      },
      {
        title:
          "Transcending Gender Roles in the Provision of Security: Women in Berom Area, 2001–2012",
        book: "Essays in Honour of O.D. Akinwunmi",
        publisher: "Eiwa Press Nigeria Limited",
        year: 2017,
        co_authors: "Adoyi Onoja, Nanyen M. Abene"
      },
      {
        title:
          "Women and Informal Sector Markets in the Aftermath of the Twenty-First Century Jos Conflicts",
        book: "Transformation of Central Nigeria: Essays in Honour of Professor Toyin Falola",
        publisher: "Pan African University Press, Austin",
        year: 2016
      },
      {
        title: "Women and War Stories from Captivity in Nigeria and Uganda",
        conference:
          "Oral Traditions and Written Histories – Special Conference in Honour of Professor Bolanle Awe at 90",
        year: 2023,
        co_authors: "Dr Charlotte Mafumbo Karungi"
      }
    ]
  }
];

const Academics = () => {
  const [activeLevel, setActiveLevel] = useState("100l");
  const [currentPage, setCurrentPage] = useState(1);
  const [courseData, setCourseData] = useState({});
  const [loading, setLoading] = useState(true);
  const coursesPerPage = 8; // Changed to 8 for better grid layout
  const [selectedLecturer, setSelectedLecturer] = useState(null);

  const levels = ["100l", "200l", "300l", "400l", "PDF Books"];

  // Load course materials from the folder structure
  useEffect(() => {
    const loadCourseData = async () => {
      try {
        setLoading(true);

        // Fetch the JSON manifest of your files
        const response = await fetch("/course-manifest.json");
        const data = await response.json();
        console.log("Fetched course data:", data);
        const courseFiles = data.courseFiles;

        const organizedData = {
          "100l": [],
          "200l": [],
          "300l": [],
          "400l": [],
          "PDF Books": []
        };

        courseFiles.forEach((file) => {
          const { path, level, fileName } = file;

          if (level in organizedData) {
            const fileExtension = fileName.split(".").pop().toLowerCase();
            const fileType =
              fileExtension === "pdf"
                ? "pdf"
                : fileExtension === "doc" || fileExtension === "docx"
                ? "word"
                : "other";

            const courseName = fileName.split(".")[0];
            const codeMatch = courseName.match(/^([A-Z]+ \d+)/);
            const code = codeMatch ? codeMatch[0] : courseName;
            const title = codeMatch
              ? courseName.replace(codeMatch[0], "").replace(/^[-\s]+/, "")
              : "";

            organizedData[level].push({
              code,
              title,
              filePath: path, // Using the actual path from your data
              fileName,
              fileType
            });
          }
        });

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
      // Use the actual path from your data instead of hardcoding
      const fileUrl = filePath;

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
  const handleClicked = (lecturer) => {
    setSelectedLecturer(lecturer);
  };

  const closeModal = () => {
    setSelectedLecturer(null);
  };

  return (
    <div className="relative font-[Inter] mt-11 ">
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
            ) : currentCourses && currentCourses.length > 0 ? (
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
        className="bg-[#41A94E] relative mt-16 py-8 lg:py-20 my-5"
        style={{
          backgroundImage: `url(${Bg3_tl}), url(${Bg3br})`,
          backgroundPosition: "top left, bottom right",
          backgroundRepeat: "no-repeat no-repeat",
          backgroundSize: "7%, 15%"
        }}
      >
        <div className="rule text-white font-[Inter] text-center lg:text-left container mx-auto px-4">
          <h2 className="font-extrabold text-3xl lg:text-5xl mb-8">
            Our Excos & Our Lecturers
          </h2>

          {/* Excos Section */}
          <h2 className="font-extrabold text-3xl lg:text-5xl mb-8">
            Our Excos
          </h2>
          <div className="mb-16">
            <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 lg:gap-x-8 md:grid-cols-3">
              {Excos.map((exco) => (
                <div
                  className="card cursor-pointer"
                  key={exco.id}
                  onClick={() => handleClick(exco)}
                >
                  <img
                    src={exco.pic}
                    alt={exco.name}
                    className="object-cover w-full h-64 md:h-72"
                  />
                  <div className="p-4 bg-[#41A94E] text-center">
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

          {/* Lecturers Section */}
          <h2 className="font-extrabold text-3xl lg:text-5xl mb-8">
            Our Lecturers
          </h2>
          <div className="mt-12">
            <div className="grid grid-cols-2 gap-4 md:gap-6 md:grid-cols-3">
              {Lecturers.map((lecturer) => (
                <div
                  className="card overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105"
                  key={lecturer.id}
                  onClick={() => handleClicked(lecturer)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={lecturer.pic || "/api/placeholder/400/320"}
                      alt={lecturer.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-4 bg-[#41A94E] text-center">
                    <h3 className="font-bold text-black text-lg md:text-xl">
                      {lecturer.name}
                    </h3>
                    <div className="flex items-center justify-center mt-2">
                      <p className="text-black text-sm">{lecturer.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal for selected lecturer - Keeping this part unchanged */}
        {selectedLecturer && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-y-auto">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-2xl font-bold text-blue-700">
                  {selectedLecturer.name}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-800"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <img
                    src={selectedLecturer.pic || "/api/placeholder/400/320"}
                    alt={selectedLecturer.name}
                    className="w-full rounded-lg"
                  />

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center">
                      <User size={18} className="text-blue-700 mr-2" />
                      <p className="font-semibold">
                        {selectedLecturer.position}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <Mail size={18} className="text-blue-700 mr-2" />
                      <p className="text-sm">
                        {selectedLecturer.contact?.split("|")[0]?.trim()}
                      </p>
                    </div>

                    <div className="flex items-start mt-2">
                      <Award size={18} className="text-blue-700 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Vision</p>
                        <p className="text-sm italic">
                          {selectedLecturer.vision}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold flex items-center mb-2">
                      <User size={18} className="text-blue-700 mr-2" />
                      Biography
                    </h3>
                    <p className="text-gray-700">{selectedLecturer.bio}</p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold flex items-center mb-2">
                      <Award size={18} className="text-blue-700 mr-2" />
                      Key Achievements
                    </h3>
                    <ul className="list-disc pl-6 text-gray-700">
                      {selectedLecturer.key_achievements?.map(
                        (achievement, index) => (
                          <li key={index}>{achievement}</li>
                        )
                      )}
                    </ul>
                  </div>

                  {selectedLecturer.education && (
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold flex items-center mb-2">
                        <BookOpen size={18} className="text-blue-700 mr-2" />
                        Education
                      </h3>
                      <div className="space-y-2">
                        {selectedLecturer.education.map((edu, index) => (
                          <div
                            key={index}
                            className="border-l-2 border-blue-700 pl-3"
                          >
                            <p className="font-medium">{edu.institution}</p>
                            <p className="text-sm text-gray-700">
                              {edu.qualification}
                            </p>
                            <p className="text-sm text-gray-500">
                              {edu.duration}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold flex items-center mb-2">
                      <FileText size={18} className="text-blue-700 mr-2" />
                      Publications
                    </h3>
                    <div className="space-y-2">
                      {selectedLecturer.publications?.journalArticles ? (
                        <>
                          <h4 className="font-medium">Journal Articles</h4>
                          <ul className="list-disc pl-6 text-gray-700">
                            {selectedLecturer.publications.journalArticles
                              .slice(0, 3)
                              .map((pub, index) => (
                                <li key={index} className="mb-1">
                                  {pub.title}.{" "}
                                  <span className="italic">{pub.journal}</span>,{" "}
                                  {pub.year}
                                </li>
                              ))}
                          </ul>

                          {selectedLecturer.publications.booksAndChapters && (
                            <>
                              <h4 className="font-medium mt-3">
                                Books & Chapters
                              </h4>
                              <ul className="list-disc pl-6 text-gray-700">
                                {selectedLecturer.publications.booksAndChapters
                                  .slice(0, 2)
                                  .map((pub, index) => (
                                    <li key={index} className="mb-1">
                                      {pub.title}. In:{" "}
                                      <span className="italic">{pub.book}</span>
                                      , {pub.year}
                                    </li>
                                  ))}
                              </ul>
                            </>
                          )}
                        </>
                      ) : (
                        <ul className="list-disc pl-6 text-gray-700">
                          {selectedLecturer.publications
                            ?.slice(0, 3)
                            .map((pub, index) => (
                              <li key={index} className="mb-1">
                                {pub.title}.{" "}
                                {pub.journal && (
                                  <span className="italic">{pub.journal}</span>
                                )}
                                {pub.conference && (
                                  <span className="italic">
                                    {pub.conference}
                                  </span>
                                )}
                                {pub.year && `, ${pub.year}`}
                              </li>
                            ))}
                        </ul>
                      )}
                      <p className="text-sm text-blue-700 mt-2">
                        {selectedLecturer.publications?.length > 3 &&
                          "View all publications..."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Academics;
