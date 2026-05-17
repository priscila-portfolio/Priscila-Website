import portrait from "../assets/images/portrait.jpg";
import aiInstitute from "../assets/images/ai-institute.jpg";
import eaton from "../assets/images/eaton.jpg";
import ghc from "../assets/images/ghc.jpg";
import maesConference from "../assets/images/maes-conference.jpg";
import maesConference2 from "../assets/images/maes-conference2.jpg";
import maes from "../assets/images/maes.jpg";
import mit from "../assets/images/mit.jpg";
import mit2 from "../assets/images/mit2.jpg";
import shpeGroup from "../assets/images/shpe-group.jpg";
import shpe from "../assets/images/shpe.jpg";
import topTen from "../assets/images/top-ten.jpg";
import topTen2 from "../assets/images/top-ten2.jpg";
import topTen3 from "../assets/images/top-ten3.jpg";
import topTen4 from "../assets/images/top-ten4.jpg";

export const images = {
  portrait,
  aiInstitute,
  eaton,
  ghc,
  maesConference,
  maesConference2,
  maes,
  mit,
  mit2,
  shpeGroup,
  shpe,
  topTen,
  topTen2,
  topTen3,
  topTen4,
};

export const profile = {
  name: "Priscila Madrid",
  tagline: "Computer Science. Software. Applied AI.",
  intro:
    "Hi, I'm Priscila. I'm a computer scientist from El Paso, Texas. I build software, work on applied AI research, and care about projects that put real tools in the hands of the people who need them.",
  location: "El Paso, TX",
  email: "pmadridarroyo@utep.edu",
  phone: "+1 (915) 706-6424",
  linkedin: "https://linkedin.com/in/priscila-madrid",
  resume: "/PriscilaMadrid_Resume.pdf",
};

export const about = {
  paragraphs: [
    "I recently graduated from The University of Texas at El Paso with a B.S. in Computer Science and a minor in Mathematics, finishing with a 3.80 GPA. My coursework covered machine learning, data mining, database systems, computer architecture, software engineering, and parallel computing.",
    "Along the way I spent a summer at MIT training neural networks for ocean weather forecasting, an internship at Eaton writing a Python test automation framework that saved the team about $45,000 in licensing, and time at the W. M. Keck Center reverse engineering a laser toolpath format so a two week setup took 54 seconds.",
    "Today I'm a full time research assistant at the UTEP Institute for Applied AI Innovation, where I'm building a funding intelligence platform that matches NIH grant opportunities to faculty across 39 departments.",
  ],
  highlights: [
    { label: "Degree", value: "B.S. Computer Science, UTEP" },
    { label: "Minor", value: "Mathematics" },
    { label: "GPA", value: "3.80 / 4.00" },
    { label: "Graduated", value: "May 2025" },
  ],
};

export const experience = [
  {
    role: "Research Assistant",
    company: "UTEP Institute for Applied AI Innovation",
    location: "El Paso, TX",
    period: "Oct 2025 — Present",
    image: aiInstitute,
    bullets: [
      "Engineered a funding intelligence platform that scores 412+ NIH Guide opportunities against 39 UTEP department profiles to surface grant matches for faculty and innovation leads. Roadmapped to cover 40 federal agencies and non traditional funding sources.",
      "Ran a literature review and geographic analysis of El Paso's older adult population with a team of three to inform AI Connect: Everyday Tools for Community Empowerment, defining AI literacy learning objectives and lesson sequences for community instruction.",
    ],
  },
  {
    role: "Student Engagement Assistant",
    company: "UTEP Department of Computer Science",
    location: "El Paso, TX",
    period: "Aug 2024 — May 2025",
    image: shpe,
    bullets: [
      "Served as the liaison between the CS Department and 12 student organizations. Co led logistics for the department's largest AI hackathon with 150 participants and 2 sponsors, and coordinated events with Goldman Sachs and Bloomberg.",
      "Directed CyberPatriot outreach, coordinating schedules for about 8 instructors and managing certifications for on site personnel. Represented the department at NCWIT school visits to promote CS pathways.",
    ],
  },
  {
    role: "Summer Research Intern",
    company: "MIT, Earth, Atmospheric, and Planetary Sciences",
    location: "Cambridge, MA",
    period: "Jun 2024 — Aug 2024",
    image: mit,
    poster: "/MIT_Summer_Research_Poster.pdf",
    bullets: [
      "Trained and optimized CNN variants in PyTorch, tuning architectures, learning rates, and regularization to improve ocean surface weather forecast accuracy under physical law constraints.",
      "Integrated early stage models into an HPC climate simulation pipeline and benchmarked runtime performance on Unix and Linux clusters.",
    ],
  },
  {
    role: "Software Quality Assurance Intern",
    company: "Eaton, Thomas A. Edison Technical Center",
    location: "Franksville, WI",
    period: "May 2023 — Aug 2023",
    image: eaton,
    bullets: [
      "Built a Python test automation framework using Appium and WinApp Driver for UI testing of ProView NXG switchgear controllers. Replaced Test Complete and Test Execute, projecting roughly $45,000 in combined licensing savings.",
      "Integrated the framework into FALCON, Eaton's CI/CD pipeline for automated firmware build scheduling and test execution. Attended monthly cross functional syncs with Schema, Hardware, and Firmware Engineering to align on controller level diagnostic validation.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "W. M. Keck Center for 3D Innovation",
    location: "El Paso, TX",
    period: "Jan 2024 — May 2024",
    bullets: [
      "Reverse engineered a proprietary .ILT laser toolpath format and built a Python CLI tool that auto generates 243 parametric sintering configurations from a CSV input, compressing a two week manual workflow to 54 seconds.",
      "Developed and executed unit and system tests validating decagon vector geometry across all 243 samples, ensuring precise toolpath sizing and eliminating manual error in laser experiment setup.",
    ],
  },
];

export const projects = [
  {
    title: "Hotel Booking Platform",
    role: "Scrum Master & Engineer",
    period: "Jan 2025 — May 2025",
    tags: ["React + Vite", "Node.js", "Firebase"],
    description:
      "Senior capstone project. As Scrum Master, I led a four person team through bi weekly sprints with over 90% goal completion. We delivered a full stack hotel booking platform deployed to Firebase Hosting.",
    bullets: [
      "Built room type management, seasonal pricing, and a loyalty points system with auto updating totals.",
      "Set up Firebase Auth with admin and user roles, plus automated email reminders and booking confirmations.",
    ],
  },
  {
    title: "Funding Intelligence Platform",
    role: "Research Engineer",
    period: "Oct 2025 — Present",
    tags: ["Python", "NLP", "Research"],
    description:
      "An internal tool that scores NIH Guide funding opportunities against UTEP department profiles to help faculty find grants worth their time.",
    bullets: [
      "412+ NIH opportunities indexed and scored against 39 department profiles in early validation.",
      "Roadmapped to cover 40 federal agencies and non traditional funding sources.",
    ],
  },
  {
    title: "Parametric Sintering Toolpath Generator",
    role: "Undergraduate Researcher",
    period: "Jan 2024 — May 2024",
    tags: ["Python", "CLI", "Reverse Engineering"],
    description:
      "A Python CLI tool that reads a CSV and generates 243 parametric sintering configurations in the proprietary .ILT laser toolpath format, compressing a two week manual workflow into 54 seconds.",
    bullets: [
      "Reverse engineered the .ILT format end to end.",
      "Unit and system tests validate decagon vector geometry across all 243 samples.",
    ],
  },
];

export const honors = [
  { title: "UTEP Top Ten Senior", year: "2025" },
  { title: "NCWIT Collegiate Award Finalist", year: "2025" },
  { title: "SHPE STEM Poster Winner", year: "2024" },
  { title: "Great Minds in STEM Scholar", year: "2023 & 2024" },
  { title: "Grace Hopper Scholar", year: "2023" },
];

export const leadership = {
  role: "VP Internal Affairs & Webmaster Chair",
  org: "Society of Hispanic Professional Engineers (SHPE/MAES), UTEP Chapter",
  period: "May 2022 — May 2025",
  description:
    "Maintained the chapter website at utepshpemaes.org, co planned 6 general meetings and 15 workshops per semester for 320+ members, and led bilingual logistics for SHPE National Bootcamp, the National Convention, and professional networking sessions with industry partners.",
};

export const gallery = [
  { src: topTen, caption: "UTEP Top Ten Senior, 2025" },
  { src: mit2, caption: "MIT Summer Research, 2024" },
  { src: ghc, caption: "Grace Hopper Celebration" },
  { src: maesConference, caption: "MAES National Conference" },
  { src: shpeGroup, caption: "SHPE Chapter, UTEP" },
  { src: topTen3, caption: "Top Ten Senior Ceremony" },
  { src: maes, caption: "MAES Recognition" },
  { src: topTen4, caption: "UTEP Recognition" },
];

export const skills = {
  Languages: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL"],
  "Frameworks & Tools": [
    "React",
    "Vite",
    "Node.js",
    "PyTorch",
    "Firebase",
    "Appium",
    "Git",
  ],
  "Focus Areas": [
    "Software Engineering",
    "Machine Learning",
    "Test Automation",
    "Data Analysis",
    "Applied AI Research",
  ],
};
