import { useState } from "react";
import { Element } from "react-scroll";

export default function Sjfbox() {
  const [complition, setComplition] = useState(0);
  const [roundT, setRoundT] = useState(0);
  const [waitingT, setWaitingT] = useState(0);

  const [showTable, setShowTable] = useState(false);
  const [burstcount, setBurstcount] = useState(0);
  const [id, setId] = useState(0);
  const [allProcess, setAllProcess] = useState([]);
  const [process, setProcess] = useState({
    Pname: "P" + id,
    ArrivalT: "",
    BurstT: "",
  });
  const AddProcess = () => {
    if (process.ArrivalT !== "" && process.BurstT !== "") {
      const newp = {
        Pname: "P" + id,
        ArrivalT: Number(process.ArrivalT),
        BurstT: Number(process.BurstT),
      };

      setAllProcess([...allProcess, newp]);

      setProcess({
        Pname: "P" + id,
        ArrivalT: "",
        BurstT: "",
      });

      setId(id + 1);
      setBurstcount(burstcount + Number(process.BurstT));
      console.log(burstcount);
    }
  };
  const sjfstart = () => {
    return (
      <>
        <table className="border border-mist-400 border-collapse tracking-widest m-2  ">
          <thead className=" ">
            <tr className="px-8 py-10">
              <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                Process
              </th>
              <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                Arrival t
              </th>
              <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                Burst t
              </th>
              <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                Complition
              </th>
              <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                round t
              </th>
              <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                waiting t
              </th>
            </tr>
          </thead>
          {allProcess.map((process, i) => (
            <tbody key={i}>
              <tr>
                <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                  {process.Pname}
                </th>
                <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                  {process.ArrivalT}
                </th>
                <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                  {process.BurstT}
                </th>
                <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                  {complition}
                </th>
                <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                  {roundT}
                </th>
                <th className="px-2 py-2 border border-b-mist-400 text-mist-300">
                  {waitingT}
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </>
    );
  };

  /* const boxes = [];
  const [allnewProcess, setAllnewProcess] = useState([]);
  for (let i = 0; i < burstcount; i++) {
    for (let j = 0; j < id; j++){
    if (allProcess[j].ArrivalT===i && allProcess[j].BurstT !=0){
      setAllnewProcess([...allnewProcess,allProcess[j]]);
      const prname=allProcess[i].Pname;
      setAllnewProcess([...allnewProcess,allnewProcess[j].BurstT-1])
      boxes.push(<div key={i} className="w-8 h-8 m-1 border border-mist-400 flex items-center justify-center text-mist-100">{prname}</div>);
    }}

    
  }*/
  const boxes = [];
  let tempNew = [];

  for (let i = 0; i < burstcount; i++) {
    for (let j = 0; j < allProcess.length; j++) {
      if (allProcess[j].ArrivalT === i) {
        tempNew.push({ ...allProcess[j] });
      }
    }
    let shortestIndex = -1;

    for (let k = 0; k < tempNew.length; k++) {
      if (tempNew[k].BurstT > 0) {
        if (
          shortestIndex === -1 ||
          tempNew[k].BurstT < tempNew[shortestIndex].BurstT
        ) {
          shortestIndex = k;
        }
      }
    }

    if (shortestIndex !== -1) {
      const pr = tempNew[shortestIndex];

      boxes.push(
        <div
          key={i}
          className="w-8 h-8 m-1 border border-mist-400 flex items-center justify-center text-mist-100"
        >
          {pr.Pname}
        </div>,
      );

      pr.BurstT -= 1;
      if (pr.BurstT === 0) {
        setComplition(i);
        setRoundT(complition - pr.BurstT);
        setWaitingT(complition - pr.BurstT - pr.ArrivalT);
      }
    } else {
      boxes.push(
        <div
          key={i}
          className="w-8 h-8 m-1 border border-mist-400 flex items-center justify-center text-gray-500"
        >
          -
        </div>,
      );
    }
  }
  return (
    <Element
      name="srtP"
      className="w-10/12 min-h-100 m-10 mx-h-[800px] bg-mist-950 rounded-3xl mt-6 border border-mist-600 flex flex-col items-center justify-around overflow-hidden p-6"
    >
      <div className=" w-10/12 min-h-62 flex flex-col justify-center items-center rounded-3xl ">
        <div className="w-3/4 h-full  rounded-3xl  border border-mist-600 flex flex-col items-center p-3">
          <div className="flex w-5/6 justify-between items-center gap-7 px-10 rounded-3xl  border border-mist-600 h-12">
            <div className="w-4/6 flex justify-center items-center gap-7 px-10">
              <h3 className="text-gray-400 ">SRT</h3>
              <h3 className="text-gray-400 ">P{id}</h3>
              <input
                value={process.ArrivalT}
                onChange={(e) => {
                  setProcess({ ...process, ArrivalT: e.target.value });
                }}
                type="text"
                placeholder="Arrival"
                className="w-20 rounded-3xl border border-mist-600 pl-4 h-8 text-gray-400 "
              />
              <input
                value={process.BurstT}
                onChange={(e) => {
                  setProcess({ ...process, BurstT: e.target.value });
                }}
                type="text"
                placeholder="Burst"
                className="w-20 rounded-3xl border border-mist-600 pl-4 h-8 text-gray-400 "
              />
              <button
                onClick={AddProcess}
                className="px-4 h-8 text-gray-400  rounded-3xl border border-mist-600 hover:text-gray-200  hover:bg-mist-800 transition duration-300"
              >
                Add
              </button>
            </div>
            <button
              onClick={() => setShowTable(true)}
              className="px-4 h-8 text-gray-400  rounded-3xl border border-mist-600 hover:text-gray-200  hover:bg-mist-800 transition duration-300 ml-10"
            >
              Start
            </button>
          </div>
          {allProcess.map((p, index) => (
            <div
              key={index}
              className="w-2/4 flex justify-between items-center border border-mist-600 rounded-xl px-4 py-2 text-gray-300 m-2"
            >
              <span>{p.Pname}</span>
              <span>Arrival time: {p.ArrivalT}</span>
              <span>Burst time: {p.BurstT}</span>
            </div>
          ))}
        </div>
      </div>

      {showTable && (
        <div className="w-5/8 m-4  rounded-3xl  border border-mist-600 flex flex-col items-center p-3">
          {sjfstart()}
        </div>
      )}

      {showTable && (
        <div className="w-5/8  rounded-3xl  border border-mist-600 flex items-center justify-center p-3 flex-wrap">
          {boxes}
        </div>
      )}
    </Element>
  );
}
