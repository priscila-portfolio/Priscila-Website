import portrait from "../assets/images/portrait.jpg";
import aiInstitute from "../assets/images/ai-institute.jpg";
import csEngagement from "../assets/images/cs-engagement.png";
import eaton from "../assets/images/eaton.jpg";
import ghc from "../assets/images/ghc.jpg";
import keck from "../assets/images/keck.jpg";
import maesConference from "../assets/images/maes-conference.jpg";
import maes from "../assets/images/maes.jpg";
import mit from "../assets/images/mit.jpg";
import topTen from "../assets/images/top-ten.jpg";
import topTen4 from "../assets/images/top-ten4.jpg";
import gmis from "../assets/images/gmis.gif";
import gmis2024 from "../assets/images/gmis-2024.jpeg";
import reyesHighSchool from "../assets/images/reyes-high-school.jpeg";
import eweek from "../assets/images/eweek.jpeg";

export const images = {
  portrait,
  aiInstitute,
  csEngagement,
  eaton,
  ghc,
  keck,
  maesConference,
  maes,
  mit,
  topTen,
  topTen4,
  gmis,
  reyesHighSchool,
  eweek,
};

export const profile = {
  name: "Priscila Madrid",
  tagline: "Computer Science. Software. Applied AI.",
  intro:
    "Computer scientist from El Paso, Texas. I write software, work on applied AI research, and care about projects that put practical tools in the hands of the people who use them.",
  location: "El Paso, TX",
  email: "madridpriscila2002@gmail.com",
  phone: "+1 (915) 706-6424",
  linkedin: "https://linkedin.com/in/priscila-madrid",
  github: "https://github.com/prismadrid2002",
  resume: "/Priscila_Madrid_Resume.pdf",
};

export const about = {
  paragraphs: [
    "I graduated from The University of Texas at El Paso in May 2025 with a B.S. in Computer Science and a minor in Mathematics, finishing with a 3.80 GPA. My coursework covered machine learning, data mining, database systems, computer architecture, software engineering, and parallel computing.",
    "Before that, I spent a summer at MIT training convolutional neural networks to improve how climate models represent convection, interned at Eaton building a Python test automation framework meant to replace about $30,000 in licensed tooling plus $15,000 in annual maintenance, and worked at the W. M. Keck Center reverse engineering laser printer file formats so a two-week setup ran in 54 seconds.",
    "Today I'm a full-time research assistant at the UTEP Institute for Applied AI Innovation, where I lead the analysis for the AI Connect study, write the requirements for a $180,000 AI consulting engagement with a regional manufacturer, and build AI tools in the institute's translational lab using the Claude API.",
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
    link: "https://www.linkedin.com/posts/utepaaii_appliedai-elpaso-aileadership-activity-7460724787963822081-eCjK?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADdtpIYB6KM3eUzeyGxsOV1Xl9I3tJ5r6Ik",
    linkLabel: "See the post on LinkedIn →",
    bullets: [
      "Support a $180,000, seven-month AI consulting engagement with a regional manufacturer: I lead stakeholder discovery and write the Software Requirements Specification for three AI pilots and a readiness assessment.",
      "Prototype a local Claude API proxy in Python and TypeScript inside the institute's translational lab, with REST endpoints that route requests across Claude models by task and complexity, log usage for cost tracking, and handle errors.",
      "Designed and delivered AI Connect, a four-module AI literacy course for adults 55 and older, with a team of three sponsored by Microsoft. I ran the pilot analysis on 12 surveys in IBM SPSS Statistics and Excel — cleaning, validation, restructuring, and nonparametric tests — to prepare the methodology and codebook for the 500-survey study now in collection.",
      "Documented a proposed secure deployment architecture for UTEP AI applications: GitLab, dev/test/prod VMs, security scanning, firewalls, Research and Academic Data Center storage, and HPC/GPU compute.",
    ],
  },
  {
    role: "CS Engagement & CAHSI Backbone Assistant",
    company: "UTEP Computer Science & CAHSI",
    location: "El Paso, TX",
    period: "Jan 2025 to Oct 2025",
    image: csEngagement,
    bullets: [
      "Supported 3 clubs and 8 student organizations and coordinated logistics for visits from large technology companies, including Goldman Sachs and Bloomberg.",
      "Co-led logistics for the department's largest AI hackathon (150 participants, 2 sponsors).",
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
      "Trained PyTorch CNNs on the Bridges-2 supercomputer to parameterize subgrid convection in climate models.",
      "Tested CNN architectures — three convolutional layers, ReLU, dropout — as candidates to replace a fully connected network, and benchmarked training runtime on the cluster.",
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
      "Built a Python test automation framework with Appium and WinAppDriver for UI testing of ProView NXG (Form 7 control software), intended to replace licensed tooling — about $30,000 in licenses plus $15,000 in annual maintenance.",
      "Helped design the Falcon continuous integration and continuous testing pipeline: a watcher launched by a timer or an external trigger to install builds, run test suites, and publish results to Zephyr, Jira, and GitHub.",
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
      "Decoded the .ILT and .CLI printer file formats and built a Python tool (pandas, NumPy, matplotlib) that transformed a CSV design of experiments — 5 factors, 3 levels, 243 runs — into 243 AconityMIDI+ build files, cutting a manual workflow of about two weeks to about 54 seconds.",
      "Wrote unit and system tests that validated decagon vector geometry across all 243 samples, catching sizing errors before the laser experiments ran.",
    ],
  },
];

export const projects = [
  {
    name: "MarketWatch RabbitMQ Lab",
    role: "Lab Fellow, Bloomberg Tech Lab on Campus",
    location: "El Paso, TX",
    period: "2025",
    bullets: [
      "One of 40 students selected to collaborate with Bloomberg engineers: built producer and consumer services in Python with pika, publishing and consuming securities price updates through a RabbitMQ message broker in Docker.",
      "Implemented a topic exchange that streams stock price updates to queues by ticker and sector, using wildcard binding keys for selective subscriptions.",
    ],
  },
  {
    name: "Faculty Research Data Management System",
    role: "SQL Lead, UTEP Data Diggers (Databases course team project)",
    location: "El Paso, TX",
    period: "2024",
    bullets: [
      "Designed ER diagrams, the relational model, and a normalized schema for students, faculty, projects, and supervisors, and implemented it in MySQL with primary keys, foreign keys, and unique constraints.",
      "Translated 12 functional requirements into the data model and presented scope, ER diagrams, and the relational model.",
    ],
  },
];

export const volunteering = [
  {
    role: "Great Minds in STEM Conference Delegation",
    company: "UTEP Computer Science & CAHSI",
    location: "El Paso, TX",
    period: "2024 & 2025",
    images: [gmis, gmis2024],
    link: "https://www.linkedin.com/posts/utep-cs_utep-computer-science-students-shine-at-ugcPost-7381840574082969600-xjlo?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADdtpIYB6KM3eUzeyGxsOV1Xl9I3tJ5r6Ik",
    linkLabel: "See the post on LinkedIn →",
    bullets: [
      "Organized the Great Minds in STEM (GMiS) conference delegation with CAHSI and coordinated the student travel logistics for the trip.",
      "Traveled with the UTEP delegation to GMiS 2024 in Pasadena as a Great Minds in STEM Scholar.",
    ],
  },
  {
    role: "Engineering Week (E-Week)",
    company: "UTEP Department of Computer Science",
    location: "El Paso, TX",
    period: "2025",
    image: eweek,
    bullets: [
      "Ran the Computer Science booth at UTEP's Engineering Week with fellow student volunteers, sharing the department's programs and student organizations with visiting students.",
    ],
  },
  {
    role: "K-12 STEM Outreach",
    company: "UTEP Department of Computer Science",
    location: "El Paso, TX",
    period: "2025",
    image: reyesHighSchool,
    link: "https://www.linkedin.com/posts/utep-cs_utepcs-pickengineering-utepminers-ugcPost-7324209260639215616-I4Pf?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADdtpIYB6KM3eUzeyGxsOV1Xl9I3tJ5r6Ik",
    linkLabel: "See the post on LinkedIn →",
    bullets: [
      "Volunteered at school STEM events with fellow UTEP CS students, encouraging kids to pick engineering and computer science.",
      "Directed CyberPatriot outreach and represented the department at NCWIT school visits to promote CS pathways.",
    ],
  },
];

export const honors = [
  {
    title: "UTEP Top Ten Senior",
    year: "2025",
    link: "https://www.utep.edu/newsfeed/2025/march/utep-announces-2025-top-ten-seniors.html",
    linkLabel: "Read announcement",
    preview: topTen,
  },
  {
    title: "NCWIT Collegiate Award Finalist",
    year: "2025",
    preview: topTen4,
  },
  {
    title: "SHPE STEM Poster Winner",
    year: "2024",
    preview: maesConference,
  },
  {
    title: "Great Minds in STEM Scholar",
    year: "2023 & 2024",
    preview: maes,
  },
  {
    title: "Grace Hopper Scholar",
    year: "2023",
    preview: ghc,
  },
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

export const skills = {
  Languages: ["Python", "SQL", "JavaScript", "TypeScript", "Bash", "Java"],
  "Frameworks & Libraries": [
    "pandas",
    "NumPy",
    "matplotlib",
    "PyTorch",
    "React",
    "Next.js",
  ],
  "Tools & Platforms": [
    "Git",
    "GitHub",
    "Node.js",
    "Firebase",
    "Claude API",
    "Appium",
    "WinAppDriver",
    "Jira",
    "Zephyr",
    "IBM SPSS Statistics",
    "Excel",
    "Linux",
    "HPC clusters",
  ],
  "Focus Areas": [
    "Software Engineering",
    "Machine Learning",
    "Test Automation",
    "Data Analysis",
    "Applied AI Research",
  ],
};
