/** @format */

import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

const Step = ({ badgeName, isCurrent, SEQ_NUMBER }) => {
  let themeClasses;
  if (SEQ_NUMBER > 2) {
    themeClasses = "bg-blue-500";
  } else {
    themeClasses = "bg-green-500";
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
      <div className={"mt-2 h-32 w-32 " + themeClasses}>
        <span className="text-sm font-semibold text-white">
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
