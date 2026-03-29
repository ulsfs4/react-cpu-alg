import "../index.css";
import Cpu from "/cpu1.png";
import { Link } from "react-scroll";
export default function Header() {
  return (
    <>
      <div className="w-10/12 h-15  rounded-3xl mt-6 border border-mist-600 flex items-center justify-center gap-x-20  ">
        <div className="w-auto text-gray-400  h-6   flex items-center justify-center hover:text-gray-300 hover:border-b-gray-300 transition duration-300  p-5  select-none">
          <Link to="sjfP" smooth={true} duration={500}>
            SJF
          </Link>
        </div>
        <div className="w-auto text-gray-400  h-6  flex items-center justify-center hover:text-gray-300 hover:border-b-gray-300 transition duration-300 p-5 select-none">
          <Link to="srtP" smooth={true} duration={500}>
            SRT
          </Link>
        </div>
        <div className="w-auto text-gray-400  h-6  flex items-center justify-center hover:text-gray-300 hover:border-b-gray-300 transition duration-300 p-5 select-none">
          <Link to="section1" smooth={true} duration={500}>
            RR
          </Link>
        </div>
        <div>
          <img src={Cpu} alt="" className="w-15 to-white mx-auto" />
        </div>
        <div className="w-auto text-gray-400  h-6  flex items-center justify-center hover:text-gray-300 hover:border-b-gray-300 transition duration-300 p-5 select-none">
          <Link to="learnP" smooth={true} duration={500}>
            Learn
          </Link>
        </div>
        <div className="w-auto text-gray-400  h-6   flex items-center justify-center hover:text-gray-300 hover:border-b-gray-300 transition duration-300 p-5 select-none">
          <Link to="section1" smooth={true} duration={500}>
            Home
          </Link>
        </div>

        <div className="w-auto text-gray-400  h-6 flex items-center justify-center hover:text-gray-300 hover:border-b-gray-300 transition duration-300 p-5 select-none">
          <Link>About</Link>
        </div>
      </div>
    </>
  );
}
