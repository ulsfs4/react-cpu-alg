import img2 from "../assets/download-removebg-preview.png";
import img3 from "../assets/-PDKhzd7m.png";
import img4 from "../assets/srt.png";
import img5 from "../assets/rr.png";
import Sjfbox from "./Sjfbox";
import { Element } from "react-scroll";
export default function Main() {
  return (
    <>
      <div className="w-10/12 h-[75vh] bg-mist-950 rounded-3xl mt-6 border border-mist-600 flex items-center justify-around overflow-hidden">
        <div className="w-3/5 h-full flex items-center justify-center  ">
          <div className="w-full h-[70%] pl-8">
            <h1 className=" text-5xl font-extrabold uppercase font-mono bg-linear-to-r from-mist-700 to-gray-400 bg-clip-text text-transparent">
              processor scheduling sumilation
            </h1>
            <div className="w-full flex items-center gap-12">
              <h3 className="uppercase text-3xl font-bold font-mono text-gray-400 ">
                sjf
              </h3>
              <h3 className="uppercase text-3xl font-bold font-mono text-gray-400 ">
                srt
              </h3>
              <h3 className="uppercase text-3xl font-bold font-mono text-gray-400 ">
                rr
              </h3>
            </div>
            <p className=" text-gray-400 text-xl font-bold font-mono mt-6">
              Processor scheduling is a key concept in operating systems that
              decides how the CPU handles multiple processes waiting to run.
              Since many tasks often compete for limited CPU time, the system
              must choose an order to execute them efficiently. Different
              scheduling algorithms use different strategies to manage this
              selection. Some focus on completing shorter tasks quickly, while
              others aim to give each process a fair share of CPU time. These
              approaches help improve performance, reduce waiting time, and
              ensure that the system remains responsive when handling multiple
              programs at the same time.
            </p>
          </div>
        </div>
        <div className="w-2/5 h-full  flex items-center justify-center">
          <img src={img2} alt="" className="w-9/12" />
        </div>
      </div>
      <Element name="learnP" className="w-10/12 h-[75vh] bg-mist-950 rounded-3xl mt-6 border border-mist-600 flex items-center justify-around overflow-hidden">
        <div className="w-[30%] h-11/12 rounded-3xl flex flex-col items-center border border-mist-600">
          <h1 className="font-mono uppercase font-bold text-2xl m-4 text-gray-400">
            shortest job first
          </h1>
          <img className="w-[90%] rounded-xl" src={img3} alt="imkjg" />
          <p className="w-[90%] mt-4 text-gray-400 text-lg font-bold text-justify">
            The Shortest Job First (SJF) algorithm is a CPU scheduling method
            used in operating systems. It selects the process with the smallest
            execution time to run next, reducing average waiting time. This
            makes it more efficient than many other scheduling algorithms.
            However, it requires knowing execution time in advance and may cause
            starvation for longer processes.
          </p>
        </div>
        <div className="w-[30%] h-11/12 rounded-3xl flex flex-col items-center border border-mist-600">
          <h1 className="font-mono uppercase font-bold text-2xl m-4 text-gray-400">
            shortest remaining time
          </h1>
          <img className="w-[90%] rounded-xl" src={img4} alt="img" />
          <p className="w-[90%] mt-4 text-gray-400 text-lg font-bold  text-justify">
            The Shortest Remaining Time (SRT) algorithm is the preemptive
            version of SJF. It always selects the process with the smallest
            remaining execution time to run next. If a new process arrives with
            a shorter time, it interrupts the current one. This reduces average
            waiting time and improves efficiency. However, it can cause
            starvation for longer processes and adds overhead due to frequent
            switching.
          </p>
        </div>
        <div className="w-[30%] h-11/12 rounded-3xl flex flex-col items-center border border-mist-600  ">
          <h1 className="font-mono uppercase font-bold text-2xl m-4 text-gray-400">
            round robin
          </h1>
          <img className="w-[90%] rounded-xl" src={img5} alt="img" />
          <p className="w-[90%] mt-4 text-gray-400 text-lg font-bold  text-justify">
            The Round Robin (RR) algorithm is a CPU scheduling technique where
            each process is given a fixed time slice (quantum). Processes are
            executed in a circular order, ensuring fair CPU sharing among all
            tasks. This prevents starvation and improves responsiveness,
            especially in interactive systems. However, performance depends on
            the time quantum size, as too small or too large values can reduce
            efficiency.
          </p>
        </div>
      </Element>
      <Sjfbox />
    </>
  );
}
