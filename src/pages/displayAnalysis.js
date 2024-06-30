import { useState } from "react";
import bva from "../image/bva.jpeg";
import Fetchdata from "../component/fetchdata";

export default function Displayanalysis() {
  function getdate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    return `${date} : ${month} : ${year}`;
  }

  const [date, setDate] = useState(getdate());
  return (
    <>
      <div className="container mx-auto p-4 bg-[#fcfcfc] h-screen">
        <img src={bva} alt="BVA_Logo" className="w-22 h-10" />
        <div className="grid grid-cols-12 gap-4 mt-20 ml-20">
          <div className="bg-green-200 col-span-8"> hello</div>
          <div className="col-span-3">
            <div className=" border border-1 border-black rounded-md p-1 pl-2 mb-3 text-center">
              {date}
            </div>
            <div className="mt-5 border border-1 border-black rounded-md p-1 h-72 overflow-auto">
              <Fetchdata />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
