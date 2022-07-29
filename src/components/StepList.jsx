/** @format */

import React from "react";
import { sampleData, sampleData2, sampleData3 } from "../SampleData";
import Step from "./Step";

const StepList = () => {
  return (
    <div className="m-20">
      <div className="flex space-x-20">
        <div className="w-60 relative top-44">
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
      <div className="flex space-x-20">
        <div className="w-60 relative top-44">
          <img
            src="https://www.kindpng.com/picc/m/53-534592_running-cartoon-man-png-download-cartoon-running-man.png"
            alt=""
          />
        </div>
        <div className="flex items-stretch">
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
      <div className="flex space-x-20">
        <div className="w-60 relative top-44">
          <img
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
