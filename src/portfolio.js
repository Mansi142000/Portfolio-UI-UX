/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mansi Negi",
  title: "Hi, I'm Mansi",
  subTitle: emoji(
    "Masters student in Computer Science at Northeastern University, specializing in UI/UX design with a strong background in HTML, CSS, JavaScript, and React. Passionate about creating intuitive and impactful user experiences."
  ),
  resumeLink:
    " ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Mansi142000",
  linkedin: "https://www.linkedin.com/in/mansi-negi-700463188/",
  gmail: "negi.ma@northeastern.edu",
  display: true 
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Teaching Assistant",
      company: "Northeastern University",
      companylogo: require("./assets/images/neulogoWhite.png"),
      date: "Jan 2024 – Present",
      desc: "Teaching Assistant committed to enhancing student learning by managing extensive weekly office hours, promptly addressing online inquiries, and grading assignments with detailed feedback for a large class.",
      descBullets: [
      "Conducted 5-hour weekly office hours and managed Piazza inquiries, ensuring responses within 10 hours to boost student engagement.",
      "Consistently addressed 20 student inquiries each week, enhancing understanding and interaction.",
      "Graded assignments and class activities for 115 students using detailed rubrics to ensure consistency.",
      "Provided constructive feedback on assignments to support and foster student academic development."
      ]
    },
    {
      role: "Quality Specialist",
      company: "Bank of America",
      companylogo: require("./assets/images/bofalogo.png"),
      date: "June 2021 – July 2023",
      desc: "Conducted extensive quality assessments and managed testing processes, significantly enhancing software functionality and reducing defects.",
      descBullets: [
        "Conducted quality assessments, reduced defects by 40%, boosted user satisfaction by 65%.",
        "Identified 50+ defects, improved resolutions, reduced support issues by 45%.",
        "Facilitated dialogue between stakeholders, developers, product owners to solve quality concerns, giving feedback.",
        "Conducted comprehensive integration testing, regression testing to identify software defects and verify bug fixes."
      ]
    }
  ]
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Northeastern University",
      logo: require("./assets/images/neulogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2023 - May 2025",
      desc: "Coursework",
      descBullets: [
        "Database Management Systems",
        "Programming design paradigm",
        "Human Computer Interaction",
        "Algorithms"
      ]
    },
    {
      schoolName: "SRM University",
      logo: require("./assets/images/srmlogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Coursework",
      descBullets: [
        "Data Structures",
        "Object Oriented Programming",
        "Software Engineering"
      ]
    }
  ]
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some projects I have worked on",
  projects: [
    {
      image: require("./assets/images/academia.png"),
      projectName: "Academia",
      projectDesc: "The project involved creating a prototype for a comprehensive academic collaboration platform.",
      footerLink: [
        {
          name: "View",
          url: "https://academia-site-nine.vercel.app/",
        }
      ]
    },
    {
      image: require("./assets/images/doordash.png"),
      projectName: "Redesign Project: Doordash",
      projectDesc: "Redesigned the restaurant menu page for DoorDash, enhancing user interface and user experience.",
      footerLink: [
        {
          name: "View",
          url: "https://doordash-redesign.vercel.app/",
        }
      ]
    },
    {
      image: require("./assets/images/uicritique.webp"),
      projectName: "Design Critique",
      projectDesc: " A detailed analysis focusing on usability, accessibility, and visual design, offering improvements to enhance user engagement and satisfaction.",
      footerLink: [
        {
          name: "Project Report",
          url: require("./assets/pdf/report.pdf"),
        }
      ]
    },
    {
      image: require("./assets/images/curesAct.webp"),
      projectName: "Cures Act: A Case Study",
      projectDesc: " A detailed analysis focusing on usability, accessibility, and visual design, offering improvements to enhance user engagement and satisfaction.",
      footerLink: [
        {
          name: "Report",
          url: require("./assets/pdf/Cures Act Report.pdf"),
        },
        {
          name: "Presentation",
          url: require("./assets/pdf/Presentation.pdf"),
        }
      ]
    },
    // {
    //   image: require("./assets/images/medical.webp"),
    //   projectName: "Medical Record Management System",
    //   projectDesc: "Developed a Medical Record Management System using Java Swing and MySQL, focusing on efficient data management with enhanced retrieval and UML visualization.",
    //   footerLink: [
    //     {
    //       name: "Code",
    //       url: "https://github.com/Mansi142000/Medical-Record-Management-System"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    // {
    //   image: require("./assets/images/data.webp"),
    //   projectName: "Heart Disease Prediction",
    //   projectDesc: "Data science project analyzed over 900 observations from five datasets using supervised ML algorithms like Linear Regression, SVM, Naïve Bayes, Decision Tree, achieving 88.4% accuracy in predicting heart disease outcomes.",
    //   footerLink: [
    //     {
    //       name: "Code",
    //       url: "https://github.com/Mansi142000/Heart-Disease-Prediction"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // },
    // {
    //   image: require("./assets/images/netflix.webp"),
    //   projectName: "Tableau Dashboard: Movies and TV Shows Analysis",
    //   projectDesc: "Developed an advanced Tableau dashboard for analyzing over 6,000 Netflix titles by ratings, genres, and global distribution to enhance content strategy and viewer engagement through data-driven decisions.",
    //   footerLink: [
    //     {
    //       name: "Code",
    //       url: "https://github.com/Mansi142000/Movies-and-TV-Shows-Analysis"
    //     }
    //     //  you can add extra buttons here.
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "My Inbox is open for all.",
  number: "+1 8575447814",
  email_address: "negi.ma@northeastern.edu"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  educationInfo,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
