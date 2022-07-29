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
          <p className="text-sm">YOU ARE HERE</p>
          <GoLocation className="m-auto" />
        </div>
      )}
      {badgeName && (
        <div className="text-center">
          <p className="text-sm uppercase"> {badgeName} </p>
          <AiFillAndroid className="m-auto" />
        </div>
      )}
      <div
        style={{ marginBottom: (SEQ_NUMBER - 1) * 52 }}
        className={"h-32 w-32 " + stepColour}
      >
        <span className="text-sm my-6 font-semibold text-white">
          WORKOUT {SEQ_NUMBER}
        </span>
      </div>
    </div>
  );
};

Step.defaultProps = {
  isCurrent: false,
};
export default Step;
