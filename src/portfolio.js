/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "BOUICH Ilham",
  description:
    "Ingénieur en informatique et réseaux, option MIAGE, à la recherche d un stage de projet de fin d études (PFE), lié à mon domaine.",

  og: {
    title: "BOUICH Ilham Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "BOUICH ILHAM",
  logo_name: "BOUICHIlham",
  nickname: "",
  subTitle:
    "Ingénieur en informatique et réseaux, option MIAGE, à la recherche d un stage de projet de fin d études (PFE), lié à mon domaine.",
  resumeLink:
    "https://drive.google.com/file/d/1PotOjVc0l6Lbf6IohgyhdtrLo4KG8ePK/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ilhambou",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ilhambou",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ilham-bouich-027271216/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:bouichilham2@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: ["⚡ Conception et réalisation des applications Web "],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon:java-wordmark",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Spring boot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "hibernate",
          fontAwesomeClassname: "devicon:hibernate-wordmark",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MySql",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Initiation aux technologies Cloud / DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Je suis passionnée par les technologies Cloud et je cherche à approfondir mes connaissances. Actuellement, je suis engagée dans une formation approfondie en Cloud Computing et DevOps, cherchant à maîtriser les concepts fondamentaux ainsi que les outils essentiels.",
        ,
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },

        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "devicon:jira-wordmark",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Ecole Marocaine des Sciences de l'Ingénieur",
      duration: "2019 - 2024",
      descriptions: [
        "⚡ Étudiante en 5ème année en Ingénierie Informatique et Réseaux, option MIAGE",
      ],
    },
    {
      title: "Lycée Mohamed VI",

      duration: "2018 - 2019",
      descriptions: [
        "⚡ Baccalauréat science physique et chimie option français",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "DevOps, Cloud, and Agile Foundations",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EDR7CZDBQU7B",
      color_code: "#8C151599",
    },
    {
      title: "Introduction to HTML5",
      logo_path: "University-of-Michigan-Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/FUBRCFKQVX3Q",
      color_code: "#00000099",
    },
    {
      title: "Front-End Web UI Frameworks and Tools: Bootstrap 4",

      logo_path: "HKUST_margin-1.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/H3S2JH3VLCKP",
      color_code: "#0C9D5899",
    },
    {
      title: "Python Functions, Files, and Dictionaries",
      logo_path: "University-of-Michigan-Logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/DPXZQRCL9SFE",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced React",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/8RJBYFZ3G9Z2",
      color_code: "#D83B0199",
    },
    {
      title: "Blockchain Basics",
      logo_path: "University_at_Buffalo_logo.svg.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/K44HX7R2T28Q",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Projets académiques, Stages et Autres projets",
  header_image_path: "experience.svg",

  sections: [
    {
      title: "Stages",
      experiences: [
        {
          title: "Stage en gestion du transport",
          company: "Cliquer pour consulter le code source",
          company_url: "https://github.com/ilhambou/gestion-du-transport",
          logo_path: "imagee.png",
          duration: "juillet 2023 - Août 2023",
          location: "Rabat, Maroc",
          description:
            "-Conception et développement d'une application web de gestion du transport, simplifiant les réservations de colis, l'organisation des trajets et la gestion des conducteurs et des véhicules. -Technologie et outils : Spring boot, Mysql, Html, Css, Bootstrap.",
          color: "#000000",
        },

        {
          title: "Stage d'initiation",
          company: "Cliquer pour consulter le code source",
          company_url: "https://github.com/ilhambou/Initiation-",
          logo_path: "FIS.png",
          duration: "Juillet 2022 - Août 2022",
          location: "Agadir, Maroc",
          description:
            "-Conception et réalisation d'une application web permettant de gérer les clients. -Technologie et outils : Mern Stack.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Projets académiques",
      work: true,
      experiences: [
        {
          title: "Cabinet Dentaire",
          company: "Cliquer pour consulter le code source",
          company_url: "https://github.com/ilhambou/Cabinet-Dentaire",
          logo_path: "emsi.png",
          duration: "Avril 2023 - Juin 2023",
          description:
            "-Réalisation d'une application web permettant de gérer un cabinet dentaire et de prendre des rendez-vous pour les patients. -Technologie et outils : Spring boot, Mysql, Html, Css, Bootstrap.",
          color: "#fc1f20",
        },
        {
          title: "Sondage",
          company: "Cliquer pour consulter le code source",
          company_url: "https://github.com/ilhambou/Sondage",
          logo_path: "emsi.png",
          duration: "Avril 2022 - Juin 2022",
          description:
            "-Conception et réalisation d'une application web permettant de créer des sondages sous forme de questions à choix multiples, couvrant différents domaines et appartenant à diverses catégories, en fonction des préférences des clients. -Technologie et outils : Django, Html, Css, Bootstrap.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Autres projets",
      experiences: [
        {
          title: "mini-projet",
          company: "Cliquer pour consulter le code source",
          company_url: "https://github.com/ilhambou/Spring-React-Frontend",
          logo_path: "freelance.png",
          duration: "octobre 2023",
          location: "Projet personnel",
          description:
            "Réalisation d'un mini-projet pour un CRUD en utilisant Spring Boot et React.",
          color: "#181717",
        },
        {
          title: "mini-projet pour la gestion d'une bibliothèque",
          company: "Cliquer pour consulter le code source",
          company_url: "https://github.com/ilhambou/projet_dotnet",
          logo_path: "freelance.png",
          duration: "octobre 2022",
          location: "Projet personnel",
          description:
            "Réalisation d'un mini-projet pour la gestion d'une bibliothèque en utilisant DotNet.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact",
    profile_image_path: "202133.png",
    description:
      "Je suis à la recherche d'un stage PFE en développement web ou Cloud, d'une durée de 6 mois. Je serai disponible du début du mois de mars jusqu'à la fin du mois d'août. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    locality: "Kanodar",
    country: "IN",
    region: "Gujarat",
    postalCode: "385520",
    streetAddress: "Ambavadi vas",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
