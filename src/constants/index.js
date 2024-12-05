import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  billionProject,
  garden360,
  baant,
  mtc,
  meraqi,
  gradenIcon
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Figma Designer",
    icon: web,
  },
  {
    title: "UI-UX Designer",
    icon: mobile,
  },
  {
    title: "User Research",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founder's Experience",
    company_name: "Garden360 - Say Yes to Plants",
    icon: gradenIcon,
    iconBg: "#383E56",
    date: "April 2022 - February 2023",
    points: [
      "A brand tailored to deliver end-to-end gardening solutions.",
      "Founded a startup in the Indian Gardening Industry, catering all types of home & corporate gardening needs.",
      "Handled finances & designed a website & mobile app with a user-friendly interface and over 30,000 event count.",
      "Led marketing initiatives, successfully expanding brand reach to over 5000+ people & increasing brand visibility.",
    ],
  },
  {
    title: "Product Design Intern",
    company_name: "MTC Agronomics",
    icon: mtc,
    iconBg: "#383E56",
    date: "May 2024 - August 2024",
    points: [
      "Designed low-fidelity wireframes and high-fidelity interactive prototypes using Figma.",
      "Created user-friendly interfaces of both mobile and web applications.",
      "Defined and implemented user flow, added necessary features to enhance usability and navigation.",
      "Collaborated with cross-functional teams to brainstorm and align on design objectives and deliverables.",
    ],
  },
  {
    title: "Compliance Management Intern",
    company_name: "Meraqui Ventures",
    icon: meraqi,
    iconBg: "#E6DEDD",
    date: "March 2023 - June 2023",
    points: [
      "Gained in-depth knowledge of compliance regulations, including ESIC filing and Due Diligence processes.",
      "Worked closely with the Compliance Due Diligence team to ensure accurate and efficient regulatory practices.",
      "Developed expertise in analyzing financial reports, enhancing the ability to assess client compliance and identify potential risks.",
      "Leveraged hands-on experience to contribute to compliance management strategies and optimize regulatory workflows.",
    ],
  },

  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Kuldeep’s design skills are exceptional, delivering user-friendly interfaces that perfectly meet project requirements.",
    name: "Rajiv Kumar",
    designation: "Director ",
    company: "MTC Agronomics",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "His dedication and attention to detail in design make him an invaluable asset to any team.",
    name: "Anubhav Singh",
    designation: "Manager",
    company: "Meraqui Ventures",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Kuldeep's ability to combine creativity with functionality results in impactful designs that enhance user experiences.",
    name: "Tejasmann Jaiswal",
    designation: "Team Lead",
    company: "MTC Agronomics",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Billion$ Cafe",
    description:
      "Designed intuitive wireframes and an engaging UI for a cafe website, enabling college students to conveniently order food from their hostels with accessibility.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "DALL-E",
        color: "green-text-gradient",
      },
      // {
      //   name: "",
      //   color: "pink-text-gradient",
      // },
    ],
    image: billionProject,
    source_code_link: "https://new-repo-delta-bice.vercel.app/",
  },
  {
    name: "Garden360",
    description:
      "Designed an interactive Garden360 website, allowing users to book all gardening services in one seamless process, with a user-friendly interface and easy navigation.",
    tags: [
      {
        name: "Dribble",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "green-text-gradient",
      },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: garden360,
    source_code_link: "https://e-commerce-bice-theta.vercel.app/",
  },
  {
    name: "Baant-Farming Solutions",
    description:
      "Created an interactive mobile application for farmers, enabling them to order agricultural products and book services easily, with user-friendly navigation and a seamless interface.",
    tags: [
      {
        name: "Canva",
        color: "blue-text-gradient",
      },
      {
        name: "Sketch",
        color: "green-text-gradient",
      },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: baant,
    source_code_link:
      "https://drive.google.com/file/d/1bEsOZh06TvMeyif9nYqu1lDylTyQ8CG8/view",
  },
];

export { services, technologies, experiences, testimonials, projects };
