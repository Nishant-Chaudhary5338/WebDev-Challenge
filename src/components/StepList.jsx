/** @format */

import React from "react";
import { sampleData, sampleData2, sampleData3 } from "../SampleData";
import Step from "./Step";

const StepList = () => {
  return (
    <div className="m-20 space-y-40">
      <div className="flex items-end space-x-20 bg-gray-200 rounded-md m-20 p-20">
        <div className="w-44 ">
          <img
            src="https://www.kindpng.com/picc/m/53-534592_running-cartoon-man-png-download-cartoon-running-man.png"
            alt=""
          />
        </div>

        <div className="flex items-stretch">
          {sampleData.map((s) => (
            <Step
              key={s.id}
              isCurrent={s.isCurrent}
              badgeName={s.badgeName}
              SEQ_NUMBER={s.SEQ_NUMBER}
              data={s}
              isCompleted={s.isCompleted}
            ></Step>
          ))}
        </div>
      </div>

      <div className="flex items-end space-x-20 bg-gray-200 rounded-md m-20 p-20">
        <div className="w-44">
          <img
            src="https://www.kindpng.com/picc/m/53-534592_running-cartoon-man-png-download-cartoon-running-man.png"
            alt=""
          />
        </div>
        <div className="flex">
          {sampleData2.map((s) => (
            <Step
              key={s.id}
              isCurrent={s.isCurrent}
              badgeName={s.badgeName}
              SEQ_NUMBER={s.SEQ_NUMBER}
              isCompleted={s.isCompleted}
            ></Step>
          ))}
        </div>
      </div>
      <div className="flex items-end space-x-20 bg-gray-200 rounded-md m-20 p-20">
        <div className="w-44">
          <img
            className=""
            src="https://www.kindpng.com/picc/m/53-534592_running-cartoon-man-png-download-cartoon-running-man.png"
            alt=""
          />
        </div>

        <div className="flex items-stretch">
          {sampleData3.map((s) => (
            <Step
              key={s.id}
              isCurrent={s.isCurrent}
              badgeName={s.badgeName}
              SEQ_NUMBER={s.SEQ_NUMBER}
              data={s}
              isCompleted={s.isCompleted}
            ></Step>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepList;
