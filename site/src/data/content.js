import portrait from "../assets/images/portrait.jpg";
import aiInstitute from "../assets/images/ai-institute.jpg";
import csEngagement from "../assets/images/cs-engagement.png";
import eaton from "../assets/images/eaton.jpg";
import ghc from "../assets/images/ghc.jpg";
import keck from "../assets/images/keck.jpg";
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
  csEngagement,
  eaton,
  ghc,
  keck,
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
    "Computer scientist from El Paso, Texas. I write software, work on applied AI research, and care about projects that put practical tools in the hands of the people who use them.",
  location: "El Paso, TX",
  email: "pmadridarroyo@utep.edu",
  phone: "+1 (915) 706-6424",
  linkedin: "https://linkedin.com/in/priscila-madrid",
  resume: "/Priscila_Madrid_Resume.pdf",
};

export const about = {
  paragraphs: [
    "I graduated from The University of Texas at El Paso in May 2025 with a B.S. in Computer Science and a minor in Mathematics, finishing with a 3.80 GPA. My coursework covered machine learning, data mining, database systems, computer architecture, software engineering, and parallel computing.",
    "Before that, I spent a summer at MIT training neural networks for ocean weather forecasting, interned at Eaton building a Python test automation framework that saved the team about $45,000 in licensing, and worked at the W. M. Keck Center reverse engineering a laser toolpath format so a two-week setup ran in 54 seconds.",
    "Today I'm a full-time research assistant at the UTEP Institute for Applied AI Innovation, where I coordinate an AI readiness assessment for a regional manufacturer and build AI tools in the institute's translational lab using Claude and Claude Code.",
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
    period: "Oct 2025 to Present",
    image: aiInstitute,
    bullets: [
      "Helped secure a $180,000 AI consulting engagement with a regional manufacturer, a seven-month program running an AI readiness assessment alongside three pilots. I coordinate the readiness assessment and support a retrieval-augmented generation (RAG) pilot by collecting documentation for its literature review.",
      "Build AI tools inside the institute's translational lab, a secure UTEP environment for taking research prototypes into production. Recent work, built with Claude and Claude Code, includes a chatbot proxy that routes requests across Claude models by task and cost, and a dashboard that automates Google Scholar alert tracking for faculty.",
      "Designed and delivered AI Connect, a four-module AI literacy course for non-technical adults 55 and older in the El Paso community, with a team of three sponsored by Microsoft. I now lead the quantitative and qualitative analysis of course outcomes.",
    ],
  },
  {
    role: "Student Engagement Assistant",
    company: "UTEP Department of Computer Science",
    location: "El Paso, TX",
    period: "Aug 2024 to May 2025",
    image: csEngagement,
    bullets: [
      "Served as the liaison between the CS Department and 12 student organizations. Co-led logistics for the department's largest AI hackathon (150 participants, 2 sponsors) and coordinated events with Goldman Sachs and Bloomberg.",
      "Directed CyberPatriot outreach, coordinating schedules for about 8 instructors and managing certifications for on-site personnel. Represented the department at NCWIT school visits to promote CS pathways.",
    ],
  },
  {
    role: "Summer Research Intern",
    company: "MIT, Earth, Atmospheric, and Planetary Sciences",
    companyLink: "https://pog.mit.edu/",
    location: "Cambridge, MA",
    period: "Jun 2024 to Aug 2024",
    image: mit,
    poster: "/MIT_Summer_Research_Poster.pdf",
    profile: "https://oge.mit.edu/msrp/profiles/priscila-madrid-arroyos/",
    bullets: [
      "Trained and tuned CNN variants in PyTorch, adjusting architectures, learning rates, and regularization to improve ocean surface weather forecast accuracy while respecting physical constraints.",
      "Integrated early-stage models into an HPC climate simulation pipeline and benchmarked runtime performance on Unix and Linux clusters.",
    ],
  },
  {
    role: "Software Quality Assurance Intern",
    company: "Eaton, Thomas A. Edison Technical Center",
    companyLink:
      "https://www.eaton.com/us/en-us/services/high-power-test-labs/franksville-high-power-lab.html",
    location: "Franksville, WI",
    period: "May 2023 to Aug 2023",
    image: eaton,
    bullets: [
      "Built a Python test automation framework with Appium and WinApp Driver for UI testing of ProView NXG switchgear controllers. The framework replaced Test Complete and Test Execute, with projected licensing savings of roughly $45,000.",
      "Integrated the framework into FALCON, Eaton's CI/CD pipeline for automated firmware build scheduling and test execution. Joined monthly cross-functional syncs with Schema, Hardware, and Firmware Engineering to align on controller-level diagnostic validation.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "W. M. Keck Center for 3D Innovation",
    companyLink: "https://www.utep.edu/keck/",
    location: "El Paso, TX",
    period: "Jan 2024 to May 2024",
    image: keck,
    bullets: [
      "Reverse engineered a proprietary .ILT laser toolpath format and built a Python CLI tool that generates 243 parametric sintering configurations from a CSV input, compressing a two-week manual workflow into 54 seconds.",
      "Wrote unit and system tests that validated decagon vector geometry across all 243 samples, catching sizing errors before the laser experiments ran.",
    ],
  },
];

export const honors = [
  {
    title: "UTEP Top Ten Senior",
    year: "2025",
    link: "https://www.utep.edu/newsfeed/2025/march/utep-announces-2025-top-ten-seniors.html",
    linkLabel: "Read announcement",
  },
  { title: "NCWIT Collegiate Award Finalist", year: "2025" },
  { title: "SHPE STEM Poster Winner", year: "2024" },
  { title: "Great Minds in STEM Scholar", year: "2023 & 2024" },
  { title: "Grace Hopper Scholar", year: "2023" },
];

export const certifications = {
  issuer: "Anthropic",
  note: "Coursework I've completed across Anthropic's Claude developer, agent, and AI Fluency tracks.",
  groups: [
    {
      label: "Developer & API",
      items: [
        {
          title: "Claude with the Anthropic API",
          verify: "https://verify.skilljar.com/c/a5k8zxouehs8",
        },
        {
          title: "Claude with Amazon Bedrock",
          verify: "https://verify.skilljar.com/c/oicqtrwytdvv",
        },
        { title: "Claude 101" },
      ],
    },
    {
      label: "Claude Code & Agents",
      items: [
        { title: "Claude Code 101" },
        { title: "Introduction to subagents" },
        { title: "Introduction to agent skills" },
      ],
    },
    {
      label: "AI Fluency",
      items: [
        { title: "AI Fluency: Framework & Foundations" },
        { title: "AI Fluency: AI Capabilities & Limitations" },
        { title: "Teaching the AI Fluency Framework" },
        { title: "AI Fluency for educators" },
        { title: "AI Fluency for students", date: "May 29, 2026" },
        { title: "AI Fluency for Small Businesses", date: "May 30, 2026" },
        { title: "AI Fluency for nonprofits" },
      ],
    },
  ],
};

export const leadership = {
  role: "VP Internal Affairs & Webmaster Chair",
  org: "Society of Hispanic Professional Engineers (SHPE-MAES), UTEP Chapter",
  orgLink: "https://utepshpemaes.org/",
  period: "May 2022 to May 2025",
  description:
    "Maintained the chapter website at utepshpemaes.org, co-planned 6 general meetings and 15 workshops per semester for 320+ members, and led bilingual logistics for SHPE National Bootcamp, the National Convention, and professional networking sessions with industry partners.",
};

export const gallery = [
  { src: topTen, caption: "UTEP Top Ten Senior, 2025" },
  { src: mit2, caption: "MIT Summer Research, 2024" },
  { src: ghc, caption: "Grace Hopper Celebration" },
  { src: maesConference, caption: "SHPE-MAES National Conference" },
  { src: shpeGroup, caption: "SHPE Chapter, UTEP" },
  { src: topTen3, caption: "Top Ten Senior Ceremony" },
  { src: maes, caption: "SHPE-MAES Recognition" },
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
