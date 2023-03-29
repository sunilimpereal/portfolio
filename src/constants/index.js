import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  flutter,
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
  zoopos,
  threejs,
  wondersmind,
  freelance,
  molex,
  key4tours,
  imageminds,
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
    title: "Android & IOS Developer",
    description: "(flutter,native)",
    icon: web,
  },
  {
    title: " Flutter Developer",
    description: "(state management,\n Animations,UI/UX)",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    description: "( Django, Firebase)",
    icon: backend,
  },
  {
    title: "Dev Ops",
    description: "( Docker, AWS)",
    icon: backend,
  },

];

const technologies = [
  {
    name: "Flutter",
    icon: flutter,
  },
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
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
    title: "Mobile FrontEnd Developer",
    company_name: "WondersMind",
    icon: wondersmind,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining android applications using flutter and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "WondersMind",
    icon: wondersmind,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining Mobile applications using Flutter and Django technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Active participant in Deployment team and server maintainance team",
    ],
  },
  {
    title: "Freelance",
    company_name: "",
    icon: freelance,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [


  {
    name: "Molex",
    description:
      "Designed and Built Android app for Molex Inc.The app connects with the thier ERP for tracking and monitoring manufacturing.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "Network Printer SDK",
        color: "pink-text-gradient",
      },

    ],
    image: molex,
    source_code_link: "https://github.com/sunilimpereal/molex_tablet",
  },

  {
    name: "Zoo Ticket POS System",
    description:
      "Built front end for Mysoore Zoo ticket counter POS system to issue tickets and validate them with a scanner.macking the process seamless,also inclued a reporting system to get daily repots for the day in excel sheet",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Excel",
        color: "yellow-text-gradient",
      },

    ],
    image: zoopos,
    source_code_link: "https://github.com/",
  },
  {
    name: "E-Commerce App",
    description:
      "Built frontend for Scale Model Cart Outlet to issue have an online presence and sell their models through the app.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },
      {
        name: "Redis",
        color: "pink-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Excel",
        color: "yellow-text-gradient",
      },

    ],
    image: zoopos,
    source_code_link: "https://github.com/",
  },
  {
    name: "Imageminds Online Course App",
    description:
      "Built a full stack Android app for students to view tutoials provided bby imageminds.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },

      {
        name: "AWS",
        color: "pink-text-gradient",
      },
      {
        name: "Excel",
        color: "yellow-text-gradient",
      },
      {
        name: "Docker",
        color: "yellow-text-gradient",
      },

    ],
    image: imageminds,
    source_code_link: "https://github.com/",
  },

  {
    name: "Tour Company Site - Key4tours",
    description:
      "Built a full stack Android app for students to view tutoials provided bby imageminds.",
    tags: [
      {
        name: "React-JS",
        color: "blue-text-gradient",
      },
      {
        name: "Django",
        color: "green-text-gradient",
      },

      {
        name: "VPS",
        color: "pink-text-gradient",
      },
      {
        name: "Docker",
        color: "yellow-text-gradient",
      },
      {
        name: "CRM",
        color: "yellow-text-gradient",
      },

    ],
    image: key4tours,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
