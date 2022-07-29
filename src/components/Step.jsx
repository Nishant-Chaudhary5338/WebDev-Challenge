/** @format */

import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Step = ({ badgeName, isCurrent, SEQ_NUMBER, isCompleted }) => {
  let stepColour;
  if (isCompleted == true) {
    stepColour = "bg-green-500";
  } else {
    stepColour = "bg-blue-500";
  }
  return (
    <div className="flex flex-col space-y-4 justify-end">
      {isCurrent && (
        <div className="text-center">
          <p className="text-xs mb-20">YOU ARE HERE</p>
          <GoLocation className="m-auto" />
        </div>
      )}
      {badgeName && (
        <div className="text-center">
          <p className="text-xs uppercase"> {badgeName} </p>
          <AiFillAndroid className="m-auto" />
        </div>
      )}
      <div
        style={{ marginBottom: (SEQ_NUMBER - 1) * 44 }}
        className={"h-24 w-24 " + stepColour}
      >
        <p className="text-xs my-10 mx-2 font-semibold text-white">
          WORKOUT {SEQ_NUMBER}
        </p>
      </div>
    </div>
  );
};

Step.defaultProps = {
  isCurrent: false,
};
export default Step;
