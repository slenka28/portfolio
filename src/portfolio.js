/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: 'UA-174238252-2'
};


//Home Page
const greeting = {
  title: 'Hello ',
  title2: 'Swaraj',
  logo_name: 'S_Analyze()'
,
  nickname: 'Pboss',
  full_name: 'Swaraj Lenka',
  subTitle: [
    'Data Analyst',
    'Cloud Engineer',
    'Data Engineer'
  ],
  resumeLink:
    'https://drive.google.com/file/d/18u3nkSVWS0GuMurTJfsuvzLo23z2H7is/view?usp=drive_link',
  mail: 'mailto:swarajlenka28@gmail.com'
};

const socialMediaLinks = {
  /* Social Media Link */
  github: 'https://github.com/slenka28',
  linkedin: 'https://www.linkedin.com/in/swaraj-lenka-sl2002/',
  gmail: 'swarajlenka28@gmail.com',
  instagram: 'https://www.instagram.com/swaraj_lenka_28/'
};
const skillprogress = {
  skillprogresses: [
    {
      name: 'Front End Developer',
      done: '75',
      icon: 'mdi:web'
    },
    {
      name: 'Back End Developer',
      done: '70',
      icon: 'whh:website'
    },
    {
      name: 'Machine Learning',
      done: '80',
      icon: 'eos-icons:machine-learning'
    },
    {
      name: 'Deep Learning',
      done: '60',
      icon: 'carbon:machine-learning-model'
    },
    {
      name: 'Data Structures',
      done: '65',
      icon: 'carbon:data-structured'
    },
    {
      name: 'Graphic Designing',
      done: '75',
      icon: 'fluent:design-ideas-16-filled'
    },
    {
      name: 'Video Editing',
      done: '65',
      icon: 'bi:camera-video-fill'
    },
    {
      name: 'App Development',
      done: '55',
      icon: 'ant-design:android-filled'
    },
    {
      name: 'Internet of Things',
      done: '60',
      icon: 'eos-icons:iot'
    },
    {
      name: 'Game Development',
      done: '40',
      icon: 'entypo:game-controller'
    },
    {
      name: 'Augmented Reality',
      done: '40',
      icon: 'ic:twotone-view-in-ar'
    }
  ]
};
const skills = {
  data: [
    {
      title: 'MERN Stack Development',
      fileName: 'FullStackImg',
      skills: [
        '🌐 Data transformation and enrichment using Python (Pandas, NumPy) and SQL',
        '🌐 Data warehousing and management using BigQuery',
        '🌐 Data processing and analytics with Apache Spark and Databricks',
        '🌐 Building interactive dashboards with Power BI and Google Data Studio',
        '🌐 Automation of workflows using Apache Airflow and cloud services (GCP, Azure)'
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
          fontAwesomeClassname: 'simple-icons:html5',
          style: {
            color: '#E34F26'
          }
        },
        {
          skillName: 'CSS3',
          fontAwesomeClassname: 'fa-css3',
          style: {
            color: '#1572B6'
          }
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassname: 'simple-icons:javascript',
          style: {
            backgroundColor: '#FFFFFF',
            color: '#F7DF1E'
          }
        },

        {
          skillName: 'Excel',
          fontAwesomeClassname: 'simple-icons:microsoftexcel',
          style: {
            color: '#217346'
          }
        },
        {
          skillName: 'Python',
          fontAwesomeClassname: 'simple-icons:python',
          style: {
            color: 'FFFF00'
          }
        },
        {
          skillName: 'Power Bi',
          fontAwesomeClassname: 'simple-icons:powerbi',
          style: {
            color: '#ffd32c'
          }
        },
        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'simple-icons:mongodb',
          style: {
            color: '#439743'
          }
        },
        {
          skillName: 'Apache Spark',
          fontAwesomeClassname: 'simple-icons:apachespark',
          style: {
            color: '#ffa500'
          }
        },
        {
          skillName: 'MySQL',
          fontAwesomeClassname: 'simple-icons:mysql',
          style: {
            color: '#4479A1'
          }
        },
        {
          skillName: 'Apache Airflow',
          fontAwesomeClassname: 'simple-icons:apacheairflow',
          style: {
            color: '#c69'
          }
        },
        {
          skillName: 'Big Query',
          fontAwesomeClassname: 'simple-icons:googlecloud',
          style: {
            color: '#305cde'
          }
        },
        {
          skillName: 'Hadoop',
          fontAwesomeClassname: 'simple-icons:apachehadoop',
          style: {
            color: '#0865A6'
          }
        },
        {
          skillName: 'Tailwind',
          fontAwesomeClassname: 'simple-icons:tailwindcss',
          style: {
            color: '#3fb6d3'
          }
        },
        {
          skillName: 'Databricks',
          fontAwesomeClassname: 'simple-icons:databricks',
          style: {
            color: '#d20a2e'
          }
        },
        {
          skillName: 'Git',
          fontAwesomeClassname: 'simple-icons:git',
          style: {
            color: '#E94E32'
          }
        },
        {
          skillName: 'Github',
          fontAwesomeClassname: 'simple-icons:github',
          style: {
            color: '#101010'
          }
        },
        {
          skillName: 'C++',
          fontAwesomeClassname: 'simple-icons:cplusplus',
          style: {
            color: '#005494'
          }
        },
      ]
    },

    {
      title: 'Technical Softwares',
      fileName: 'CloudInfraImg',
      skills: [
        '⚡ Experience working on multiple hosting platform',
        '⚡ Utilizing tools and techniques to extract insights from datasets',
        '⚡ Experience with Continuous Integration'
      ],
      softwareSkills: [
        {
          skillName: 'AWS',
          fontAwesomeClassname: 'simple-icons:amazonaws',
          style: {
            color: '#FF9900'
          }
        },
        {
          skillName: 'Netlify',
          fontAwesomeClassname: 'simple-icons:netlify',
          style: {
            color: '#38AFBB'
          }
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassname: 'simple-icons:heroku',
          style: {
            color: '#6863A6'
          }
        },
        {
          skillName: 'Firebase',
          fontAwesomeClassname: 'simple-icons:firebase',
          style: {
            color: '#FFCA28'
          }
        },

        {
          skillName: 'MongoDB',
          fontAwesomeClassname: 'simple-icons:mongodb',
          style: {
            color: '#47A248'
          }
        },
        {
          skillName: 'Google Cloud',
          fontAwesomeClassname: 'simple-icons:googlecloud',
          style: {
            color: '#47A998'
          }
        }
      ]
    }
  ]
};

const degrees = {
  degrees: [
    {
      title: 'Vellore Institute of Technology, Bhopal',
      subtitle: 'Bachelor in Computer Science and Engineering',
      logo_path: 'vellore-institute-of-technology-vit-university-logo.png',
      alt_name: 'NITH',
      duration: '2021 - Present',
      descriptions: [
        "⚡ I'm currently pursuing my bachelors in Computer Science and Engineering.",
        '⚡ I have studied core subjects like Data Structures, DBMS, etc.',
        '⚡ I have also completed various online courses for Backend , Frontend, Cloud Computing etc.',
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. "
      ],
      website_link : "https://vit.ac.in/"
    },
    {
      title: 'Amity International School',
      subtitle: 'High School and Intermediate',
      logo_path: 'amityschool.png',
      alt_name: 'VBPS',
      duration: '2017 - 2020',
      descriptions: [
        '⚡ I have completed my High school and Intermediate from this School.',
        '⚡ I have participated many inter school competition based on science and research.'
      ],

      website_link : "https://amityschools.in/pushpvihar/"
    }
  ]
};

const certifications = {
  certifications: [
    {
      title: 'Google Cloud Digital Leader',
      subtitle: 'Google',
      logo_path: 'google.png',
      img_path: 'google2.jpg',
      alt_name: 'Stanford University',
      color: '#0B5394',
      color_code: '#0096FF',
      discription:
        'Certified Google Cloud Digital Leader, proficient in cloud strategy, digital transformation, and leading innovation with Google Cloud solutions.'
    },

    {
      title: 'NPTEL Cloud Computing',
      subtitle: 'NPTEL',
      logo_path: 'NPTEL-A-complete-Guide.png',
      img_path: 'nptel.jpg',
      alt_name: 'DeepLearning.ai',
      color_code: 'rgb(0, 150, 255)',
      discription:
        'An online non-credit course authorized by NPTEL and offered by GOVT. Of India'
    },
    {
      title: 'Google Data Analytics',
      subtitle: 'Google',
      logo_path: 'udemy.png',
      img_path: 'token.png',
      alt_name: 'Workshop',
      color_code: '#676FA3',
      discription: 'The complete Google Data Analytics Course- Basic to Advance'
    },

    {
      title: 'Web Development Intermediate Course',
      subtitle: 'Guide to Modern Web Development',
      logo_path: 'gssoc.png',
      img_path: 'web3.png',
      alt_name: 'GIRLSCRIPT.TECH',
      color_code: '#FF5733',
      discription:
        'Web Development Intermediate Course as a part of Education Outreach Program '
    },
    {
      title: 'SQL Skill Assessment',
      subtitle: 'HackerRank',
      logo_path: 'HackerRank.png',
      img_path: 'webd2.png',
      alt_name: 'HackerRank',
      color_code: '#FF5733',
      discription:
        'SQL Intermediate Course '
    }
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ]
};
//aboutPage
const about = {
  title: 'About',
  discriptionLine: 'Data Analyst, Tech enthusiast.',
  extraLine: ' Always in my learning phase.',
  discription:
    'As a data analyst, I leverage advanced tools and techniques to transform data into actionable insights. Proficient in Python, R, and SQL, I excel at data manipulation, statistical analysis, and building predictive models. My experience includes creating interactive dashboards with Tableau and Power BI, and managing large datasets through ETL processes. I’ve worked on diverse projects, such as customer segmentation, sales forecasting, and sentiment analysis, to drive informed business decisions and strategic initiatives'
};
// Experience Page
const experience = {
  title: 'Experience',
  subtitle: 'Work, Internship and Volunteership',
  description:
    "I've mostly done projects on Data Analytics and I am actively looking for collaboration. I love exchanging words on latest technology to share my knowledge with others.",
  header_image_path: 'experience.svg',
  sections: [
    {
      title: 'Work Experience',
      experiences: [
        {
          title: 'Data Analyst (Intern)',
          company: 'Emer-Tech Solutions',
          company_url: 'https://emertech.co.in/',
          logo_path: 'rishabh.jpg',
          duration: 'Apr-2024 - Jun 2024',
          location: 'Bhubaneshwar',
          description: `Worked as a Data Analyst intern at Emer-Tech Solutions was a great experience to learn new technologies and work on real world projects.
          `,
          color: '#0071C5'
        },

      ]
    }
  ]
};

// Projects Page
const projectsHeader = {
  title: 'Projects',
  description:
    'My projects make use of a vast variety of latest technology tools. My best experience is to create Data Analytics project using Python, SQL and PowerBi. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.',
  avatar_image_path: 'projects_image.svg'
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: 'Contact Me',
    profile_image_path: '360_F_313404541_e9YZ3pht6oEEkMXuhxTboqXA2B2ShNnC.jpg',

    description:
      'You can contact me at the places mentioned below. I will try to get back to you as fast as I can. '
  },
  blogSection: {
    title: 'Blogs',
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    twiter_link: '',
    medium_link: '',
    avatar_image_path: 'blogs_image.svg'
  }
};

const projects = {
  data: [
    {
      id: '0',
      name: 'Goal Prediction and Player Performance Analytics',
      url: 'https://github.com/slenka28/Goal-Prediction-and-Player-Performance-Analytics',
      img_url: 'SALES01.jpg',
      description:
        'The purpose of this Research study is to explore how Machine Learning and Data Analytics can be applied to forecast football goals and player metrics. The study uses the dataset of 900,000 soccer event over 9,074 European games and develop a model that can predict the probability of the goal being scored irrespective to the player.',
      languages: [
        {
          name: 'TensorFlow',
          iconifyClass: 'logos-tensorflow'
        },

        {
          name: 'Python',
          iconifyClass: 'logos-python'
        },

        {
          name: 'Google Cloud',
          iconifyClass: 'logos-google-cloud'
        }
        ,
        {
          name: 'MySQL',
          iconifyClass: 'logos-mysql'
        }


      ]
    },

    {
      id: '2',
      name: 'SalesPulse Analytics',
      url: 'https://github.com/slenka28/SalesPulse-Analytics',
      img_url: 'SALES03.jpg',
      description:
        'Project focuses on analyzing sales performance across various dimensions to gain actionable insights. Using a dataset containing sales transactions, the project explores trends in revenue, customer demographics, product preferences, and regional performance. The analysis is done through SQL queries, data visualizations using Power BI, and statistical techniques.The goal is to identify key sales drivers, forecast future trends, and recommend strategies to optimize sales operations.',
      languages: [
       

        {
          "name": "Seaborn",
          "iconifyClass": "logos:seaborn",
          "style": {
            "color": "#4B8F29"  // Adjust color as needed
          }
        },
        {
          name: 'Python',
          iconifyClass: 'logos-python'
        },

        {
          name: 'Google Cloud',
          iconifyClass: 'logos-google-cloud'

        }
        ,
        {
          name: 'MySQL',
          iconifyClass: 'logos-mysql'
        }


      ]
    },
    {
      id: '3',
      name: 'DriveLine Dynamics',
      url: 'https://github.com/slenka28/Driveline-Dynamics',
      img_url: 'car2.jpg',
      description:
        'The project is a frontend-focused web application designed for users to explore and purchase cars. Built using React and JavaScript, the website features a user-friendly interface where customers can browse through a catalog of cars, filter by brand, price, and specifications, and view detailed car profiles with images and descriptions. The site also includes a dynamic search bar and responsive design for optimal performance on all devices. JSON is used to manage car listings and user data, enabling a seamless experience for users to inquire and make purchasing decisions.',
      languages: [
        {
          name: 'MongoDb',
          iconifyClass: "logos-mongodb"
        },
        {
          name: 'HTML5',
          iconifyClass: 'vscode-icons:file-type-html'
        },
        {
          name: 'CSS3',
          iconifyClass: 'vscode-icons:file-type-css'
        },
        {
          name: 'React',
          iconifyClass: 'logos-react'
        },

        {
          "name": "JavaScript",
          "iconifyClass": "logos:javascript",
          "style": {
            "color": "#F7DF1E"  // JavaScript's typical color
          }
        }
        
      ]
    },
  ]
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  about,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  skillprogress
};
