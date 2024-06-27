import { 
  FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare, 
  FaBootstrap, FaAngular, FaDocker, FaAws, FaMicrosoft, FaJava,
  FaPython, FaGit, FaLinux
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiPostgresql, SiFirebase, SiAzuredevops, SiKubernetes, SiGooglecloud, SiAnsible, SiC, SiCplusplus } from "react-icons/si";
import Image from 'next/image';
import profilePic from "@/assets/John.png"; // Correct the path to the image if necessary

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-20 flex flex-col items-center">
      <div className="flex flex-col items-center mb-10">
        <Image
          src={profilePic}
          alt="Profile Picture"
          className="rounded-full"
          width={300}
          height={200}
          objectFit="cover"
        />
        <h1 className="text-3xl font-bold mt-5">Lim Zi Yang, John</h1>
      </div>

      <div className="max-w-4xl text-center mb-10">
        <p className="text-lg">
          Hello! I'm John, a Final Year Business Analytics and Computer Science Student from Nanyang Technological University. I am passionate software developer with experience in building web applications using modern technologies. I love coding, learning new skills, and going for hackathons. My goal is to create impactful solutions that make a difference.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-5">Skills and Tech Stack</h2>
        
        <h3 className="text-xl font-semibold mt-5 mb-10">Frontend</h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center">
            <FaHtml5 size={50} className="text-red-500" />
            <p className="mt-2">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <FaCss3Alt size={50} className="text-blue-700" />
            <p className="mt-2">CSS3</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJsSquare size={50} className="text-yellow-500" />
            <p className="mt-2">JavaScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaReact size={50} className="text-blue-500" />
            <p className="mt-2">React</p>
          </div>
          <div className="flex flex-col items-center">
            <FaBootstrap size={50} className="text-purple-500" />
            <p className="mt-2">Bootstrap</p>
          </div>
          {/* <div className="flex flex-col items-center">
            <SiMaterialui size={50} className="text-blue-500" />
            <p className="mt-2">MaterialUI</p>
          </div> */}
          <div className="flex flex-col items-center">
            <FaAngular size={50} className="text-red-500" />
            <p className="mt-2">Angular</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-10 mb-10">Backend</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {/* <div className="flex flex-col items-center">
            <FaGolang size={50} className="text-blue-500" />
            <p className="mt-2">Golang</p>
          </div> */}
          <div className="flex flex-col items-center">
            <FaNodeJs size={50} className="text-green-500" />
            <p className="mt-2">Node.js</p>
          </div>
          {/* <div className="flex flex-col items-center">
            <SiExpress size={50} className="text-black" />
            <p className="mt-2">Express</p>
          </div> */}
          <div className="flex flex-col items-center">
            <SiMongodb size={50} className="text-green-500" />
            <p className="mt-2">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase size={50} className="text-orange-500" />
            <p className="mt-2">MSSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <SiPostgresql size={50} className="text-blue-500" />
            <p className="mt-2">Postgres</p>
          </div>
          <div className="flex flex-col items-center">
            <SiFirebase size={50} className="text-yellow-500" />
            <p className="mt-2">Firebase</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-10 mb-10">Cloud Technologies</h3>
        <div className="flex flex-wrap justify-center gap-10">
          <div className="flex flex-col items-center">
            <FaMicrosoft size={50} className="text-blue-700" />
            <p className="mt-2">Azure</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAws size={50} className="text-orange-500" />
            <p className="mt-2">AWS</p>
          </div>
          <div className="flex flex-col items-center">
            <FaDocker size={50} className="text-blue-500" />
            <p className="mt-2">Docker</p>
          </div>
          <div className="flex flex-col items-center">
            <SiKubernetes size={50} className="text-blue-500" />
            <p className="mt-2">Kubernetes</p>
          </div>
          <div className="flex flex-col items-center">
            <SiAnsible size={50} className="text-red-500" />
            <p className="mt-2">Ansible</p>
          </div>
          <div className="flex flex-col items-center">
            <SiGooglecloud size={50} className="text-blue-500" />
            <p className="mt-2">GCP</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-10 mb-10">Software (Misc.)</h3>
        <div className="flex flex-wrap justify-center gap-10">
          {/* <div className="flex flex-col items-center">
            <FaLinux size={50} className="text-black" />
            <p className="mt-2">Linux</p>
          </div> */}
          <div className="flex flex-col items-center">
            <SiC size={50} className="text-blue-500" />
            <p className="mt-2">C</p>
          </div>
          <div className="flex flex-col items-center">
            <SiCplusplus size={50} className="text-blue-500" />
            <p className="mt-2">C++</p>
          </div>
          <div className="flex flex-col items-center">
            <FaPython size={50} className="text-yellow-500" />
            <p className="mt-2">Python</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJava size={50} className="text-red-500" />
            <p className="mt-2">Java</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGit size={50} className="text-orange-500" />
            <p className="mt-2">Git</p>
          </div>
          {/* <div className="flex flex-col items-center">
            <SiKafka size={50} className="text-black" />
            <p className="mt-2">Kafka</p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
