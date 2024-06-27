export const navItems = [
  { name: "About", link: "#about" },
  { name: "Work Experiences", link: "#workexperiences" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "LastCallSG - E-commerce Platform",
    des: "At LastCallSG, we're driven to combat food waste through innovative tech solutions. Our mission is to create a sustainable ecosystem where small actions by online grocery retailer collectively make a significant impact in reducing food waste and promoting environmental sustainability..",
    img: "/lastcall.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg","/aws.png"],
    link: "https://github.com/Yuandjom/LastCallSG",
  },
  {
    id: 2,
    title: "Ascendo - Mobile Work Companion",
    des: "Ascendo is a two-pronged, innovative mobile application aimed at enhancing employee experience and increasing work efficiency through the means of gamification.",
    img: "ascendo2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/aws.png"],
    link: "https://github.com/weikangg/Ascendo",
  },
  {
    id: 3,
    title: "GetFit - Social Media Platform",
    des: "One stop social media web application for users who wants to kickstart their fitness routines!",
    img: "/getfit.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "mongodb.png", "node.png"],
    link: "https://github.com/Yuandjom/SC2006-GETFIT-TeamError202",
  },
  {
    id: 4,
    title: "TechTitans - Career Platform",
    des: "TechTitans aims to bring creative solutions to help aspiring techies to determine their career paths in the tech industry through increasing outreach to the student population. We hope to give users a customized exprience in navigating through their journey to clinch their desired jobs.",
    img: "/techtitans.png",
    iconLists: ["/re.svg", "/tail.svg", "mongodb.png", "node.png"],
    link: "https://tech-titans-techfest-project.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Beyond technical skills, John exhibited strong communication and collaboration abilities. He worked effectively within the team, ensuring his contributions were integrated seamlessly with the project objectives. His enthusiasm for learning and problem-solving was evident throughout his internship.",
    name: "Ayush Batra",
    title: "Regional Director for Technical Enablement",
  },
];

export const companies = [
  {
    id: 1,
    name: "Intel",
    img: "/image.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Data Analyst Intern",
    desc1: "- Leveraged Python libraries numpy and pandas extensively for data manipulation tasks, integrating various data sources to analyze banking supervisory processes efficiently.",
    desc2: "- Utilized Tableau to conduct in-depth analysis and visualisation of Fitch credit rating changes, providing actionable insights to stakeholders within the organisation.",
    desc3: "- Developed Python and Excel VBA scripts to automate manual data entry and validation processes, resulting in a 25% improved workload efficiency and accuracy.",
    className: "md:col-span-2",
    thumbnail: "/mas2.png",
  },
  {
    id: 2,
    title: "DevOps Engineer Intern",
    desc1: "- Administered a multi-node Kubernetes (K8s) cluster for testing the environment independently with Kubeadm",
    desc2: "- Implemented monitoring and logging using Prometheus and Grafana via Helm Charts for system insights",
    desc3: "- Developed Ansible automation scripts to enhance workload configuration and deployment efficiency for OneIntel AI projects in a linux environment",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/intel.png",
  },
  {
    id: 3,
    title: "Software Engineer Intern - Fullstack",
    desc1: "- Developed a proof of concept for a one-stop enterprise application kiosk for users within DSO to find all their relevant needs using MongoDB, Express, AngularJS and Node.js",
    desc2: "- Built event-driven microservices with Apache Kafka, Zookeeper and RESTful microservices with Node.js using Podman containers in Red Hat Enterprise Linux (RHEL)",
    desc3: "- Deployed dockerised microservice applications into Microsoft Azure DevOps CI/CD pipelines",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/dso.png",
  },
  {
    id: 4,
    title: "Technology Risk Intern",
    desc1: "- Performed IT external audit to analyse business, information systems and other data processing problems to implement and improve computer systems",
    desc2: "- Assessed and evaluated IT systems to mitigate IT-related business risks",
    desc3: "- Analysed client requirements, procedures, and problems to improve existing systems and reviewed computer system capabilities, workflow, and scheduling limitations",
    className: "md:col-span-2",
    thumbnail: "/EY.png",
  },
  {
    id: 5,
    title: "Digitalisation Intern",
    desc1: "- Developed a visitor management application for the guardhouse to manage and regulate the inflow and outflow of visitors using Microsoft Power App and Power Automate",
    desc2: "- Leveraged Microsoft Power BI, including DAX, to analyse visitor forms data and create insightful dashboards",
    desc3: "- Implemented a streamlined multi-level approval workflow, significantly enhancing work efficiency and minimizing manual intervention",
    className: "md:col-span-2",
    thumbnail: "/fnn2.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Yuandjom"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/john-lim-zi-yang/"
  },
];
